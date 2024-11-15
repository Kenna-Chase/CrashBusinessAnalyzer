// Import the DynamoDB client from AWS SDK v3
import {DynamoDBClient} from "@aws-sdk/client-dynamodb";
import {DynamoDBDocumentClient, ScanCommand, GetCommand} from "@aws-sdk/lib-dynamodb";

// Create the DynamoDB client & document client
const client = new DynamoDBClient({ region: 'us-east-1' });
const ddbDocClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    const { yearMonth, companyName } = event; // Expect these attributes in the event payload
    if (!yearMonth || !companyName) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'yearMonth and companyName are required.' }),
        };
    }
    try {
        let response =  await findSalesCostGPData(companyName, yearMonth);
        const data = response.Items[0];
        const totals = aggregateSalesCostData(data);
        const gpCalcs = calculateIndividualGPs(data);
        //TODO:: Check if metric entry exists in data table & update metric entry with the totals

        return {
            statusCode: 200,
            body: JSON.stringify({ sectionTotals: totals, gpSectionCalculations: gpCalcs }),
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error }),
        };
    }
    return {
        statusCode: 200,
        body: JSON.stringify({ results: 'results....' }),
    };

};

// Find entry in DynamoDB table
async function findSalesCostGPData(companyName, yearMonth) {
    const command = new ScanCommand({
        TableName: process.env.DYNAMODB_TABLE,
        FilterExpression: "#yearMonth = :yearMonth AND #companyName = :companyName",
        ExpressionAttributeNames: {
            "#yearMonth": "yearMonth",
            "#companyName": "companyName",
        },
        ExpressionAttributeValues: {
            ":yearMonth": yearMonth,
            ":companyName": companyName,
        }

    });
    return ddbDocClient.send(command);
}

function aggregateSalesCostData (data) {

    const processSalesCostCategory = (category) => {
        let salesSubtotal = 0;
        let costSubtotal = 0;
        Object.keys(category).forEach((subCategory) => {
            if (category[subCategory].sales && category[subCategory].sales.value) {
                salesSubtotal += parseFloat(category[subCategory].sales.value) || 0;

            }
            if (category[subCategory].cost && category[subCategory].cost.value) {
                costSubtotal += parseFloat(category[subCategory].cost.value) || 0;
            }
        });
        return {sales: salesSubtotal, cost: costSubtotal}
    };

    const processCategory = (category) => {
        let subtotal = 0;
        Object.keys(category).forEach((subCategory) => {
            if (category[subCategory].value){
                subtotal += parseFloat(category[subCategory].value) || 0;
            }
        });
        return subtotal;
    };

    // Aggregate data for each main category
    const laborTotals = processSalesCostCategory(data.labor);
    const partsAndMaterialsTotal = processSalesCostCategory(data.partsAndMaterials);
    const otherTotal = processSalesCostCategory(data.other);

    //Sum all total sales sections
    const salesTotal = laborTotals.sales + partsAndMaterialsTotal.sales + otherTotal.sales;
    const costTotal = laborTotals.cost + partsAndMaterialsTotal.cost + otherTotal.cost;

    // For otherAdditionsAndDeductions, process `additions` and `deductions` separately
    const totalAdditions = processCategory(data.otherAdditionsAndDeductions.additions);
    const totalDeductions = processCategory(data.otherAdditionsAndDeductions.deductions)

    //Return section subtotals
    return { labor: {sales: laborTotals.sales, cost: laborTotals.cost},
        partsAndMaterials: {sales: partsAndMaterialsTotal.sales, cost: partsAndMaterialsTotal.cost},
        other: {sales: otherTotal.sales, cost: otherTotal.cost},
        salesTotal: salesTotal, costTotal: costTotal, gpTotal: salesTotal - costTotal,
        otherAdditionsAndDeductions: {additions: totalAdditions, dedections: totalDeductions} };
}

function calculateIndividualGPs(data) {
    let result = {};

    const processCategory = (category, categoryName) => {
        Object.keys(category).forEach((subCategory) => {
            const sales = parseFloat(category[subCategory].sales?.value || 0);
            const cost = parseFloat(category[subCategory].cost?.value || 0);
            const gp = sales - cost;

            // Add GP calculation for the current subCategory
            if (!result[categoryName]) {
                result[categoryName] = {};
            }

            result[categoryName][subCategory] = {
                sales,
                cost,
                gp
            };
        });
    };

    // Process each main category
    processCategory(data.labor, "labor");
    processCategory(data.partsAndMaterials, "partsAndMaterials");
    processCategory(data.other, "other");

    // Note: otherAdditionsAndDeductions sections is not GP calc (additions and deductions separately)

    return result;
}

import React, { useState } from 'react';
import { Button } from "antd";
import SectionPage from './SectionPage';
import SupplementMultiStepForm
    from "../FormSections/SupplementToFinancialStatement/SupplementMultiStepForm";
import SalesCostGPMultiStepForm from "../FormSections/SalesCostGrossProfit/SalesCostGPMultiStepForm";
import ExpensesMultiStepForm from "../FormSections/Expenses/ExpensesMultiStepForm";
import SummaryIncome from "../FormSections/SummaryIncomeStatement/SummaryIncome";
import BalanceSheetMultiStepForm from "../FormSections/BalanceSheet/BalanceSheetMultiStepForm";
import "../DataEntry.css";
import { putSalesCostGPRecord} from "../../ApiTesting/APIConnections.js";
import salesCostGrossProfitData from "../FormSections/SalesCostGrossProfit/SalesCostGrossProfitStruct.js";

const DataEntryForm= ({yearMonth}) => {
    const [currentSection, setCurrentSection] = useState(null);

    const [completedSections, setCompletedSections] = useState({
        section1: false,
        section2: false,
        section3: false,
        section4: false,
        section5: false,
    });

    const sectionContent = {
        section1: (<SupplementMultiStepForm />),
        section2: (<BalanceSheetMultiStepForm />),
        section3: (<SalesCostGPMultiStepForm />),
        section4: (<ExpensesMultiStepForm />),
        section5: (<SummaryIncome />),
    }

    //Handle form section submissions and mark as complete
    const handleSubmit = (section) => {
        setCompletedSections((prev) => ({
            ...prev,
            [section]: true,
        }));
        setCurrentSection(null); // Return to overview
        //Save Result to database
        //Based on section... save results to associated database
        console.log(section);
        saveDataPerSection(section);
    };

    /****** FOR DEMO *******/
    function fillStructWithData(obj) {
        // Iterate through each key in the object
        Object.keys(obj).forEach((key) => {
            if (typeof obj[key] === "object" && obj[key] !== null) {
                // If it's an object, recurse into it
                fillStructWithData(obj[key]);
            } else if (key === "value") {
                // If it's a "value" field, set the data
                obj[key] = randomValue(10,10000);
            }
        });
        return obj;
    }
    function randomValue (min, max ) {
        return parseInt(Math.random() * (max - min) + min);
    }
    const demoDataPerSection = (section) => {
        if(section.toString() === "section3"){
            console.log("Generating Section 3: Sales Cost GP Data")
            salesCostGrossProfitData.yearMonth = yearMonth;
            console.log(salesCostGrossProfitData.yearMonth);
            fillStructWithData(salesCostGrossProfitData);
            console.log(salesCostGrossProfitData);
        }
    }

    /************/
    const saveDataPerSection = (section) => {
        if(section.toString() === "section3"){
            console.log("Saving Section 3: Sales Cost GP .....")
            salesCostGrossProfitData.companyName = "TestCompany";
            salesCostGrossProfitData.yearMonth = yearMonth;
            console.log(salesCostGrossProfitData.yearMonth);
            console.log(salesCostGrossProfitData);
            putSalesCostGPRecord(salesCostGrossProfitData);
        }
    }
    const allSectionsCompleted = Object.values(completedSections).every((completed) => completed);

    //Handle overall form submission
    const handleFinalSubmit = () => {
        alert('All sections are complete. Submitting to database....');
        //TODO: Add database integration.
    };

    return (
        <div>
            {!currentSection ?
                (/* Data Overview of Sections */
                    <div>
                        <h1>Data Entry Form</h1>
                        <div style={styles.container}>
                            {/* Box for Section 1: Supplement to Financial Statement */}
                            <div
                                onClick={() => setCurrentSection('section1')}
                                style={{
                                    ...styles.box,
                                    backgroundColor: completedSections.section1 ? 'green' : 'lightgray',
                                }}
                            >
                                Supplement to Financial Statement
                            </div>

                            {/* Box for Section 2: Balance Sheet */}
                            <div
                                onClick={() => setCurrentSection('section2')}
                                style={{
                                    ...styles.box,
                                    backgroundColor: completedSections.section2 ? 'green' : 'lightgray',
                                }}
                            >
                                Balance Sheet
                            </div>

                            {/* Box for Section 3: Sales/Cost/GP */}
                            <div
                                onClick={() => setCurrentSection('section3')}
                                style={{
                                    ...styles.box,
                                    backgroundColor: completedSections.section3 ? 'green' : 'lightgray',
                                }}
                            >
                                Sales / Cost / Gross-Profit
                            </div>

                            {/* Box for Section 4: Expenses */}
                            <div
                                onClick={() => setCurrentSection('section4')}
                                style={{
                                    ...styles.box,
                                    backgroundColor: completedSections.section4 ? 'green' : 'lightgray',
                                }}
                            >
                                Expenses
                            </div>
                            {/* Box for Section 5: Summary Income Statement */}
                            <div
                                onClick={() => setCurrentSection('section5')}
                                style={{
                                    ...styles.box,
                                    backgroundColor: completedSections.section5 ? 'green' : 'lightgray',
                                }}
                            >
                                Summary Income Statement
                            </div>
                            {/* Show overall submit button if all sections are completed */}
                            {allSectionsCompleted && (
                                <Button
                                    type={"primary"}
                                    onClick={handleFinalSubmit}>
                                    Submit All
                                </Button>
                            )}
                        </div>

                    </div>
                ) : (
                    /* Render selected SectionPage */
                    <SectionPage
                        section={currentSection}
                        content={sectionContent[currentSection]}
                        handleSubmit={handleSubmit}
                        generateDemoData={demoDataPerSection}
                        goBack={() => setCurrentSection(null)}
                    />)}

            <br/>
        </div>
    );
}

const styles = {
    container: {
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        margin: 'auto',
    },
    box: {
        width: '500px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'black',
        borderRadius: '8px',
        fontSize: '18px',
        textAlign: 'center',
        cursor: 'pointer',
        marginBottom: '20px',
    },
};

export default DataEntryForm;
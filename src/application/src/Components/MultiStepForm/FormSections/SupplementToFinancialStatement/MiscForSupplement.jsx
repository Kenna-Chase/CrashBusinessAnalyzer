import {NumericFormat} from "react-number-format";
import React, {useContext} from "react";
import supplementToFinancialStatementData from "./FinancialStatementStructs";
import {Button} from "antd";
import SupplementFormContext from "./SupplementFormContext";

const MiscForSupplement = () => {
    const {next, prev } = useContext(SupplementFormContext);

    return (
        <div>
            <fieldset>
                <legend>Misc. for Supplement</legend>
                <div>
                    <label>
                        Total Square Footage of Building (Under Roof)
                        <NumericFormat
                            value={supplementToFinancialStatementData.miscellaneousForSupplement.totalSquareFootageOfBuilding}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                supplementToFinancialStatementData.miscellaneousForSupplement.totalSquareFootageOfBuilding = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label> Total Number RO's YTD
                        <NumericFormat
                            value={supplementToFinancialStatementData.miscellaneousForSupplement.totalNumberROsYTD}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                supplementToFinancialStatementData.miscellaneousForSupplement.totalNumberROsYTD = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label> Paint labor hours sold MTD
                        <NumericFormat
                            value={supplementToFinancialStatementData.miscellaneousForSupplement.paintLaborHoursSoldMTD}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                supplementToFinancialStatementData.miscellaneousForSupplement.paintLaborHoursSoldMTD = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label> Total paint clock hours MTD
                        <NumericFormat
                            value={supplementToFinancialStatementData.miscellaneousForSupplement.totalPaintClockHoursMTD}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                supplementToFinancialStatementData.miscellaneousForSupplement.totalPaintClockHoursMTD = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label> Gallons of clear purchased
                        <NumericFormat
                            value={supplementToFinancialStatementData.miscellaneousForSupplement.gallonsOfClearPurchased}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                supplementToFinancialStatementData.miscellaneousForSupplement.gallonsOfClearPurchased = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label> Monthly work days
                        <NumericFormat
                            value={supplementToFinancialStatementData.miscellaneousForSupplement.monthlyWorkDays}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                supplementToFinancialStatementData.miscellaneousForSupplement.monthlyWorkDays = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label> Monthly estimates written
                        <NumericFormat
                            value={supplementToFinancialStatementData.miscellaneousForSupplement.monthlyEstimatesWritten}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                supplementToFinancialStatementData.miscellaneousForSupplement.monthlyEstimatesWritten = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label> Monthly estimates closed
                        <NumericFormat
                            value={supplementToFinancialStatementData.miscellaneousForSupplement.monthlyEstimatesClosed}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                supplementToFinancialStatementData.miscellaneousForSupplement.monthlyEstimatesClosed = floatValue;
                            }}
                        />
                    </label>
                </div>
                <Button type={"default"} onClick={prev}>
                    Back
                </Button>
                <Button type={"primary"} onClick={next}>
                    Next
                </Button>
            </fieldset>
            <br/>
        </div>
    );
};
export default MiscForSupplement;
import {NumericFormat} from "react-number-format";
import React, {useContext} from "react";
import expensesData from "./ExpensesStruct";
import {Button} from "antd";
import ExpensesFormContext from "./ExpensesFormContext";

const OtherOperatingExpenses = () => {
    const {next, prev } = useContext(ExpensesFormContext);
    return (
        <div>
            <fieldset>
                <legend> Occupancy Expenses </legend>
                <div>
                    <label>
                        Rent
                        (ACCT#:{expensesData.occupancyExpenses.rent.accountNumber})
                        <NumericFormat
                            value={expensesData.occupancyExpenses.rent.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.occupancyExpenses.rent.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Amortization of Leaseholds
                        (ACCT#:{expensesData.occupancyExpenses.amoritizationOfLeaseholds.accountNumber})
                        <NumericFormat
                            value={expensesData.occupancyExpenses.amoritizationOfLeaseholds.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.occupancyExpenses.amoritizationOfLeaseholds.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Repairs of Real Estate
                        (ACCT#:{expensesData.occupancyExpenses.repairsOfRealEstate.accountNumber})
                        <NumericFormat
                            value={expensesData.occupancyExpenses.repairsOfRealEstate.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.occupancyExpenses.repairsOfRealEstate.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Depreciation - Buildings and Improvements
                        (ACCT#:{expensesData.occupancyExpenses.depreciationBuilding.accountNumber})
                        <NumericFormat
                            value={expensesData.occupancyExpenses.depreciationBuilding.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.occupancyExpenses.depreciationBuilding.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Taxes - Real Estate
                        (ACCT#:{expensesData.occupancyExpenses.realEstateTaxes.accountNumber})
                        <NumericFormat
                            value={expensesData.occupancyExpenses.realEstateTaxes.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.occupancyExpenses.realEstateTaxes.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Insurance - Buildings And Improvements
                        (ACCT#:{expensesData.occupancyExpenses.buildingInsurance.accountNumber})
                        <NumericFormat
                            value={expensesData.occupancyExpenses.buildingInsurance.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.occupancyExpenses.buildingInsurance.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Utilities
                        (ACCT#:{expensesData.occupancyExpenses.amoritizationOfLeaseholds.accountNumber})
                        <NumericFormat
                            value={expensesData.occupancyExpenses.amoritizationOfLeaseholds.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.occupancyExpenses.amoritizationOfLeaseholds.value = floatValue;
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
        </div>
    );
};
export default OtherOperatingExpenses;
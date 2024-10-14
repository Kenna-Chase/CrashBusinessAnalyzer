import {NumericFormat} from "react-number-format";
import React from "react";
import summaryIncomeData from "./SummaryIncomeStruct";


const SummaryIncome = () => {
    return (
        <div>
            <fieldset>
                <legend> Summary Income Statement </legend>
                <div>
                    <label>
                        Bonuses - Employees ( Based on Net Profit )
                        (ACCT#:{summaryIncomeData.bonuses.employees.accountNumber})
                        <NumericFormat
                            value={summaryIncomeData.bonuses.employees.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                summaryIncomeData.bonuses.employees.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Bonuses - Owners ( Based on Net Profit )
                        (ACCT#:{summaryIncomeData.bonuses.owners.accountNumber})
                        <NumericFormat
                            value={summaryIncomeData.bonuses.owners.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                summaryIncomeData.bonuses.owners.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        State Income Tax
                        (ACCT#:{summaryIncomeData.taxes.stateIncome.accountNumber})
                        <NumericFormat
                            value={summaryIncomeData.taxes.stateIncome.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                summaryIncomeData.taxes.stateIncome.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Federal Income Tax
                        (ACCT#:{summaryIncomeData.taxes.stateIncome.accountNumber})
                        <NumericFormat
                            value={summaryIncomeData.taxes.stateIncome.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                summaryIncomeData.taxes.stateIncome.value = floatValue;
                            }}
                        />
                    </label>
                </div>
            </fieldset>
            <br/>
        </div>
    );
};
export default SummaryIncome;
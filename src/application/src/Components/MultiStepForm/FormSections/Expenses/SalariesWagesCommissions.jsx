import {NumericFormat} from "react-number-format";
import React, {useContext} from "react";
import expensesData from "./ExpensesStruct";
import {Button} from "antd";
import ExpensesFormContext from "./ExpensesFormContext";

const SalariesWagesCommissions = () => {
    const {next, prev } = useContext(ExpensesFormContext);
    return (
        <div>
            <fieldset>
                <legend> Salaries, Wages, Commissions (S.G.A) </legend>
                <div>
                    <label>
                        Compensation - Sales/Estimators
                        (ACCT#:{expensesData.salaries.sales.accountNumber})
                        <NumericFormat
                            value={expensesData.salaries.sales.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.salaries.sales.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Compensation - Owners
                        (ACCT#:{expensesData.salaries.owners.accountNumber})
                        <NumericFormat
                            value={expensesData.salaries.owners.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.salaries.owners.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Compensation - Supervision - General
                        (ACCT#:{expensesData.salaries.supervision_general.accountNumber})
                        <NumericFormat
                            value={expensesData.salaries.supervision_general.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.salaries.supervision_general.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Compensation - Supervision - Parts
                        (ACCT#:{expensesData.salaries.supervision_parts.accountNumber})
                        <NumericFormat
                            value={expensesData.salaries.supervision_parts.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.salaries.supervision_parts.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Compensation - Supervision - Office
                        (ACCT#:{expensesData.salaries.supervision_office.accountNumber})
                        <NumericFormat
                            value={expensesData.salaries.supervision_office.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.salaries.supervision_office.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Compensation -Other - General
                        (ACCT#:{expensesData.salaries.other_general.accountNumber})
                        <NumericFormat
                            value={expensesData.salaries.other_general.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.salaries.other_general.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Compensation -Other - Office (Clerical)
                        (ACCT#:{expensesData.salaries.other_office.accountNumber})
                        <NumericFormat
                            value={expensesData.salaries.other_office.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.salaries.other_office.value = floatValue;
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
export default SalariesWagesCommissions;
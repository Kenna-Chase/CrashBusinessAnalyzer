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
                <legend> Other Operating Expenses </legend>
                <div>
                    <label>
                        Memberships, Dues And Publications
                        (ACCT#:{expensesData.otherOperatingExpenses.membershipsDues.accountNumber})
                        <NumericFormat
                            value={expensesData.otherOperatingExpenses.membershipsDues.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.otherOperatingExpenses.membershipsDues.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Contributions
                        (ACCT#:{expensesData.otherOperatingExpenses.contributions.accountNumber})
                        <NumericFormat
                            value={expensesData.otherOperatingExpenses.contributions.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.otherOperatingExpenses.contributions.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Freight
                        (ACCT#:{expensesData.otherOperatingExpenses.freight.accountNumber})
                        <NumericFormat
                            value={expensesData.otherOperatingExpenses.freight.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.otherOperatingExpenses.freight.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Insurance - Other than Building
                        (ACCT#:{expensesData.otherOperatingExpenses.otherInsurance.accountNumber})
                        <NumericFormat
                            value={expensesData.otherOperatingExpenses.otherInsurance.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.otherOperatingExpenses.otherInsurance.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        And Payroll (Incl License & Permits)
                        (ACCT#:{expensesData.otherOperatingExpenses.andPayroll.accountNumber})
                        <NumericFormat
                            value={expensesData.otherOperatingExpenses.andPayroll.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.otherOperatingExpenses.andPayroll.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Interest - Other than Real Estate
                        (ACCT#:{expensesData.otherOperatingExpenses.interestExclRealEstate.accountNumber})
                        <NumericFormat
                            value={expensesData.otherOperatingExpenses.interestExclRealEstate.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.otherOperatingExpenses.interestExclRealEstate.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Depreciation - Other than Building
                        (ACCT#:{expensesData.otherOperatingExpenses.depreciationExclBuidling.accountNumber})
                        <NumericFormat
                            value={expensesData.otherOperatingExpenses.depreciationExclBuidling.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.otherOperatingExpenses.depreciationExclBuidling.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Equipment Rental - Long Term
                        (ACCT#:{expensesData.otherOperatingExpenses.longTermEquipmentRental.accountNumber})
                        <NumericFormat
                            value={expensesData.otherOperatingExpenses.longTermEquipmentRental.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.otherOperatingExpenses.longTermEquipmentRental.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Repairs to Equipment
                        (ACCT#:{expensesData.otherOperatingExpenses.repairsToEquipment.accountNumber})
                        <NumericFormat
                            value={expensesData.otherOperatingExpenses.repairsToEquipment.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.otherOperatingExpenses.repairsToEquipment.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Miscellaneous
                        (ACCT#:{expensesData.otherOperatingExpenses.miscellaneous.accountNumber})
                        <NumericFormat
                            value={expensesData.otherOperatingExpenses.miscellaneous.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.otherOperatingExpenses.miscellaneous.value = floatValue;
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
export default OtherOperatingExpenses;
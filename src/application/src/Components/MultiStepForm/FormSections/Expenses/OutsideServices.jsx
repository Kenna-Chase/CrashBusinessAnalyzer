import {NumericFormat} from "react-number-format";
import React, {useContext} from "react";
import expensesData from "./ExpensesStruct";
import {Button} from "antd";
import ExpensesFormContext from "./ExpensesFormContext";

const OutsideServices = () => {
    const {next, prev } = useContext(ExpensesFormContext);
    return (
        <div>
            <fieldset>
                <legend> Outside Services </legend>
                <div>
                    <label>
                        Bank Charges
                        (ACCT#:{expensesData.outsideServices.bankCharge.accountNumber})
                        <NumericFormat
                            value={expensesData.outsideServices.bankCharge.value}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.outsideServices.bankCharge.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Data Processing
                        (ACCT#:{expensesData.outsideServices.dataProcessing.accountNumber})
                        <NumericFormat
                            value={expensesData.outsideServices.dataProcessing.value}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.outsideServices.dataProcessing.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Security
                        (ACCT#:{expensesData.outsideServices.security.accountNumber})
                        <NumericFormat
                            value={expensesData.outsideServices.security.value}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.outsideServices.security.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Safety Programs
                        (ACCT#:{expensesData.outsideServices.safetyPrograms.accountNumber})
                        <NumericFormat
                            value={expensesData.outsideServices.safetyPrograms.value}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.outsideServices.safetyPrograms.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Janitorial
                        (ACCT#:{expensesData.outsideServices.janitorial.accountNumber})
                        <NumericFormat
                            value={expensesData.outsideServices.janitorial.value}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.outsideServices.janitorial.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Trash Disposal
                        (ACCT#:{expensesData.outsideServices.trashDisposal.accountNumber})
                        <NumericFormat
                            value={expensesData.outsideServices.trashDisposal.value}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.outsideServices.trashDisposal.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Laundry And Uniforms
                        (ACCT#:{expensesData.outsideServices.laundryUniforms.accountNumber})
                        <NumericFormat
                            value={expensesData.outsideServices.laundryUniforms.value}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.outsideServices.laundryUniforms.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Legal And Audit
                        (ACCT#:{expensesData.outsideServices.legalAudit.accountNumber})
                        <NumericFormat
                            value={expensesData.outsideServices.legalAudit.value}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.outsideServices.legalAudit.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Other
                        (ACCT#:{expensesData.outsideServices.other.accountNumber})
                        <NumericFormat
                            value={expensesData.outsideServices.other.value}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                expensesData.outsideServices.other.value = floatValue;
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
export default OutsideServices;
import {NumericFormat} from "react-number-format";
import React, {useContext} from "react";
import {Button} from "antd";
import BalanceSheetFormContext from "./BalanceSheetFormContext";
import balanceSheetData from "./BalanceSheetStruct";

const CurrentLiabilities = () => {
    const {next, prev } = useContext(BalanceSheetFormContext);
    return (
        <div>
            <fieldset>
                <legend>Current Liabilities</legend>
                <div>
                    <label>
                        Trade Creditors (ACCT#:{balanceSheetData.currentLiabilities.tradeCreditors.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentLiabilities.tradeCreditors.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentLiabilities.tradeCreditors.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Customer Deposits (ACCT#:{balanceSheetData.currentLiabilities.customerDeposits.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentLiabilities.customerDeposits.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentLiabilities.customerDeposits.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Notes Payable (ACCT#:{balanceSheetData.currentLiabilities.notesPayable.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentLiabilities.notesPayable.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentLiabilities.notesPayable.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Current Portion of Long Term Debt
                        (ACCT#:{balanceSheetData.currentLiabilities.currentDebtPortion.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentLiabilities.currentDebtPortion.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentLiabilities.currentDebtPortion.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Accrued Interest (ACCT#:{balanceSheetData.currentLiabilities.accruedInterest.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentLiabilities.accruedInterest.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentLiabilities.accruedInterest.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Accrued Payroll (ACCT#:{balanceSheetData.currentLiabilities.accruedPayroll.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentLiabilities.accruedPayroll.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentLiabilities.accruedPayroll.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Accrued Insurance (ACCT#:{balanceSheetData.currentLiabilities.accruedInsurance.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentLiabilities.accruedInsurance.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentLiabilities.accruedInsurance.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Accrued And Withheld Payroll Taxes
                        (ACCT#:{balanceSheetData.currentLiabilities.accruedAndWithHeldPayrollTax.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentLiabilities.accruedAndWithHeldPayrollTax.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentLiabilities.accruedAndWithHeldPayrollTax.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Accrued Sales Tax (ACCT#:{balanceSheetData.currentLiabilities.accruedSalesTax.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentLiabilities.accruedSalesTax.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentLiabilities.accruedSalesTax.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Accrued Income Tax (ACCT#:{balanceSheetData.currentLiabilities.accruedIncomeTax.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentLiabilities.accruedIncomeTax.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentLiabilities.accruedIncomeTax.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Accrued Property Taxes
                        (ACCT#:{balanceSheetData.currentLiabilities.accruedPropertyTax.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentLiabilities.accruedPropertyTax.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentLiabilities.accruedPropertyTax.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Other Current Liabilities
                        (ACCT#:{balanceSheetData.currentLiabilities.other.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentLiabilities.other.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentLiabilities.other.value = floatValue;
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
export default CurrentLiabilities;
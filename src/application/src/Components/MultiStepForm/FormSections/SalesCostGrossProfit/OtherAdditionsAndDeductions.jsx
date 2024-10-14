import {NumericFormat} from "react-number-format";
import React, {useContext} from "react";
import salesCostGrossProfitData from "./SalesCostGrossProfitStruct";
import {Button} from "antd";
import SalesCostGPFormContext from "./SalesCostGPFormContext";

const OtherAdditionsAndDeductions = () => {
    const {next, prev } = useContext(SalesCostGPFormContext);
    return (
        <div>
            <fieldset>
                <legend>Long Term Liabilities</legend>
                <div>
                    <h4> Additions to Income </h4>
                    <label>
                        Cash Discounts Earned
                        (ACCT#:{salesCostGrossProfitData.otherAdditionsAndDeductions.additions.cashDiscounts.accountNumber})
                        <NumericFormat
                            value={salesCostGrossProfitData.otherAdditionsAndDeductions.additions.cashDiscounts.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                salesCostGrossProfitData.otherAdditionsAndDeductions.additions.cashDiscounts.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Interest Earned
                        (ACCT#:{salesCostGrossProfitData.otherAdditionsAndDeductions.additions.interestEarned.accountNumber})
                        <NumericFormat
                            value={salesCostGrossProfitData.otherAdditionsAndDeductions.additions.interestEarned.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                salesCostGrossProfitData.otherAdditionsAndDeductions.additions.interestEarned.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Bad Debts Recovered
                        (ACCT#:{salesCostGrossProfitData.otherAdditionsAndDeductions.additions.badDebtRecovered.accountNumber})
                        <NumericFormat
                            value={salesCostGrossProfitData.otherAdditionsAndDeductions.additions.badDebtRecovered.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                salesCostGrossProfitData.otherAdditionsAndDeductions.additions.badDebtRecovered.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Misc. Income
                        (ACCT#:{salesCostGrossProfitData.otherAdditionsAndDeductions.additions.miscIncome.accountNumber})
                        <NumericFormat
                            value={salesCostGrossProfitData.otherAdditionsAndDeductions.additions.miscIncome.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                salesCostGrossProfitData.otherAdditionsAndDeductions.additions.miscIncome.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Commissions
                        (ACCT#:{salesCostGrossProfitData.otherAdditionsAndDeductions.additions.commissions.accountNumber})
                        <NumericFormat
                            value={salesCostGrossProfitData.otherAdditionsAndDeductions.additions.commissions.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                salesCostGrossProfitData.otherAdditionsAndDeductions.additions.commissions.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Other Income
                        (ACCT#:{salesCostGrossProfitData.otherAdditionsAndDeductions.additions.otherIncome.accountNumber})
                        <NumericFormat
                            value={salesCostGrossProfitData.otherAdditionsAndDeductions.additions.otherIncome.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                salesCostGrossProfitData.otherAdditionsAndDeductions.additions.otherIncome.value = floatValue;
                            }}
                        />
                    </label>
                    <h4> Deductions From Income </h4>
                    <label>
                        Bad Debts
                        (ACCT#:{salesCostGrossProfitData.otherAdditionsAndDeductions.deductions.badDebt.accountNumber})
                        <NumericFormat
                            value={salesCostGrossProfitData.otherAdditionsAndDeductions.deductions.badDebt.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                salesCostGrossProfitData.otherAdditionsAndDeductions.deductions.badDebt.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Penalties
                        (ACCT#:{salesCostGrossProfitData.otherAdditionsAndDeductions.deductions.penalties.accountNumber})
                        <NumericFormat
                            value={salesCostGrossProfitData.otherAdditionsAndDeductions.deductions.penalties.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                salesCostGrossProfitData.otherAdditionsAndDeductions.deductions.penalties.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Cash Over or Short
                        (ACCT#:{salesCostGrossProfitData.otherAdditionsAndDeductions.deductions.cashOverShort.accountNumber})
                        <NumericFormat
                            value={salesCostGrossProfitData.otherAdditionsAndDeductions.deductions.cashOverShort.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                salesCostGrossProfitData.otherAdditionsAndDeductions.deductions.cashOverShort.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Other Deductions
                        (ACCT#:{salesCostGrossProfitData.otherAdditionsAndDeductions.deductions.otherDeductions.accountNumber})
                        <NumericFormat
                            value={salesCostGrossProfitData.otherAdditionsAndDeductions.deductions.otherDeductions.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                salesCostGrossProfitData.otherAdditionsAndDeductions.deductions.otherDeductions.value = floatValue;
                            }}
                        />
                    </label>
                    <label>
                        Amortization Of Intangible Assets
                        (ACCT#:{salesCostGrossProfitData.otherAdditionsAndDeductions.deductions.amoritizationOfIntangibles.accountNumber})
                        <NumericFormat
                            value={salesCostGrossProfitData.otherAdditionsAndDeductions.deductions.amoritizationOfIntangibles.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                salesCostGrossProfitData.otherAdditionsAndDeductions.deductions.amoritizationOfIntangibles.value = floatValue;
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
export default OtherAdditionsAndDeductions;
import {NumericFormat} from "react-number-format";
import React, {useContext} from "react";
import balanceSheetData from "./BalanceSheetStruct";
import {Button} from "antd";
import BalanceSheetFormContext from "./BalanceSheetFormContext";

const Equity = () => {
    const {next, prev } = useContext(BalanceSheetFormContext);
    return (
        <div>
            <fieldset>
                <legend> Equity</legend>
                <div>
                    <label>
                        Capital Stock | Investment
                        (ACCT#:{balanceSheetData.equity.capitalStockOrInvestment.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.equity.capitalStockOrInvestment.value}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.equity.capitalStockOrInvestment.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Add Paid In Capital
                        (ACCT#:{balanceSheetData.equity.addPaidInCapital.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.equity.addPaidInCapital.value}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.equity.addPaidInCapital.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Retained Earnings
                        (ACCT#:{balanceSheetData.equity.retainedEarnings.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.equity.retainedEarnings.value}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.equity.retainedEarnings.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Dividends | Drawing Account
                        (ACCT#:{balanceSheetData.equity.dividendsDrawingAccount.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.equity.dividendsDrawingAccount.value}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.equity.dividendsDrawingAccount.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Current Year Earnings
                        (ACCT#:{balanceSheetData.equity.currentYearEarnings.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.equity.currentYearEarnings.value}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.equity.currentYearEarnings.value = floatValue;
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
export default Equity;
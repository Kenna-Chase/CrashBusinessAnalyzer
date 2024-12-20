import {NumericFormat} from "react-number-format";
import React, {useContext} from "react";
import balanceSheetData from "./BalanceSheetStruct";
import {Button} from "antd";
import BalanceSheetFormContext from "./BalanceSheetFormContext";

const OtherAssets = () => {
    const {next, prev } = useContext(BalanceSheetFormContext);
    return (
        <div>
            <fieldset>
                <legend>Other Assets</legend>
                <div>
                    <label>
                        Net Fixed Assets (ACCT#:{balanceSheetData.otherAssets.netFixed.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.otherAssets.netFixed.value}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.otherAssets.netFixed.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Deposits (ACCT#:{balanceSheetData.otherAssets.deposits.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.otherAssets.deposits.value}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.otherAssets.deposits.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Receivables - Owners/Officers
                        (ACCT#:{balanceSheetData.otherAssets.recievablesOwners.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.otherAssets.recievablesOwners.value}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.otherAssets.recievablesOwners.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Receivables - Employees
                        (ACCT#:{balanceSheetData.otherAssets.recievablesEmployees.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.otherAssets.recievablesEmployees.value}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.otherAssets.recievablesEmployees.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                       Other Assets
                        (ACCT#:{balanceSheetData.otherAssets.other.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.otherAssets.other.value}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.otherAssets.other.value = floatValue;
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
export default OtherAssets;
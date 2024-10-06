import {NumericFormat} from "react-number-format";
import React, {useContext} from "react";
import balanceSheetData from "./BalanceSheetStruct";
import {Button} from "antd";
import BalanceSheetFormContext from "./BalanceSheetFormContext";
import balanceSheetStruct from "./BalanceSheetStruct";

const CurrentAssets = () => {
    const {next, prev } = useContext(BalanceSheetFormContext);
    return (
        <div>
            <fieldset>
                <legend>Current Assets</legend>
                <div>
                    <label>
                        Cash On Hand (ACCT#:{balanceSheetStruct.currentAssets.cashOnHand.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentAssets.cashOnHand.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentAssets.cashOnHand.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Cash In Bank (ACCT#:{balanceSheetStruct.currentAssets.cashInBank.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentAssets.cashInBank.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentAssets.cashInBank.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Trade Recievables (ACCT#:{balanceSheetStruct.currentAssets.tradeRecievables.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentAssets.tradeRecievables.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentAssets.tradeRecievables.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Allowance for Doubtful Accounts
                        (ACCT#:{balanceSheetStruct.currentAssets.allowanceForDoubt.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentAssets.allowanceForDoubt.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentAssets.allowanceForDoubt.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Parts Inventory
                        (ACCT#:{balanceSheetStruct.currentAssets.partsInventory.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentAssets.partsInventory.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentAssets.partsInventory.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Paint Inventory
                        (ACCT#:{balanceSheetStruct.currentAssets.paintInventory.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentAssets.paintInventory.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentAssets.paintInventory.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Work In Progress Inventory
                        (ACCT#:{balanceSheetStruct.currentAssets.workInProgressInventory.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentAssets.workInProgressInventory.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentAssets.workInProgressInventory.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Sublet Inventory
                        (ACCT#:{balanceSheetStruct.currentAssets.subletInventory.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentAssets.subletInventory.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentAssets.subletInventory.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Prepaid Expenses
                        (ACCT#:{balanceSheetStruct.currentAssets.prepaidExpenses.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentAssets.prepaidExpenses.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentAssets.prepaidExpenses.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Other
                        (ACCT#:{balanceSheetStruct.currentAssets.other.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.currentAssets.other.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.currentAssets.other.value = floatValue;
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
export default CurrentAssets;
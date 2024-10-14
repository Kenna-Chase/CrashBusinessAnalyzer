import {NumericFormat} from "react-number-format";
import React, {useContext} from "react";
import balanceSheetData from "./BalanceSheetStruct";
import {Button} from "antd";
import BalanceSheetFormContext from "./BalanceSheetFormContext";

const LongTermLiabilities = () => {
    const {next, prev } = useContext(BalanceSheetFormContext);
    return (
        <div>
            <fieldset>
                <legend>Long Term Liabilities</legend>
                <div>
                    <label>
                        Notes Payable (ACCT#:{balanceSheetData.longTermLiabilities.notesPayable.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.longTermLiabilities.notesPayable.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.longTermLiabilities.notesPayable.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Notes Payable - Officers and Stockholders
                        (ACCT#:{balanceSheetData.longTermLiabilities.notesPayableOfficers.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.longTermLiabilities.notesPayableOfficers.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.longTermLiabilities.notesPayableOfficers.value = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                       Other Long Term Liabilities (ACCT#:{balanceSheetData.longTermLiabilities.other.accountNumber})
                        <NumericFormat
                            value={balanceSheetData.longTermLiabilities.other.value}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                balanceSheetData.longTermLiabilities.other.value = floatValue;
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
export default LongTermLiabilities;
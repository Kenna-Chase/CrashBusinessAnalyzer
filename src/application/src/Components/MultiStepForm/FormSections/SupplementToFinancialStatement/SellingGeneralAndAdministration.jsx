import {NumericFormat} from "react-number-format";
import React, {useContext, useState} from "react";
import supplementToFinancialStatementStruct from "./FinancialStatementStructs";
import {Button} from "antd";
import SupplementFormContext from "./SupplementFormContext";

const SellingGeneralAndAdministration = () => {
    const {next, prev } = useContext(SupplementFormContext);
    const [supplementToFinancialStatementData] = useState(supplementToFinancialStatementStruct);

    return (
        <div>

            <fieldset>
                <legend>Selling, General, & Administration</legend>
                <div>
                    <label>
                        Owners
                        <NumericFormat
                            value={supplementToFinancialStatementData.sellingGeneralAdministration.owners}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                supplementToFinancialStatementData.sellingGeneralAdministration.owners = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>Sales / Estimators
                        <NumericFormat
                            value={supplementToFinancialStatementData.sellingGeneralAdministration.sales}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                supplementToFinancialStatementData.sellingGeneralAdministration.sales = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>Supervisors - General
                        <NumericFormat
                            value={supplementToFinancialStatementData.sellingGeneralAdministration.supervisors.general}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                supplementToFinancialStatementData.sellingGeneralAdministration.supervisors.general = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>Supervisors - Parts
                        <NumericFormat
                            value={supplementToFinancialStatementData.sellingGeneralAdministration.supervisors.parts}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                supplementToFinancialStatementData.sellingGeneralAdministration.supervisors.parts = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>Supervisors - Office
                        <NumericFormat
                            value={supplementToFinancialStatementData.sellingGeneralAdministration.supervisors.office}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                supplementToFinancialStatementData.sellingGeneralAdministration.supervisors.office = floatValue;
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
}
export default SellingGeneralAndAdministration;
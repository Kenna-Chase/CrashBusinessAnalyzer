import {NumericFormat} from "react-number-format";
import React, {useContext} from "react";
import supplementToFinancialStatementStruct from "./FinancialStatementStructs";
import {Button} from "antd";
import SupplementFormContext from "./SupplementFormContext";

const ReceivablesPayables = () => {
    const {next, prev} = useContext(SupplementFormContext);

    return (
        <div>
            <fieldset>
                <legend>Receivables & Payables</legend>
                <div>

                    <label-horizontal>
                        Technicians - Body/Frame
                        <NumericFormat
                            value={supplementToFinancialStatementStruct.productionPersonnel.technicians.bodyframe}
                            decimalScale={0}
                            fixedDecimalScale={true}
                        />
                    </label-horizontal>
                </div>
                <div>
                    <label>Technicians - Paint
                        <NumericFormat
                            value={supplementToFinancialStatementStruct.productionPersonnel.technicians.paint}
                            decimalScale={0}
                            fixedDecimalScale={true}
                        />
                    </label>
                </div>
                <div>
                    <label>Technicians - Detail
                        <NumericFormat
                            value={supplementToFinancialStatementStruct.productionPersonnel.technicians.detail}
                            decimalScale={0}
                            fixedDecimalScale={true}
                        />
                    </label>
                </div>
                <div>
                    <label>Technicians - Mechanical
                        <NumericFormat
                            value={supplementToFinancialStatementStruct.productionPersonnel.technicians.mechanical}
                            decimalScale={0}
                            fixedDecimalScale={true}
                        />
                    </label>
                </div>
                <div>
                    <label>Total Number of Employees
                        <NumericFormat
                            value={supplementToFinancialStatementStruct.productionPersonnel.totalNumberOfEmployees}
                            decimalScale={0}
                            fixedDecimalScale={true}
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
export default ReceivablesPayables;
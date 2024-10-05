import {NumericFormat} from "react-number-format";
import React, {useContext} from "react";
import supplementToFinancialStatementData from "./FinancialStatementStructs";
import {Button} from "antd";
import SupplementFormContext from "./SupplementFormContext";

const ProductionPersonnel = () => {
    const {next, prev } = useContext(SupplementFormContext);

    return (
        <div>
            <fieldset>
                <legend>Production Personnel</legend>
                <div>
                    <label>
                        Technicians - Body/Frame
                        <NumericFormat
                            value={supplementToFinancialStatementData.productionPersonnel.technicians.bodyframe}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                supplementToFinancialStatementData.productionPersonnel.technicians.bodyframe = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>Technicians - Paint
                        <NumericFormat
                            value={supplementToFinancialStatementData.productionPersonnel.technicians.paint}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                supplementToFinancialStatementData.productionPersonnel.technicians.paint = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>Technicians - Detail
                        <NumericFormat
                            value={supplementToFinancialStatementData.productionPersonnel.technicians.detail}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                supplementToFinancialStatementData.productionPersonnel.technicians.detail = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>Technicians - Mechanical
                        <NumericFormat
                            value={supplementToFinancialStatementData.productionPersonnel.technicians.mechanical}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                supplementToFinancialStatementData.productionPersonnel.technicians.mechanical = floatValue;
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>Total Number of Employees
                        <NumericFormat
                            value={supplementToFinancialStatementData.productionPersonnel.totalNumberOfEmployees}
                            decimalScale={0}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                const {floatValue} = values;
                                supplementToFinancialStatementData.productionPersonnel.totalNumberOfEmployees = floatValue;
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
export default ProductionPersonnel;
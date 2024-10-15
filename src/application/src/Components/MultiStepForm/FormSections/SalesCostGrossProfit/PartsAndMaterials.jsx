import {NumericFormat} from "react-number-format";
import React, {useContext} from "react";
import salesCostGrossProfitData from "./SalesCostGrossProfitStruct";
import {Button, Row, Col} from "antd";
import SalesCostGPFormContext from "./SalesCostGPFormContext";

const PartsAndMaterials = () => {
    const {next, prev} = useContext(SalesCostGPFormContext);

    return (
        <div>
            <fieldset>
                <legend>Parts & Materials</legend>
                <div>
                    <Row>
                        <Col span={8}>
                            <label> Parts </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Sales (ACCT#:{salesCostGrossProfitData.partsAndMaterials.parts.sales.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.partsAndMaterials.parts.sales.value}
                                    thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.partsAndMaterials.parts.sales.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Cost (ACCT#:{salesCostGrossProfitData.partsAndMaterials.parts.cost.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.partsAndMaterials.parts.cost.value}
                                    thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.partsAndMaterials.parts.cost.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <label> Paint/Material </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Sales (ACCT#:{salesCostGrossProfitData.partsAndMaterials.paintMaterial.sales.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.partsAndMaterials.paintMaterial.sales.value}
                                    thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.partsAndMaterials.paintMaterial.sales.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Cost (ACCT#:{salesCostGrossProfitData.partsAndMaterials.paintMaterial.cost.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.partsAndMaterials.paintMaterial.cost.value}
                                    thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.partsAndMaterials.paintMaterial.cost.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <label> Sublet </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Sales (ACCT#:{salesCostGrossProfitData.partsAndMaterials.sublet.sales.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.partsAndMaterials.sublet.sales.value}
                                    thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.partsAndMaterials.sublet.sales.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Cost (ACCT#:{salesCostGrossProfitData.partsAndMaterials.sublet.cost.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.partsAndMaterials.sublet.cost.value}
                                    thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.partsAndMaterials.sublet.cost.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                    </Row>
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
export default PartsAndMaterials;
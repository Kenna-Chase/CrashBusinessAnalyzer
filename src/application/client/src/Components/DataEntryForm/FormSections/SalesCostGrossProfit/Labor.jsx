import {NumericFormat} from "react-number-format";
import React, {useContext} from "react";
import salesCostGrossProfitData from "./SalesCostGrossProfitStruct";
import {Button, Row, Col} from "antd";
import SalesCostGPFormContext from "./SalesCostGPFormContext";

const Labor = () => {
    const {next, prev} = useContext(SalesCostGPFormContext);

    return (
        <div>
            <fieldset>
                <legend>Labor</legend>
                <div>
                    <Row>
                        <Col span={8}>
                            <label> Body / Frame </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Sales (ACCT#:{salesCostGrossProfitData.labor.bodyFrame.sales.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.labor.bodyFrame.sales.value}
                                    thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.labor.bodyFrame.sales.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Cost (ACCT#:{salesCostGrossProfitData.labor.bodyFrame.cost.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.labor.bodyFrame.cost.value}
                                    thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.labor.bodyFrame.cost.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <label> Paint </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Sales (ACCT#:{salesCostGrossProfitData.labor.paint.sales.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.labor.paint.sales.value}
                                    thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.labor.paint.sales.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Cost (ACCT#:{salesCostGrossProfitData.labor.paint.cost.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.labor.paint.cost.value}
                                    thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.labor.paint.cost.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <label> Detail </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Sales (ACCT#:{salesCostGrossProfitData.labor.detail.sales.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.labor.detail.sales.value}
                                    thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.labor.detail.sales.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Cost (ACCT#:{salesCostGrossProfitData.labor.detail.cost.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.labor.detail.cost.value}
                                    thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.labor.detail.cost.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <label> Mechanical </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Sales (ACCT#:{salesCostGrossProfitData.labor.mechanical.sales.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.labor.mechanical.sales.value}
                                    thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.labor.mechanical.sales.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Cost (ACCT#:{salesCostGrossProfitData.labor.mechanical.cost.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.labor.mechanical.cost.value}
                                    thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.labor.mechanical.cost.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <label> Other </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Sales (ACCT#:{salesCostGrossProfitData.labor.other.sales.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.labor.other.sales.value}
                                    thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.labor.other.sales.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Cost (ACCT#:{salesCostGrossProfitData.labor.other.cost.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.labor.other.cost.value}
                                    thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.labor.other.cost.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <label> Follow-up (Comebacks) </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Sales (ACCT#:{salesCostGrossProfitData.labor.followUp.sales.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.labor.followUp.sales.value}
                                    thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.labor.followUp.sales.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Cost (ACCT#:{salesCostGrossProfitData.labor.followUp.cost.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.labor.followUp.cost.value}
                                    thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.labor.followUp.cost.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <label> Adjustments & Refunds </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Sales (ACCT#:{salesCostGrossProfitData.labor.adjustmentRefund.sales.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.labor.adjustmentRefund.sales.value}
                                    thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.labor.adjustmentRefund.sales.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Cost (ACCT#:{salesCostGrossProfitData.labor.adjustmentRefund.cost.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.labor.adjustmentRefund.cost.value}
                                    thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.labor.adjustmentRefund.cost.value = floatValue;
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
export default Labor;
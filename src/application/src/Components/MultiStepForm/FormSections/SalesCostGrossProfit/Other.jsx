import {NumericFormat} from "react-number-format";
import React, {useContext} from "react";
import salesCostGrossProfitData from "./SalesCostGrossProfitStruct";
import {Button, Row, Col} from "antd";
import SalesCostGPFormContext from "./SalesCostGPFormContext";

const Other = () => {
    const {next, prev} = useContext(SalesCostGPFormContext);

    return (
        <div>
            <fieldset>
                <legend>Other</legend>
                <div>
                    <Row>
                        <Col span={8}>
                            <label> Car Rental Fees </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Sales (ACCT#:{salesCostGrossProfitData.other.carRentalFees.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.other.carRentalFees.sales.value}
                                    decimalScale={0}
                                    fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.other.carRentalFees.sales.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Cost (ACCT#:{salesCostGrossProfitData.other.carRentalFees.cost.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.other.carRentalFees.cost.value}
                                    decimalScale={0}
                                    fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.other.carRentalFees.cost.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <label> Towing/Storage </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Sales (ACCT#:{salesCostGrossProfitData.other.towingStorage.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.other.towingStorage.sales.value}
                                    decimalScale={0}
                                    fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.other.towingStorage.sales.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Cost (ACCT#:{salesCostGrossProfitData.other.towingStorage.cost.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.other.towingStorage.cost.value}
                                    decimalScale={0}
                                    fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.other.towingStorage.cost.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <label> Other Fees </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Sales (ACCT#:{salesCostGrossProfitData.other.otherFees.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.other.otherFees.sales.value}
                                    decimalScale={0}
                                    fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.other.otherFees.sales.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Cost (ACCT#:{salesCostGrossProfitData.other.otherFees.cost.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.other.otherFees.cost.value}
                                    decimalScale={0}
                                    fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.other.otherFees.cost.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <label> Hazardous Waste Reimburse </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Sales (ACCT#:{salesCostGrossProfitData.other.hazardousWasteReimburse.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.other.hazardousWasteReimburse.sales.value}
                                    decimalScale={0}
                                    fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.other.hazardousWasteReimburse.sales.value = floatValue;
                                    }}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Cost (ACCT#:{salesCostGrossProfitData.other.hazardousWasteReimburse.cost.accountNumber})
                                <NumericFormat
                                    value={salesCostGrossProfitData.other.hazardousWasteReimburse.cost.value}
                                    decimalScale={0}
                                    fixedDecimalScale={true}
                                    onValueChange={(values) => {
                                        const {floatValue} = values;
                                        salesCostGrossProfitData.other.hazardousWasteReimburse.cost.value = floatValue;
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
export default Other;
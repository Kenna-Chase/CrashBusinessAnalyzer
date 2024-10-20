import {NumericFormat} from "react-number-format";
import React, {useContext} from "react";
import supplementToFinancialStatementData from "./FinancialStatementStructs";
import {Button, Row, Col} from "antd";
import SupplementFormContext from "./SupplementFormContext";

const LaborRatesAndStalls = () => {
    const {next, prev} = useContext(SupplementFormContext);

    return (
        <div>
            <fieldset>
                <legend>Labor Rates & Stalls</legend>
                <div>
                    <Row>
                        <Col span={5}>
                            <label> Body </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Hourly Labor Rates
                                <NumericFormat
                                    value={supplementToFinancialStatementData.hourlyRatesandStalls.body.hourlyLaborRate}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                # of Stalls
                                <NumericFormat
                                    value={supplementToFinancialStatementData.hourlyRatesandStalls.body.numberOfStalls}
                                    decimalScale={0}
                                    fixedDecimalScale={true}
                                />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}>
                            <label> Frame </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Hourly Labor Rates
                                <NumericFormat
                                    value={supplementToFinancialStatementData.hourlyRatesandStalls.frame.hourlyLaborRate}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                # of Stalls
                                <NumericFormat
                                    value={supplementToFinancialStatementData.hourlyRatesandStalls.frame.numberOfStalls}
                                    decimalScale={0}
                                    fixedDecimalScale={true}
                                />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}>
                            <label> Paint </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Hourly Labor Rates
                                <NumericFormat
                                    value={supplementToFinancialStatementData.hourlyRatesandStalls.paint.hourlyLaborRate}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                # of Stalls
                                <NumericFormat
                                    value={supplementToFinancialStatementData.hourlyRatesandStalls.paint.numberOfStalls}
                                    decimalScale={0}
                                    fixedDecimalScale={true}
                                />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}>
                            <label> Detail </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Hourly Labor Rates
                                <NumericFormat
                                    value={supplementToFinancialStatementData.hourlyRatesandStalls.detail.hourlyLaborRate}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                # of Stalls
                                <NumericFormat
                                    value={supplementToFinancialStatementData.hourlyRatesandStalls.detail.numberOfStalls}
                                    decimalScale={0}
                                    fixedDecimalScale={true}
                                />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}>
                            <label> Mechanical </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Hourly Labor Rates
                                <NumericFormat
                                    value={supplementToFinancialStatementData.hourlyRatesandStalls.mechanical.hourlyLaborRate}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                # of Stalls
                                <NumericFormat
                                    value={supplementToFinancialStatementData.hourlyRatesandStalls.mechanical.numberOfStalls}
                                    decimalScale={0}
                                    fixedDecimalScale={true}
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
export default LaborRatesAndStalls;
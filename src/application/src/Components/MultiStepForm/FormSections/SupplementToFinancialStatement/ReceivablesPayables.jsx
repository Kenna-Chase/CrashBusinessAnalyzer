import {NumericFormat} from "react-number-format";
import React, {useContext} from "react";
import supplementToFinancialStatementStruct from "./FinancialStatementStructs";
import {Button, Row, Col} from "antd";
import SupplementFormContext from "./SupplementFormContext";

const ReceivablesPayables = () => {
    const {next, prev} = useContext(SupplementFormContext);

    return (
        <div>
            <fieldset>
                <legend>Receivables & Payables</legend>

                <div>
                    <Row>
                        <Col span={5}>
                            <label> Current </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Receivables
                                <NumericFormat
                                    value={supplementToFinancialStatementStruct.receivables.current}
                                    decimalScale={0}
                                    fixedDecimalScale={true}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Payables
                                <NumericFormat
                                    value={supplementToFinancialStatementStruct.payables.current}
                                    decimalScale={0}
                                    fixedDecimalScale={true}
                                />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}>
                            <label> 31-60 days </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Receivables
                                <NumericFormat
                                    value={supplementToFinancialStatementStruct.receivables.prev60days}
                                    decimalScale={0}
                                    fixedDecimalScale={true}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Payables
                                <NumericFormat
                                    value={supplementToFinancialStatementStruct.payables.prev60days}
                                    decimalScale={0}
                                    fixedDecimalScale={true}
                                />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}>
                            <label> 31-60 days </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Receivables
                                <NumericFormat
                                    value={supplementToFinancialStatementStruct.receivables.prev90days}
                                    decimalScale={0}
                                    fixedDecimalScale={true}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Payables
                                <NumericFormat
                                    value={supplementToFinancialStatementStruct.payables.prev90days}
                                    decimalScale={0}
                                    fixedDecimalScale={true}
                                />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}>
                            <label> Over 90 days </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Receivables
                                <NumericFormat
                                    value={supplementToFinancialStatementStruct.receivables.over90days}
                                    decimalScale={0}
                                    fixedDecimalScale={true}
                                />
                            </label>
                        </Col>
                        <Col span={8}>
                            <label>
                                Payables
                                <NumericFormat
                                    value={supplementToFinancialStatementStruct.payables.prev90days}
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
export default ReceivablesPayables;
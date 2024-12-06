import React, {useState} from "react";
import {Button, DatePicker, Select, Space, Typography} from "antd";
import {useNavigate} from "react-router";
import {aggregateSalesCostGPRecord} from "../ApiTesting/APIConnections.js";
import RedirectPage from "../Redirect/RedirectPage.jsx";
import AuthService from "../../../service/AuthService.js";
import "./Metric.css"
import MetricTable from "./Display/MetricTable.jsx";

const { Title, Text } = Typography;
const { Option } = Select;

const MetricViewPage = () => {
    // Loading view
    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });

        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 2000);
    };


    const [yearMonth, setYearMonth] = useState(null);
    const [dataSection, setDataSection] = useState("Sales, Cost, & Gross Profit"); // Default section
    const [data, setData] = useState(null);
    const [displayData, setDisplayData] = useState(false);

    const companyName = AuthService.getUser().company;

    const updateDate = (date, dateString) => {
        console.log("Selected Date:", dateString);
        setYearMonth(dateString);
    };

    const updateDataSection = (value) => {
        console.log("Selected Data Section:", value);
        console.log(companyName);
        setDataSection(value);
    };

    const navigate = useNavigate();

    const goHome = () => {
        navigate("/home");
    };

    async function retrieveMetrics() {
        try {
            console.log("Calling aggregateSalesCostGPRecord...");
            const result = await aggregateSalesCostGPRecord(companyName, yearMonth);
            console.log("Result from aggregateSalesCostGPRecord:", result);
            return result;
        } catch (error) {
            console.error("Error fetching metrics:", error);
            throw error; // Propagate the error to the caller
        }
    }

    const calcMetrics = async () => {
        try {
            console.log("Starting calcMetrics...");
            // Wait for retrieveMetrics to complete
            const result = await retrieveMetrics();
            // Verify the result
            if (result) {
                console.log("Metrics Retrieved:", result);
            } else {
                console.warn("retrieveMetrics returned null or undefined!");
            }
            // Proceed with state updates
            enterLoading(0);
            setData(result);
            setDisplayData(true); // Update visibility state

            console.log("State updated successfully.");
        } catch (error) {
            console.error("Error retrieving and setting metrics:", error);
        }
    };

    return !AuthService.getToken() ? (
        <RedirectPage />
    ) : (
        <div style={{ padding: "20px" }}>
            <div className="header" align="center">
                <Title level={2}>Welcome to Metrics</Title>
            </div>

            <div align="center">
                <Space direction="vertical" size="large" style={{ width: "60%" }}>
                    <Space align="center" style={{ justifyContent: "space-between", width: "100%" }}>
                        <Text strong> Company Name:</Text>
                        <Text>{companyName}</Text>
                    </Space>

                    <Space align="center" style={{ justifyContent: "space-between", width: "100%" }}>
                        <Text strong>Data Section:</Text>
                        <Select
                            defaultValue={dataSection}
                            style={{ width: "100%" }}
                            size={"large"}
                            onChange={updateDataSection}
                        >
                            <Option value="Sales, Cost, & Gross Profit">
                                Sales, Cost, & Gross Profit
                            </Option>
                            {/*<Option value="Supplement to Financial Statement">Supplement to Financial Statement</Option>*/}
                            {/*<Option value="Balance Sheet">Balance Sheet</Option>*/}
                            {/*<Option value="Expenses">Expenses</Option>*/}
                            {/*<Option value="Summary Income Statement">Summary Income Statement</Option>*/}
                        </Select>
                    </Space>

                    <Space align="center" style={{ justifyContent: "space-between", width: "100%" }}>
                        <Text strong>Month & Year:</Text>
                        <DatePicker onChange={updateDate} picker="month" />
                    </Space>
                </Space>
            </div>

            {yearMonth === null ? (
                <div align="center">
                    <Text type="warning" color={"red"}>
                        Please enter the Month & Year for the data entry submission.
                    </Text>
                </div>
            ) : (
                <div align="center" style={{ marginTop: "20px" }}>
                    <Button size="large" type="primary" loading={loadings[0]} onClick={calcMetrics}>
                        Retrieve Metrics
                    </Button>
                </div>
            )}

            {displayData ? (
                <MetricTable jsonData={data} />
            ) : <div> </div>}

            <div align="center" style={{ marginTop: "20px" }}>
                <Button block size="large" onClick={goHome}>
                    Go back Home
                </Button>
            </div>
        </div>
    );
};

export default MetricViewPage;

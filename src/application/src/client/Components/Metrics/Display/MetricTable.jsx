import React from "react";
import "../Metric.css";
import { Table } from "antd";

const MetricTable = ({ jsonData }) => {

    const prepareTableData = (data, headers) =>
        Object.entries(data).map(([key, values]) => {
            const row = { key };
            headers.forEach((header) => {
                row[header] = values[header] ?? "-";
            });
            return row;
        });

    const prepareFlatData = (data) =>
        Object.entries(data).map(([key, value]) => ({
            key,
            value,
        }));

    const generateTable = (title, data, headers) => {
        const columns = [
            {
                title: "Category",
                dataIndex: "key",
                key: "key",
                render: (text) => <strong>{text}</strong>,
            },
            ...headers.map((header) => ({
                title: header.charAt(0).toUpperCase() + header.slice(1), // Capitalize header
                dataIndex: header,
                key: header,
                render: (value) =>
                    typeof value === "number" && value < 0 ? (
                        <span style={{ color: "red" }}>{value}</span>
                    ) : (
                        value
                    ),
            })),
        ];

        const tableData =
            headers.length === 1
                ? prepareFlatData(data) // Use flat data preparation for Overall Totals
                : prepareTableData(data, headers);

        return (
            <div className="table-container">
                <h2>{title}</h2>
                <Table
                    columns={columns}
                    dataSource={tableData}
                    pagination={false}
                    bordered
                />
            </div>
        );
    };
    const sections  = Object.fromEntries(
        Object.entries(jsonData.sectionTotals).filter(([key, value]) => key !== 'overallTotals' && key !== 'otherAdditionsAndDeductions')
    );

    return (
        <div className="Table">
            <h1>Data Tables</h1>
            <h2>Sales, Cost, Gross Profit</h2>
            {/* Overall Totals */}
            {generateTable("Overall Totals", jsonData.sectionTotals.overallTotals, ["value"])}
            {/* Section Totals */}
            {generateTable("Section Totals", sections, ["sales", "cost"])}
            {generateTable("Additions and Deductions", jsonData.sectionTotals.otherAdditionsAndDeductions, ["value"])}
            <h2>Section Breakdowns</h2>
            {/* GP Section Calculations */}
            {Object.entries(jsonData.gpSectionCalculations).map(([section, data]) =>
                generateTable(section, data, ["sales", "cost", "gp"])
            )}
        </div>
    );
};

export default MetricTable;

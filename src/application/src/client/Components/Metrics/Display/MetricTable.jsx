import React from "react";
import "./MetricTable.css";
import { Table } from "antd";

const MetricTable = () => {
    const jsonData = {
        sectionTotals: {
            labor: { sales: 7, cost: 21 },
            partsAndMaterials: { sales: 3, cost: 6 },
            other: { sales: 4, cost: 8 },
        },
        totals: {
            salesTotal: 14,
            costTotal: 35,
            gpTotal: -21,
        },
        otherAdditionsAndDeductions: { additions: 21, dedections: 45 },
        gpSectionCalculations: {
            labor: {
                followUp: { sales: 1, cost: 3, gp: -2 },
                other: { sales: 1, cost: 3, gp: -2 },
                adjustmentRefund: { sales: 1, cost: 3, gp: -2 },
                bodyFrame: { sales: 1, cost: 3, gp: -2 },
                paint: { sales: 1, cost: 3, gp: -2 },
                mechanical: { sales: 1, cost: 3, gp: -2 },
                detail: { sales: 1, cost: 3, gp: -2 },
            },
            partsAndMaterials: {
                parts: { sales: 1, cost: 2, gp: -1 },
                paintMaterial: { sales: 1, cost: 2, gp: -1 },
                sublet: { sales: 1, cost: 2, gp: -1 },
            },
            other: {
                towingStorage: { sales: 1, cost: 2, gp: -1 },
                otherFees: { sales: 1, cost: 2, gp: -1 },
                hazardousWasteReimburse: { sales: 1, cost: 2, gp: -1 },
                carRentalFees: { sales: 1, cost: 2, gp: -1 },
            },
        },
    };

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

    return (
        <div className="Table">
            <h1>Data Tables</h1>
            <h2>Sales, Cost, Gross Profit</h2>
            {/* Overall Totals */}
            {generateTable("Overall Totals", jsonData.totals, ["value"])}
            {/* Section Totals */}
            {generateTable("Section Totals", jsonData.sectionTotals, ["sales", "cost"])}
            <h2>Section Breakdowns</h2>
            {/* GP Section Calculations */}
            {Object.entries(jsonData.gpSectionCalculations).map(([section, data]) =>
                generateTable(section, data, ["sales", "cost", "gp"])
            )}
        </div>
    );
};

export default MetricTable;

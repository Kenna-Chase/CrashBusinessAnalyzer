import React, { useState } from 'react';
import {Button, DatePicker, Flex} from "antd";
import {useNavigate} from "react-router";
import "../DataEntry.css";
import DataEntryForm from "./DataEntryForm.jsx";
import salesCostGrossProfitData from "../FormSections/SalesCostGrossProfit/SalesCostGrossProfitStruct.js";

const DataEntryHome = () => {
    const [yearMonth, setYearMonth] = useState(null);

    const updateDate = (date, dateString) => {
        console.log(dateString);
        setYearMonth(dateString);
    }
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/home");
    };
    const [showDataEntry, setShowDataEntry] = useState(null);

    function clearDataInStruct(obj) {
        // Iterate through each key in the object
        Object.keys(obj).forEach((key) => {
            if (typeof obj[key] === "object" && obj[key] !== null) {
                // If it's an object, recurse into it
                clearDataInStruct(obj[key]);
            } else if (key === "value") {
                // If it's a "value" field, set the data
                obj[key] = "";
            }
        });
        return obj;
    }

    function resetDataStructs(){
        clearDataInStruct(salesCostGrossProfitData);
    }
    const goToDataEntry = () => {
        console.log("Display Data Entry Form?");
        console.log(yearMonth);
        resetDataStructs();
        setShowDataEntry(true);
    };

    return (
        <div>
            {!showDataEntry ?
                (/* Data Entry Overview */
                    <div>
                        <div className="header">
                            <h1> Welcome to Data Entry </h1>
                        </div>
                        <div align={"center"}>
                            <h3>
                                Please enter the Month & Year for the data entry submission
                            </h3>

                            <div align={"center"}>
                                <DatePicker onChange={updateDate} picker="month"/>
                                <br/>
                                <Button size="large" onClick={goToDataEntry}>Next</Button>
                            </div>
                        </div>
                        <br/>
                        <Button block size="large" onClick={goHome}>Go back Home</Button>
                    </div>
                ) : (
                    /* Render data entry */
                    <div>
                        <div>
                            <DataEntryForm yearMonth={yearMonth}/>
                            <div align={"center"}>
                                 <Flex vertical gap="middle" align="center" style={{width: '50%'}}>
                                    <Button size="large" onClick={() => setShowDataEntry(null)}>Go Back </Button>

                                    <Button size="large" onClick={goHome}>Go Home</Button>
                                </Flex>
                            </div>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default DataEntryHome;

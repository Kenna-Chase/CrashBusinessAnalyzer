import React, { useState } from 'react';
import {Button, DatePicker, Flex} from "antd";
import {useNavigate} from "react-router";
import "../DataEntry.css";
import DataEntryForm from "./DataEntryForm.jsx";

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
    const goToDataEntry = () => {
        console.log("Display Data Entry Form?");
        console.log(yearMonth);
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

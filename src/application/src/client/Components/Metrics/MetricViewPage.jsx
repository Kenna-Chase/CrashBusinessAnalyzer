import React, { useState } from 'react';
import {Button, DatePicker, Flex, Input} from "antd";
import {useNavigate} from "react-router";
import {aggregateSalesCostGPRecord} from "../ApiTesting/APIConnections.js";
import RedirectPage from "../Redirect/RedirectPage.jsx";
import AuthService from "../../../service/AuthService.js";

const MetricViewPage = () => {
    const [yearMonth, setYearMonth] = useState(null);
    const [data, setData] = useState(null);

    const updateDate = (date, dateString) => {
        console.log(dateString);
        setYearMonth(dateString);
    }

    const navigate = useNavigate();
    const goHome = () => {
        navigate("/home");
    };

    async function calcMetrics() {
        //NOTE: Current issue with await not waiting and setting data before ready
        const data = await aggregateSalesCostGPRecord("TestCompany", yearMonth)
            .then( () =>
            {
                console.log("DATA: " + data);
                setData(data);
            }
        );
    }

    return (
        /** Only display if user is logged in **/
        !AuthService.getToken() ? <RedirectPage/> :
            <div>
                <div className="header">
                    <h1> Welcome to Metrics </h1>
                </div>
                <div align={"center"}>
                    <Flex vertical gap="large" align="center" style={{ width: '60%' }} >
                        {/*<Input placeholder="Company Name" size="middle" onChange={updateCompany} />;*/}

                        <Flex horizontal gap="large" align="center" style={{ width: '80%' }}>
                            <h2>Company Name: </h2>
                            <h2>TestCompany</h2>
                            <br/>
                        </Flex>

                        <Flex horizontal gap="large" align="center" style={{ width: '80%' }}>
                            <h2>Data Section: </h2>
                            <h2>Sales, Cost, & Gross Profit</h2>
                            <br/>
                        </Flex>

                        <Flex horizontal gap="large" align="center" style={{ width: '80%' }} >
                            <h2>Month & Year: </h2>
                            <DatePicker onChange={updateDate} picker="month"/>
                            <br/>
                        </Flex>
                    </Flex>
                </div>
                {(yearMonth === null) ?
                    (
                        /* NO Button available to call retrieve metrics api */
                        <div align={"center"}>
                            <h3> Please enter the Month & Year for the data entry submission</h3>
                        </div>
                    )
                    : (<div align={"center"}>
                        <Button size="large" onClick={calcMetrics}>Retrieve Metrics</Button>
                    </div>)
                }
                { (data) ? (<div>Data: {JSON.stringify(data)}</div>) : (<div></div>)}
                <br/>
                <Button block size="large" onClick={goHome}>Go back Home</Button>
            </div>
    );
};

export default MetricViewPage;

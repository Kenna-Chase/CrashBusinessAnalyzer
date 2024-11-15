import React from "react";
import {Button, Flex} from "antd";
import {aggregateSalesCostGPRecord, getAllSalesCostGPRecords} from "./APIConnections.js";

const ApiTestPage = () => {
    return (
        <div>
            <div className="header">
                <h1> API Testing  </h1>
            </div>
            <div align={"center"}>
                <Flex vertical gap="large" align="center" style={{width: '50%'}}>
                    <Button block size="large" onClick={getAllSalesCostGPRecords}> Get Records from Database</Button>
                    <Button block size="large" onClick={() => aggregateSalesCostGPRecord("TestCompany", "2024-01")}> AggregateRecord </Button>
                </Flex>
            </div>
        </div>
    );
}

export default ApiTestPage;
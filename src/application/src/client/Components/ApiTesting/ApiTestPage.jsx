import React from "react";
import {Button, Flex} from "antd";

const ApiTestPage = () => {
    const getSalesCostGPRecord = () => {
        console.log("Getting records....");
        fetch('https://42ud7vp741.execute-api.us-east-1.amazonaws.com/prod/getSalesCostGrossProfit',
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }})
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    };
    const dataEx = {
        title: "Example post 1",
        description: "",
        author: "me",
        publicationDate: "some-date"

    }
    const putSalesCostGPRecord = () => {
        console.log("Putting record....");
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataEx),
        };
        console.log( JSON.stringify(dataEx))
        fetch('https://p0o7wm7aa4.execute-api.us-east-1.amazonaws.com/prod/putSalesCostGrossProfit', requestOptions)
            .then(async response => {
                const data = response.json()
                console.log(data);
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <div>
            <div className="header">
                <h1> API Testing  </h1>
            </div>
            <div align={"center"}>
                <Flex vertical gap="large" align="center" style={{width: '50%'}}>
                    <Button block size="large" onClick={getSalesCostGPRecord}> Get Records from Database</Button>
                    <Button block size="large" onClick={putSalesCostGPRecord}>Put Records from Database </Button>
                </Flex>
            </div>
        </div>
    );
}

export default ApiTestPage;
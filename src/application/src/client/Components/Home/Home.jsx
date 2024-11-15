import React from "react";
import "./Home.css";
import {useNavigate} from "react-router";
import {Button, Flex} from "antd";

const Home = () => {
    const navigate = useNavigate();
    const goToDataEntryPage = () => {
        navigate("/dataentry");
    };
    const goToLoginPage = () => {
        navigate("/login");
    }
    const gotToAPiTestPage = () => {
        navigate("/apiTest");
    }

    return (
        <div>
            <div className="header">
                <h1> Welcome to Crash Business Analyzer </h1>
            </div>

            <div align={"center"}>
                <Flex vertical gap="large" align="center" style={{ width: '50%' }}>
                    <Button block size="large" onClick={goToLoginPage}> Login/Sign Up</Button>
                    <Button block size="large" onClick={goToDataEntryPage}>Data Entry</Button>
                    <Button block size={"large"} onClick={gotToAPiTestPage}>API Testing</Button>
                </Flex>
            </div>


        </div>
    );
}

export default Home;
import React from "react";
import "./Home.css";
import {useNavigate} from "react-router";
import {Button, Flex} from "antd";

const Home = () => {
    const navigate = useNavigate();
    const goToDataEntry = () => {
        navigate("/dataentry");
    };

    return (
        <div>
            <div className="header">
                <h1> Welcome to Crash Business Analyzer </h1>
            </div>

            <div className="paragraph">
                <p> This is the current landing page for Crash Business Analyzer Project while it is in development.
                    The various pages being developed are shown in the menu above. The automated connections between
                    pages will be added as a later feature.
                </p>
            </div>

            <div align={"center"}>
                <Flex vertical gap="small" align="center" style={{ width: '50%' }}>
                    <Button block size="large" onClick={goToDataEntry}>Go to Data Entry</Button>
                </Flex>
            </div>


        </div>
    );
}

export default Home;
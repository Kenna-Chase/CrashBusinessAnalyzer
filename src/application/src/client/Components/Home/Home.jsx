import React from "react";
import "./Home.css";
import {useNavigate} from "react-router-dom";
import {Button, Flex} from "antd";
import AuthService from "../../../service/AuthService.js";
import RedirectPage from "../Redirect/RedirectPage.jsx";

const Home = () => {
    const navigate = useNavigate();

    const user = AuthService.getUser();
    const name = (user !== 'undefined' && user !== null) ? user.name : "";

    const logoutHandler = () => {
        AuthService.resetUserSession();
        navigate("/login");
    };
    const goToDataEntryPage = () => {
        navigate("/dataentry", { replace: true, flushSync: true  });
    };

    const gotToMetricsPage = () => {
        navigate("/metrics", { replace: true, flushSync: true  });
    };

    return (
        /** Only display if user is logged in **/
        !AuthService.getToken() ? <RedirectPage/> :
        <div>
            <div className="header">
                <h1> Welcome {name} to Crash Business Analyzer </h1>
            </div>
            <div align={"center"}>
                <Flex vertical gap="large" align="center" style={{ width: '50%' }}>
                    <Button block size="large" onClick={goToDataEntryPage}>Data Entry</Button>
                    <Button block size={"large"} onClick={gotToMetricsPage}>Metrics</Button>
                    <Button size={"large"} onClick={logoutHandler} >Logout</Button>
                </Flex>
            </div>
        </div>
    );
}

export default Home;
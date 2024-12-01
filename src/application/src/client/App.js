import './App.css';
import React, { useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AuthService from "../service/AuthService.js";
import Home from "./Components/Home/Home.jsx";
import LoginSignUp from "./Components/LoginSignUp/LoginSignUp.jsx";
import DataEntryHomePage from "./Components/DataEntryForm/DataEntryOverview/DataEntryHomePage.jsx";
import MetricViewPage from "./Components/Metrics/MetricViewPage.jsx";
import axios from "axios";
import RedirectPage from "./Components/Redirect/RedirectPage.jsx";
import MetricTable from "./Components/Metrics/Display/MetricTable.jsx";

const verifyTokenAPIURl = "https://8rxho3mpod.execute-api.us-east-1.amazonaws.com/prod/verify";

export default function App() {

    const [isAuthenticating, setAuthenticating] = React.useState(true);
    useEffect(() => {
        const token = AuthService.getToken();
        if( token === 'undefined' || token === undefined || token === null || !token) {
            return;
        }
        const requestBody = {
            user: AuthService.getUser(),
            token: token,
        }
        axios.post(verifyTokenAPIURl, requestBody).then(response => {
            AuthService.setUserSession(response.data.user, response.data.token);
            setAuthenticating(false);
        }).catch(() => {
            AuthService.resetUserSession();
            setAuthenticating(false);
        });
    }, []);

    const token = AuthService.getToken();
    if(isAuthenticating && token) {
        return <div className="authenticating"> Authenticating ...</div>
    }

    return (
        <div className="App">
             {/*// Todo: Make Conditional Logout button here? but not present for login page...*/}
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<LoginSignUp/>}/>
                    <Route path="/" element={<LoginSignUp/>}/>
                    <Route path="/login" element={<LoginSignUp/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/dataentry" element={<DataEntryHomePage/>}/>
                    <Route path="/metrics" element={<MetricViewPage/>}/>
                    <Route path="/redirect" element={<RedirectPage/>}/>
                    <Route path="/table" element={<MetricTable />} />
                    <Route path="/*" element={<LoginSignUp/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
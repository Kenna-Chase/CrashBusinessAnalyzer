import React, { useState } from "react";
import "./LoginSignUp.css";
import {Button, ConfigProvider, Divider, Input} from "antd";
import axios from "axios";
import AuthService from "../../../service/AuthService.js";
import { useNavigate } from "react-router-dom";

const registerUrl = "https://8rxho3mpod.execute-api.us-east-1.amazonaws.com/prod/register";
const loginUrl = "https://8rxho3mpod.execute-api.us-east-1.amazonaws.com/prod/login";

const LoginSignUp = () => {
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate("/home");
    };

    const [action, setAction] = useState("Login");

    const [name, setName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");

    // Loadings
    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });

        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 3000);
    };

    const registrationHandler = (event) => {
        setMessage("");
        event.preventDefault();
        enterLoading(0);
        if(name.trim() === '' || email.trim()  === '' || username.trim()  === '' || password.trim()  === '') {
            setMessage('**All fields are required.');
            return;
        }

        const requestBody = {
            username: username,
            email: email,
            name: name,
            password: password,
            company: companyName,
        }
        const requestConfig={
            headers: {

            }
        }
        axios.post(registerUrl, requestBody, requestConfig).then(response => {
            setMessage('Registration Successful! Please login')
        }).catch(error => {
            if(error.response.status === 401 || error.response.status === 403) {
                setMessage(error.response.data.message);
            } else {
                setMessage('Sorry ... the back end server is down. Please try again later')
            }
        })
    }

    const signInHandler = (event) => {
        setMessage("");
        event.preventDefault();
        enterLoading(0);
        if(username.trim() === '' || password.trim()  === '') {
            setMessage('**Both username and password are required.');
            return;
        }

        const requestBody = {
            username: username,
            password: password,
        }

        axios.post(loginUrl, requestBody).then(response => {
            AuthService.setUserSession(response.data.user, response.data.token);
            goToHomePage();
        }).catch(error => {
            if(error.response.status === 401 || error.response.status === 403) {
                setMessage(error.response.data.message);
            } else {
                setMessage('Sorry ... the back end server is down. Please try again later')
            }
        });
    }

    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        colorPrimary: '#4c00b4',
                        algorithm: true, // Enable algorithm
                    },
                    Input: {
                        colorPrimary: '#4c00b4',
                        algorithm: true, // Enable algorithm
                    }
                },
            }}
        >

        <div>
            <br/>
            <br/>

            <div className="header">
                <h1> Welcome to Crash Business Analyzer </h1>
                <Divider style={{  borderColor: '#4c00b4' }}></Divider>
            </div>
            <form className="container">
                <div className="inputs">
                    {action === "Login" ?
                        // Login View
                        <div>
                            <h2> Sign In </h2>

                            <Input size="large" type="text" placeholder="Username" value={username}
                                   onChange={event => setUsername(event.target.value)}/>
                            <Input.Password size="large" type="text" placeholder="Password" value={password}
                                   onChange={event => setPassword(event.target.value)}/>
                            {message && <p className="message">{message}</p>}
                            {!message && <Divider style={{  borderColor: '#4c00b4' }}></Divider>}
                            <Button block size="large" color={"primary"} loading={loadings[0]}
                                    onClick={signInHandler}> Sign In </Button>
                            <div className="forgot-password" onClick={() => {setMessage("");setAction("Sign Up")}}><span>Create Account?</span></div>
                        </div>
                        :
                        // Sign Up View
                        <div>
                            <h2> Create New Account </h2>
                            <Input size="large" type="text" placeholder="Company Name" value={companyName}
                                   onChange={event => setCompanyName(event.target.value)}/>
                            <Input size="large" type="text" placeholder="Personal Name" value={name}
                                   onChange={event => setName(event.target.value)}/>
                            <Input size="large" type="text" placeholder="Email" value={email}
                                   onChange={event => setEmail(event.target.value)}/>
                            <Input size="large" type="text" placeholder="Username" value={username}
                                   onChange={event => setUsername(event.target.value)}/>
                            <Input.Password size="large" type="text" placeholder="Password" value={password}
                                   onChange={event => setPassword(event.target.value)}/>
                            {message && <p className="message">{message}</p>}
                            {!message && <Divider style={{  borderColor: '#4c00b4' }}></Divider>}
                            <Button block size="large" color={"primary"} loading={loadings[0]}
                                    onClick={registrationHandler}> Create Account </Button>
                            <div className="forgot-password" onClick={() => {setMessage("");setAction("Login")}}>
                                <span>Login Instead?</span></div>
                        </div>
                    }
                            </div>
                        </form>
                        </div>
                        </ConfigProvider>
                        );
                    };

                    export default LoginSignUp;

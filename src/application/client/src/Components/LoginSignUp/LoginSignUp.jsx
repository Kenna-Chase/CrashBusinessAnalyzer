import React, {useState} from 'react';
import "./LoginSignUp.css";

import user_icon from "./Assets/person.png"
import email_icon from "./Assets/email.png"
import password_icon from "./Assets/password.png"

const LoginSignUp = () => {
    const [action, setAction] = useState("Sign Up");
    return (
        <div className='container'>
            <header className='title'>Crash Business Analyzer</header>

            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : <div className="input">
                    <img src={user_icon} width={50} height={50} alt="user icon"/>
                    <input type="text" placeholder="Name"/>
                </div>}
                <div className="input">
                    <img src={email_icon} width={50} height={50} alt="email icon"/>
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="input">
                    <img src={password_icon} width={50} height={50} alt="password icon"/>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            {action === "Sign Up" ? <div></div> :
                <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}

            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {
                    setAction("Sign Up")
                }}>Sign Up
                </div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {
                    setAction("Login")
                }}>Login
                </div>
            </div>
        </div>
    );
};
export default LoginSignUp;
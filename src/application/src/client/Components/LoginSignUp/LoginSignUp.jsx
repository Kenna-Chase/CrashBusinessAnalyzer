import React, {useState} from 'react';
import "./LoginSignUp.css";

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
                    <input type="text" placeholder="Name"/>
                </div>}
                <div className="input">
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="input">
                    <input type="password" placeholder="Password"/>
                </div>
                {action === "Sign Up" ? <div></div> :

                    <div className="forgot-password" >Lost Password? <span>Click Here!</span></div>}
            </div>

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
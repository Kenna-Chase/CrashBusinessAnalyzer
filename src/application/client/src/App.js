import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function Home() {
    return <h2>Welcome to the Home Page!</h2>;
}

function TestComponent() {
    return <h2>This is a test component served by React!</h2>;
}

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/test">Test</Link></li>
                </ul>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<TestComponent />} />
            </Routes>
        </BrowserRouter>
    );
}

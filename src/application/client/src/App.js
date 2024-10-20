import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import DataEntryForm from "./Components/DataEntryForm/DataEntryOverview/DataEntryForm";


function TestComponent() {
    return <h2>This is a test component served by React!</h2>;
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/test" element={<TestComponent />} />
                <Route path="/dataentry" element={<DataEntryForm />} />
            </Routes>
        </BrowserRouter>
    );
}

import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import DataEntryForm from "./Components/DataEntryForm/DataEntryOverview/DataEntryForm";
import LoginSignUp from "./Components/LoginSignUp/LoginSignUp";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<LoginSignUp />} />
                <Route path="/dataentry" element={<DataEntryForm />} />
            </Routes>
        </BrowserRouter>
    );
}

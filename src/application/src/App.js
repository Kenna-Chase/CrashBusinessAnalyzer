import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import Home from "./Components/Home/Home"
import LoginSignUp from "./Components/LoginSignUp/LoginSignUp";
import DataEntryForm from "./Components/DataEntryForm/DataEntryForm";
import SupplementMultiStepForm
    from "./Components/MultiStepForm/FormSections/SupplementToFinancialStatement/SupplementMultiStepForm";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login Page</Link>
                    </li>
                    <li>
                        <Link to="/dataentry">Data Entry</Link>
                    </li>
                    <li>
                        <Link to="/supplement">Supplement Data Entry Form</Link>
                    </li>
                </ul>
            </div>

            <Routes>
                <Route path="/dataentry" element={<DataEntryForm />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginSignUp />} />
                <Route path="/supplement" element={<SupplementMultiStepForm />} />
            </Routes>
        </BrowserRouter>
    );
}
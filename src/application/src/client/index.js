import React from 'react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import LoginSignUp from "./Components/LoginSignUp/LoginSignUp.jsx";
import ApiTestPage from "./Components/ApiTesting/ApiTestPage.jsx";
import DataEntryHomePage from "./Components/DataEntryForm/DataEntryOverview/DataEntryHomePage.jsx";

const router = createBrowserRouter([
    {
        children: [
            {path: '/', element: <Home />},
            {path: '/home', element: <Home />},
            {path: '/dataentry', element: <DataEntryHomePage />},
            {path: '/login', element: <LoginSignUp />},
            {path: '/apiTest', element: <ApiTestPage />},
        ]
    }
]);
const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);


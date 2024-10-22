import React from 'react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import DataEntryForm from "./Components/DataEntryForm/DataEntryOverview/DataEntryForm.jsx";
import LoginSignUp from "./Components/LoginSignUp/LoginSignUp.jsx";

const router = createBrowserRouter([
    {
        //element: <App />,
        children: [
            {path: '/', element: <Home />},
            {path: '/home', element: <Home />},
            {path: '/dataentry', element: <DataEntryForm />},
            {path: '/login', element: <LoginSignUp />},
        ]
    }
]);
const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);


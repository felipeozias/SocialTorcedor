import {
    createBrowserRouter,
    RouterProvider,
    useNavigate,
} from "react-router-dom";
import Login from "../pages/Login";
import Update from "../pages/Update";
import Home, { homeLoader } from "../pages/Home";
import Register from "../pages/Register";
import { useEffect } from "react";
import React from "react";

function Root() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/login");
    }, [navigate]);

    return <></>;
}

export default function Routes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/home",
            element: <Home />,
            loader: homeLoader,
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "/update-user",
            element: <Update />,
        },
    ]);

    return <RouterProvider router={router} />;
}

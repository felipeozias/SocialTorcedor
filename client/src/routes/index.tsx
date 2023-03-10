import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";

export default function Routes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/home",
            element: <Home />,
        },
    ]);

    return <RouterProvider router={router} />;
}

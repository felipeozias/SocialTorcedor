import {
    createBrowserRouter,
    redirect,
    RouterProvider,
} from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";

export default function Routes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
            action: () => redirect("/login"),
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/home",
            element: <Home />,
        },
        {
            path: "/register",
            element: <Register />,
        },
    ]);

    return <RouterProvider router={router} />;
}

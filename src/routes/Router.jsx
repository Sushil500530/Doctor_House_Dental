import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../error/ErrorPage";
import Login from "../pages/login/Login";
import Resister from "../pages/resister/Resister";

const Router = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage></ErrorPage>,
        element:<MainLayout></MainLayout>,
        children: [
            {
                // index:true,
                // element:
            },
           
        ]
    },
    {
        path:"/login",
        element: <Login></Login>
    },
    {
        path:"/resister",
        element: <Resister></Resister>
    }
])

export default Router;
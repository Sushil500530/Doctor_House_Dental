import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../error/ErrorPage";

const Router = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage></ErrorPage>,
        element:<MainLayout></MainLayout>,
        children: [
            {
                // index:true,
                // element:
            }
        ]
    }
])

export default Router;
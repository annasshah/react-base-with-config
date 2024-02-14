import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { Home } from "../pages/Home";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="" element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
        </Route>
    )
)


const Router_App = () => {


    return <RouterProvider router={router} />
}


export {Router_App}
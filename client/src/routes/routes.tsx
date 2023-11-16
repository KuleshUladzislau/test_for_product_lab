import { LoginPage } from "pages/login-page/login-page";
import { SignUpPage } from "pages/sign-up-page/sign-up-page";
import { ProductPage } from "pages/product-page/product-page";
import {createBrowserRouter, Navigate, Outlet, RouterProvider} from "react-router-dom";
import { useMeQuery } from "services/auth-sevice/auth-api";
import {Layout} from "../pages/layout/layout";



function PrivateRoutes() {
    const {data, isError, isLoading} = useMeQuery()

    const isAuthenticated = !!data

    if (isLoading) return <div>loading</div>

    return isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
}


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                element: <PrivateRoutes/>,
                children: [
                    {
                        path:'/*',
                        element:<div style={{position:'absolute',top:'150px'}}>Error 404 page not found</div>
                    },
                    {
                        path: '/',
                        element: <ProductPage/>,
                    },

                ],
            },
            {
                path: '/login',
                element: <LoginPage/>,
            },
            {
                path: '/registration',
                element: <SignUpPage/>,
            },

        ],
    },


]);

export const Router = () => {
    const {} = useMeQuery()


    return <RouterProvider router={router}/>
}

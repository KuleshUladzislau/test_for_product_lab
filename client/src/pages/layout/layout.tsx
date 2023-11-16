import { Header, Toast } from 'components/ui';
import React from 'react';
import {Navigate, Outlet, useNavigate} from "react-router-dom";
import {useLogoutMutation, useMeQuery } from 'services/auth-sevice/auth-api';



export const Layout = () => {
    const {data, isError} = useMeQuery()
    const [logout] = useLogoutMutation()
    const navigate = useNavigate()

    const onLogOutHandler =  () => {

         logout().unwrap().then(()=>{
           navigate('/login')
         })

    }

    
    return (
        <>
            {!!data && !isError && <Header userName={data?.userName} logout={onLogOutHandler}/>}
            <Outlet/>
            <Toast/>
        </>
    );
};


import React, {useEffect} from 'react';
import s from './login-page.module.css'
import {SubmitHandler} from "react-hook-form";
import {Navigate, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useLoginMutation, useMeQuery } from 'services/auth-sevice/auth-api';
import { SignIn } from 'components/auth';


type LoginFormType = {
    email:string
    password:string
}


export const LoginPage = () => {
    const {data,isLoading,isError} = useMeQuery()
    const [login] = useLoginMutation()
    const navigate = useNavigate()



    const onSubmitHandler:SubmitHandler<LoginFormType> = (data)=>{
            login(data).unwrap().then(()=>{
                navigate('/')
                toast.success('success')
            }).catch(e=>{
                toast.error(e.data.message)
            })

    }

    if(isLoading) return  <div>loading...</div>


    return (
        <div className={s.container}>
            <SignIn onSubmit={onSubmitHandler}/>
        </div>
    );
};


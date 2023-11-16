import React from 'react';
import s from './sign-up.module.css'
import {SubmitHandler} from "react-hook-form";
import {SignUpValuesForm} from "../../components/auth/sign-up/useSignUpForm";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import { SignUp } from 'components/auth';
import { useRegistrationMutation } from 'services/auth-sevice/auth-api';


export const SignUpPage = () => {

    const [registration,{error}] = useRegistrationMutation()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<SignUpValuesForm> = (data) => {
        const {email, password} = data
        registration({email, password}).unwrap().then(()=>{
            navigate('/login')
            toast.success('success')
        }).catch(e=>{
            toast.error(e.data.message)
        })
    }

    return (
        <div className={s.container}>
            <SignUp onSubmit={onSubmit}/>
        </div>
    )
};


import React from 'react';
import {SignInValuesForm, useSignInForm} from "./useSignInForm";
import s from './sign-in.module.css'
import {Link} from "react-router-dom";
import {Button} from "../../ui/button/Button";

type SignInProps = {
    onSubmit: (data: SignInValuesForm) => void
}

export const SignIn = ({onSubmit}:SignInProps) => {

    const {
        errors,
        handleSubmit,
        register
    } = useSignInForm()

    return (
        <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign In</h1>
            <div className={s.inputContainer}>
                <label htmlFor="email">Email</label>
                <input type="text" {...register('email')} id={'email'}/>
                {errors.email && <div className={s.errorMessage}>{errors.email.message}</div>}
            </div>
            <div className={s.inputContainer}>
                <label htmlFor="password">Password</label>
                <input type="password" {...register('password')} id={'password'}/>
                {errors.password && <div className={s.errorMessage}>{errors.password.message}</div>}
            </div>
            <Button title={'SignIn'}  className={s.button}/>
            <p className={s.question}>
               don't have an any account?
            </p>

                <p className={s.link}> <Link to={'/registration'} >click here to register </Link></p>


        </form>
    );
};

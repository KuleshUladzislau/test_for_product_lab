import React from 'react';

import s from './sign-up.module.css'
import {useSignUpForm} from "./useSignUpForm";
import {SignInValuesForm} from "../sign-in/useSignInForm";
import {NavLink} from "react-router-dom";

type SignInProps = {
    onSubmit: (data: SignInValuesForm) => void
}

export const SignUp = ({onSubmit}:SignInProps) => {

    const {
        errors,
        handleSubmit,
        register
    } = useSignUpForm()

    return (
        <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign Up</h1>
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

            <button type="submit">Sign Up</button>

            <NavLink to={'/login'} className={s.link}>back to login</NavLink>
        </form>
    );
};

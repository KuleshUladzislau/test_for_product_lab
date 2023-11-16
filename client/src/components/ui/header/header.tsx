import React from 'react';
import style from './header.module.css'


type HeaderProps = {
    logout: () => void
    userName: string
}
export const Header = (
    {
        userName,
        logout
    }: HeaderProps
) => {
    const onLogoutHandler = () => logout()

    return (
        <div className={style.header}>
            <div className={style.headerContainer}>
                <span className={style.userName}>{userName}</span>
                <span className={style.logout} onClick={onLogoutHandler}>logout</span>
            </div>

        </div>
    );
};



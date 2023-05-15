import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: any
}

const Header = (props: HeaderPropsType) => {

    return (
        <header className={s.header}>
            <img src='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png' />
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header

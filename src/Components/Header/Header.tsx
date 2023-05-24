import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import user from './../../Assets/images/user.png'

type HeaderPropsType = {
    isAuth: boolean
    login: any
    logout: any
}

const Header = (props: HeaderPropsType) => {

    return (
        <header className={s.header}>
            <img src='https://seeklogo.com/images/H/hummingbird-logo-D436A31661-seeklogo.com.png' alt={'Avatar'}/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ?
                    <div className={s.avatarWrapper}>
                        <img src={user} alt="ava" className={s.img}/>
                        {props.login}
                        <div>
                            <button onClick={props.logout}>
                                Logout
                            </button>
                        </div>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header

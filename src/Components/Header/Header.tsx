import React from "react";
import s from './Header.module.css';
import {StateType} from "../../redux/state";


const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://www.freepnglogos.com/uploads/photography-logo-png/photography-logo-dave-wall-photographer-educator-retoucher-digital-4.png' />
        </header>
    )

}

export default Header
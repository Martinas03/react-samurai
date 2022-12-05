import React from "react";
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import {FriendsType, SiteBarType, StateType} from "../../redux/state";

type NavType = {
    siteBarBlock: SiteBarType
}

const Nav = (props: NavType) => {
    console.log(props)
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} className={s.activelink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/dialogs'} className={s.activelink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} className={s.activelink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} className={s.activelink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/settings'} className={s.activelink}>Settings</NavLink>
            </div>

            <h1 className={s.h1}>{props.siteBarBlock.title}</h1>
            {props.siteBarBlock.friends.map((f: FriendsType) => {

                return <div className={s.siteBarWrapper}>
                    <div>
                        <div>
                            <span> {f.name} </span>
                        </div>
                        <div>
                            <img className={s.img} src={f.avatar} alt={f.name}/>
                        </div>
                    </div>


                </div>
            })}
        </nav>
    )
}

export default Nav
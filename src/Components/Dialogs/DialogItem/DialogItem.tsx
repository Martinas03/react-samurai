import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom/";
import {DialogsType} from "../../../redux/state";


const DialogItem = (props: DialogsType) => {
    let path = '/dialogs/' + props.id
    // @ts-ignore
    return <div className={s.dialogItems}>
        <img src={props.avatar} className={s.img}/>
        <NavLink to={path}>{props.name}</NavLink>
        </div>
}

export default DialogItem
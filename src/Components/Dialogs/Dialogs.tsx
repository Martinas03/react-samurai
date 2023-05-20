import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagePageType} from "../../redux/state";
import {Redirect} from 'react-router-dom'
import {Field, reduxForm} from "redux-form";

export const DialogsForm = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field name="message"
                       component="textarea"
                       type="text"
                       placeholder={'message'}
                />

            </div>
            <div>
                <button>send message</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form: 'dialogAddMessageForm'})(DialogsForm)

type LocalDialogsType = {
    messagesPage: MessagePageType
    addMessage: (text: string) => void
    isAuth: boolean
}


const Dialogs = (props: LocalDialogsType) => {


    let dialogsElement = props.messagesPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>)

    let messagesElement = props.messagesPage.messages.map(m => <Message message={m.message} id={m.id}/>)

    const addNewMessage = (value: any) => {
        console.log(value.message)
        props.addMessage(value.message)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div>
                <DialogsReduxForm
                    onSubmit={addNewMessage}/>
                <div className={s.messages}>
                    {messagesElement}
                </div>
            </div>
        </div>
    )

}


export default Dialogs
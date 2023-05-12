import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { addMessageActionCreator,   updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {ActionTypes, MessagePageType} from "../../redux/state";
import {Redirect} from 'react-router-dom'
import Login from "../Login/Login";


type LocalDialogsType = {
    messagesPage: MessagePageType
    addMessage: (text: string)=> void
    updateNewMessageText: (message: string)=> void
    isAuth: boolean
}


const Dialogs = (props: LocalDialogsType) => {


    let dialogsElement = props.messagesPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>)

    let messagesElement = props.messagesPage.messages.map(m => <Message message={m.message} id={m.id}/>)

    const message = React.createRef<HTMLTextAreaElement>()


    const newMessage = () => {
        let text = message.current?.value

        props.addMessage(text ? text : '')
        props.updateNewMessageText('')
    }
    const changeMessage = () => {

        if(message.current) {
            // props.dispatch(updateNewMessageTextActionCreator(message.current.value))
            props.updateNewMessageText(message.current.value)
        }
    }
    // if (!props.isAuth) return <Redirect to={'/login'}/>
            // <Login/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div>
                <div><textarea ref={message}
                               value={props.messagesPage.newMessageText}
                               onChange={changeMessage}

                /></div>
                <div>
                    <button onClick={newMessage}>send message</button>
                </div>
                <div className={s.messages}>
                    {messagesElement}
                    {/*<div className={s.message}>*/}
                    {/*    */}
                    {/*</div>*/}
                    {/*<div className={s.message}>*/}
                    {/*    How are your it?*/}
                    {/*</div>*/}
                    {/*<div className={s.message}>*/}
                    {/*    See you later*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )

}

export default Dialogs
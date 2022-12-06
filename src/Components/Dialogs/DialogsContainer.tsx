import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { addMessageActionCreator,   updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {ActionTypes, MessagePageType} from "../../redux/state";
import {StoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";


type LocalDialogsType = {
    store: StoreType
}


const DialogsContainer = (props: LocalDialogsType) => {

    const newMessage = (text: string) => {


        props.store.dispatch(addMessageActionCreator(text ? text : ''))
        props.store.dispatch(updateNewMessageTextActionCreator(''))
        // props.addMessage(text ? text : '')
        // props.updateNewMessageText('')
    }
    const changeMessage = (message: string) => {


            props.store.dispatch(updateNewMessageTextActionCreator(message))
            // props.updateNewMessageText()


    }

    return (
        <div className={s.dialogs}>
           <Dialogs messagesPage={props.store.getState().messagesPage} addMessage={newMessage} updateNewMessageText={changeMessage}/>
        </div>
    )

}

export default DialogsContainer
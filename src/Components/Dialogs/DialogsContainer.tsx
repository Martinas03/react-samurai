import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {ActionTypes, MessagePageType} from "../../redux/state";
import {StoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";


type LocalDialogsType = {
    store: StoreType
}


const DialogsContainer = () => {


    return (
        <div className={s.dialogs}>
            <StoreContext.Consumer>
                { (store) => {
                    const newMessage = (text: string) => {
                        store.dispatch(addMessageActionCreator(text ? text : ''))
                        store.dispatch(updateNewMessageTextActionCreator(''))
                        // props.addMessage(text ? text : '')
                        // props.updateNewMessageText('')
                    }
                    const changeMessage = (message: string) => {


                        store.dispatch(updateNewMessageTextActionCreator(message))
                        // props.updateNewMessageText()
                    }
                    return <Dialogs messagesPage={store.getState().messagesPage} addMessage={newMessage}
                                    updateNewMessageText={changeMessage}/>
                }

                }
            </StoreContext.Consumer>
        </div>
    )

}

export default DialogsContainer
import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addMessageActionCreator,
    InitialStateType,
    updateNewMessageTextActionCreator
} from "../../redux/dialogs-reducer";
import {ActionTypes, MessagePageType} from "../../redux/state";
import {AppStateType, StoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type LocalDialogsType = {
    store: StoreType
}


// const DialogsContainer = () => {
//
//
//     return (
//         <div className={s.dialogs}>
//             <StoreContext.Consumer>
//                 { (store: any) => {
//                     const newMessage = (text: string) => {
//                         store.dispatch(addMessageActionCreator(text ? text : ''))
//                         store.dispatch(updateNewMessageTextActionCreator(''))
//                         // props.addMessage(text ? text : '')
//                         // props.updateNewMessageText('')
//                     }
//                     const changeMessage = (message: string) => {
//
//
//                         store.dispatch(updateNewMessageTextActionCreator(message))
//                         // props.updateNewMessageText()
//                     }
//                     return <Dialogs messagesPage={store.getState().messagesPage} addMessage={newMessage}
//                                     updateNewMessageText={changeMessage}/>
//                 }
//
//                 }
//             </StoreContext.Consumer>
//         </div>
//     )
//
// }

type MapStatePropsType = {
    messagesPage: InitialStateType
}

type MapDispatchPropsType = {
    addMessage: (text: string) => void
    updateNewMessageText: (message: string) =>void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messagesPage: state.messagesPage
    }
}

export const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: (text: string) =>  dispatch(addMessageActionCreator(text ? text : '')),
        updateNewMessageText: (message: string) =>  dispatch(updateNewMessageTextActionCreator(message))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
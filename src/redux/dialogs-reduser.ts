import {AddMessagePropsType, MessagesType, UpdateNewMessageTextPropsType,} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const dialogsReduser = (state: any, action: any) => {
    if (action.type === ADD_MESSAGE) {
        let newMessage: MessagesType = {
            id: 4,
            message: action.message
        }
        state.messages.unshift(newMessage)
        state.newPostText = ''
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        state.newMessageText = action.newMessageText
    }
    return state
}

export const addMessageActionCreator = (text: string): AddMessagePropsType => ({type: ADD_MESSAGE, message: text})

export const updateNewMessageTextActionCreator = (text: string): UpdateNewMessageTextPropsType => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text})
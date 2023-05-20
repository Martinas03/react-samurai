import {
    ActionTypes,
    AddMessagePropsType,
    DialogsType,
    MessagesType,
} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE'

export type InitialStateType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

let initialStte: InitialStateType = {
    dialogs: [
        {
            id: 1,
            name: 'Dimych',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVTxYJh0__zgheEYKs-48k-1ENhdE3iDbH2g&usqp=CAU'
        },
        {
            id: 2,
            name: 'Arlan',
            avatar: "https://cdn3.vectorstock.com/i/1000x1000/15/32/isolated-cute-cat-avatar-vector-21041532.jpg"
        },
        {id: 3, name: 'Abzal', avatar: 'https://thumbs.dreamstime.com/b/cat-avatar-illustration-cartoon-45383590.jpg'},
        {
            id: 4,
            name: 'Ainyr',
            avatar: 'https://img.freepik.com/premium-vector/cute-orange-robot-cat-avatar_79416-86.jpg?w=2000'
        },
        {
            id: 5,
            name: 'Polina',
            avatar: 'https://cdn3.vectorstock.com/i/1000x1000/15/37/isolated-cute-cat-avatar-vector-21041537.jpg'
        },
        {
            id: 6,
            name: 'Alexey',
            avatar: 'https://as2.ftcdn.net/v2/jpg/02/07/81/65/1000_F_207816574_hQqoQk0p8n2xxHtScE7sYDBFihQ7yFgV.jpg'
        },
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are your it?'},
        {id: 3, message: 'See you later'}
    ],
}

export const dialogsReducer = (state: InitialStateType = initialStte, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage: MessagesType = {
                id: 4,
                message: action.message
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }

        }
        default:
            return state
    }
}

export const addMessageActionCreator = (text: string): AddMessagePropsType => ({type: ADD_MESSAGE, message: text})


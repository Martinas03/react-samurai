import {ActionTypes, FriendsType} from "./state";

type IitialStateType = {
    title: string
    friends: FriendsType[]
}

let iitialState: IitialStateType = {
    title: 'Friends',
    friends: [
        {
            id: 1,
            name: 'Dimych',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVTxYJh0__zgheEYKs-48k-1ENhdE3iDbH2g&usqp=CAU'
        },
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
    ]
}

export let sideBarReduse = (state: IitialStateType = iitialState, action: ActionTypes) => {
    switch (action.type) {
        default:
            return state
    }
}


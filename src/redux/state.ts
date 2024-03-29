import {profileReducer, setUserProfile} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sideBarReduse} from "./sideBar-reduse";
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFolowingProgress,
    toggleIsFetching,
    unFollowSuccess
} from "./users-reducer";
import {getCapchaUrlSuccess, setUserData} from "./auth-reducer";
import {initializedSuccess} from "./app-reducer";

let _rerenderTree = () => {
    console.log('State changed')
}

export type StoreType = {
    _state: StateType
    rerenderTree: () => void
    getState: () => StateType
    addPost: () => void
    addMessage: (message: string) => void
    updateNewPostText: (newText: string) => void
    updateNewMessageText: (text: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes =
    AddPostPropsType
    | DeletPostActionCreatorPropsType
    | SetUsersProfileActionType
    | AddMessagePropsType
    | FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | GetCapchaUrlSuccessActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType
    | SetUserDataActionType
    | ToggleFolowingProgressActionType
    | SetStatusPropsType
    | InitializedSuccessActionType
    | SetPhotoSuccessActionCreatorPropsType


export type AddPostPropsType = {
    type: 'ADD-POST'
    post: string
}

export type DeletPostActionCreatorPropsType = {
    type: 'DELETE_POST'
    postId: number
}

export type SetPhotoSuccessActionCreatorPropsType = {
    type: 'SET_PHOTO_SUCCESS'
    photos: any
}

export type SetUsersProfileActionType = {
    type: 'SET-USERS-PROFILE'
    profile: any
}

export type AddMessagePropsType = {
    type: 'ADD-MESSAGE'
    message: string
}


export type SetStatusPropsType = {
    type: 'SET-STATUS'
    status: string
}

export type InitializedSuccessActionType = ReturnType<typeof initializedSuccess>

export type FollowActionType = ReturnType<typeof followSuccess>

export type UnFollowActionType = ReturnType<typeof unFollowSuccess>

export type SetUsersActionType = ReturnType<typeof setUsers>

export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>

export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>

export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>

export type SetUserDataActionType = ReturnType<typeof setUserData>

export type GetCapchaUrlSuccessActionType = ReturnType<typeof getCapchaUrlSuccess>

export type ToggleFolowingProgressActionType = ReturnType<typeof toggleFolowingProgress>

export type StateType = {
    messagesPage: MessagePageType
    profilePage: ProfilePageType
    siteBar: SiteBarType
}

export type MessagePageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

export type DialogsType = {
    id: number
    name: string
    avatar: string
}

export type MessagesType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
    profile: any
    status: string

}

export type PostsType = {
    id: number
    message: string
    likeCount: number
}

export type SiteBarType = {
    title: string
    friends: FriendsType[]
}

export type FriendsType = {
    id: number
    name: string
    avatar: string
}

let store: StoreType = {
    rerenderTree() {
        console.log('State changed')
    },
    _state: {
        messagesPage: {
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
                {
                    id: 3,
                    name: 'Abzal',
                    avatar: 'https://thumbs.dreamstime.com/b/cat-avatar-illustration-cartoon-45383590.jpg'
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
            newMessageText: 'New message'
        },
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likeCount: 5},
                {id: 2, message: "It's my first post", likeCount: 55},
                {id: 3, message: "Hehehey", likeCount: 550},
            ],
            newPostText: 'It-kamasutra',
            profile: null,
            status: '',

        },
        siteBar: {
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
    },
    getState() {
        return this._state;
    },
    addPost() {
        let newPoost: PostsType = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }
        this._state.profilePage.posts.push(newPoost)
        this.rerenderTree()
    },

    addMessage(message: string) {
        let newMessage: MessagesType = {
            id: 4,
            message: message
        }
        this._state.messagesPage.messages.unshift(newMessage)
        this._state.profilePage.newPostText = ''
        this.rerenderTree()
    },

    updateNewPostText(newPost: string) {
        this._state.profilePage.newPostText = newPost
        this.rerenderTree()
    },

    updateNewMessageText(newMessageText: string) {
        this._state.messagesPage.newMessageText = newMessageText
        this.rerenderTree()
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.messagesPage, action)
        sideBarReduse(this._state.siteBar, action)
        this.rerenderTree()
    },

    subscribe
    (observer: () => void) {
        this.rerenderTree = observer
    }
}

// const ADD_POST = 'ADD-POST'
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
// const ADD_MESSAGE = 'ADD-MESSAGE'
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
//
//
// export const addPostActionType = (): AddPostPropsType => ({type: ADD_POST})
//
// export const updateNewPostTextActionType = (text: string): UpdateNewPostTextPropsType => ({type: UPDATE_NEW_POST_TEXT, newPost: text})
//
// export const addMessageActionCreator = (text: string): AddMessagePropsType => ({type: ADD_MESSAGE, message: text})
//
// export const updateNewMessageTextActionCreator = (text: string): UpdateNewMessageTextPropsType => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text})


export default store

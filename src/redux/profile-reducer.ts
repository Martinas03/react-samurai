import {
    ActionTypes,
    AddPostPropsType, UpdateNewPostTextPropsType,
} from "./state";

export type PostsType = {
    id: number
    message: string
    likeCount: number
}

export type InitialStateType = typeof initialState

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 5},
        {id: 2, message: "It's my first post", likeCount: 55},
        {id: 3, message: "Hehehey", likeCount: 550},
    ] as Array<PostsType>,
    newPostText: 'It-kamasutra'
}

export const profileReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPoost: PostsType = {
                id: 4,
                message: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPoost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPost
            }
        }
        default:
            return state
    }
}


export const addPostActionCreator = (): AddPostPropsType => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextPropsType => ({
    type: UPDATE_NEW_POST_TEXT,
    newPost: text
})

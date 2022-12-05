import {
    ActionTypes,
    AddPostPropsType,
    PostsType,
    UpdateNewPostTextPropsType
} from "./state";

type InitialStateType = {
    posts: PostsType[]
    newPostText: string
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialStte: InitialStateType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 5},
        {id: 2, message: "It's my first post", likeCount: 55},
        {id: 3, message: "Hehehey", likeCount: 550},
    ],
    newPostText: 'It-kamasutra'
}

export const profileReducer = (state = initialStte, action: ActionTypes) => {
    if (action.type === ADD_POST) {
        let newPoost: PostsType = {
            id: 4,
            message: state.newPostText,
            likeCount: 0
        }
        state.posts.push(newPoost)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newPost
    }
    return state
}

export const addPostActionType = (): AddPostPropsType => ({type: ADD_POST})

export const updateNewPostTextActionType = (text: string): UpdateNewPostTextPropsType => ({
    type: UPDATE_NEW_POST_TEXT,
    newPost: text
})

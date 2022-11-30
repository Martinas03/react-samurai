import {ActionTypes, AddPostPropsType, PostsType, ProfilePageType, UpdateNewPostTextPropsType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const profileReduser = (state: ProfilePageType, action: ActionTypes) => {
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

export const updateNewPostTextActionType = (text: string): UpdateNewPostTextPropsType => ({type: UPDATE_NEW_POST_TEXT, newPost: text})

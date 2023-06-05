import {
    ActionTypes,
    AddPostPropsType,
    DeletPostActionCreatorPropsType,
    SetPhotoSuccessActionCreatorPropsType,
    SetUsersProfileActionType,
} from "./state";
import {profileAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
// import {Dispatch} from "redux";

export type PostsType = {
    id: number
    message: string
    likeCount: number
}

export type InitialStateType = typeof initialState

const ADD_POST = 'ADD-POST'
const SET_USERS_PROFILE = 'SET-USERS-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE_POST'
const SET_PHOTO_SUCCESS = 'SET_PHOTO_SUCCESS'

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 5},
        {id: 2, message: "It's my first post", likeCount: 55},
        {id: 3, message: "Hehehey", likeCount: 550},
    ] as Array<PostsType>,
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPoost: PostsType = {
                id: 4,
                message: action.post,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPoost],
            }
        }
        case SET_USERS_PROFILE: {
            return {...state, profile: action.profile}
        }

        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case "DELETE_POST": {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case SET_PHOTO_SUCCESS: {
            debugger
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state
    }
}


export const addPostActionCreator = (post: string): AddPostPropsType => ({type: ADD_POST, post})
export const setUserProfile = (profile: any): SetUsersProfileActionType => ({type: SET_USERS_PROFILE, profile})
export const setStatus = (status: string) => ({type: SET_STATUS, status})
export const deletPostActionCreator = (postId: number): DeletPostActionCreatorPropsType => ({type: DELETE_POST, postId})
export const setPhotoSuccess = (photos: any): SetPhotoSuccessActionCreatorPropsType => ({type: SET_PHOTO_SUCCESS, photos})


export const getProfile = (userId: number) => {
    return async (dispatch: Dispatch<any>) => {

        let data = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(data))
        console.log(data)
    }
}

export const getStatus = (userId: number) => {
    return async (dispatch: Dispatch<any>) => {
        let data = await profileAPI.getStatus(userId)
        dispatch(setStatus(data.data))
    }
}

export const updateStatus = (status: string) => {
    return async (dispatch: Dispatch) => {
        try {
            let data = await profileAPI.updateStatus(status)
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        } catch (e) {
            console.log(e)
        }

    }
}

export const savePhoto = (file) => {
    return async (dispatch: Dispatch) => {
        let data = await profileAPI.updatePhoto(file)
        if (data.resultCode === 0) {
            dispatch(setPhotoSuccess(data.data.photos))
        }
    }
}

export const saveProfile = (profile) => {
    return async (dispatch: Dispatch<any>, getState: any) => {
        // debugger
        const userId = getState().auth.userId
        let data = await profileAPI.saveProfile(profile)
        if (data.resultCode === 0) {
            dispatch(getProfile(userId))
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : ''
            const parsedString = data.messages[0]
                .split(' ')[3].split('->')[1].replace(')','')
            // const contactTitle = parsedString[3].split('->')[1].replace(')','')
            const changedWord = parsedString.charAt(0).toLowerCase() + parsedString.slice(1)
            // if(toString === 'mainlink') {
            //     return 'mainLink'
            // }
            console.log(changedWord)
            dispatch(stopSubmit('edit-profile', {'contacts': {[changedWord]: data.messages[0]}}))
            // console.log(data.messages)
            return Promise.reject(message)
        }
    }
}



import {
    ActionTypes,
    AddPostPropsType, DeletPostActionCreatorPropsType, SetUsersProfileActionType,
} from "./state";
import {profileAPI} from "../api/api";
import {Dispatch} from "redux";
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

        default:
            return state
    }
}


export const addPostActionCreator = (post: string): AddPostPropsType => ({type: ADD_POST, post})
export const setUserProfile = (profile: any): SetUsersProfileActionType => ({type: SET_USERS_PROFILE, profile})
export const setStatus = (status: string) => ({type: SET_STATUS, status})
export const deletPostActionCreator = (postId: number): DeletPostActionCreatorPropsType => ({type: DELETE_POST, postId})

export const getProfile = (userId: number) => {
    return (dispatch: Dispatch<any>) => {

        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
                console.log(data)
            })
    }
}

export const getStatus = (userId: number) => {
    return (dispatch: Dispatch<any>) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data.data))
            })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {

        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status))

                }
            })
    }
}

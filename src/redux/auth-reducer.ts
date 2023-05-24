import {ActionTypes} from "./state";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";


let initialState: InitialStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    checked: false
}

export type InitialStateType = {
    userId: any
    login: any
    email: any
    isAuth: boolean
    checked: boolean
}

const SET_USER_DATA = 'SET_USER_DATA'
const SET_LOGIN_DATA = 'SET_LOGIN_DATA'


export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                userId: action.data.userId,
                email: action.data.email,
                login: action.data.login,
                // ...action.data,
                isAuth: action.data.isAuth
            }
        }

        default:
            return state
    }
}
export const setUserData = (userId: number | any, login: string | any, email: string | any, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {userId, login, email, isAuth}
} as const)

export const setLoginData = (login: string, email: string, checked: boolean) => ({
    type: SET_LOGIN_DATA,
    data: {login, email, checked}
} as const)

export const getAuth = () => {
    return (dispatch: Dispatch<any>) => {
        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setUserData(id, login, email, true))

                }
            })
    }
}

export const getLogin = (email: string, password: string, rememberMe: boolean) => {

    return (dispatch: Dispatch<any>) => {
        authAPI.getLogin(email, password, rememberMe)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(getAuth())
                } else {
                    let message = res.data.messages.length > 0 ? res.data.messages[0] : ''
                    dispatch(stopSubmit('login', {_error: message}))
                    console.log(res.data.messages)
                }
            })
    }
}

export const getLogout = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch<any>) => {
        authAPI.getLogout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false))
                }
            })
    }
}



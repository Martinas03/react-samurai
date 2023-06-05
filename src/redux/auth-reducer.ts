import {ActionTypes} from "./state";
import {authAPI, securityAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";



let initialState: InitialStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    checked: false,
    captchaUrl: null
}

export type InitialStateType = {
    userId: any
    login: any
    email: any
    isAuth: boolean
    checked: boolean
    captchaUrl: any
}

const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'


export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                captchaUrl: action.data.captchaUrl
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

export const getCapchaUrlSuccess = (captchaUrl: any) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    data: {captchaUrl}
} as const)


export const getAuth = () => {
    return async (dispatch: Dispatch<any>) => {
       let data = await authAPI.getAuth()
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setUserData(id, login, email, true))
                }
    }
}

export const getLogin = (email: string, password: string, rememberMe: boolean, captcha: any) => {

    return async (dispatch: Dispatch<any>) => {
       let res = await authAPI.getLogin(email, password, rememberMe, captcha)
                if (res.data.resultCode === 0) {
                    dispatch(getAuth())
                } else {
                    if(res.data.resultCode === 10) {
                        dispatch(getCaptchaUrl())
                    }
                    let message = res.data.messages.length > 0 ? res.data.messages[0] : ''
                    dispatch(stopSubmit('login', {_error: message}))
                    console.log(res.data.messages)
                }
    }

}

export const getLogout = (email: string, password: string, rememberMe: boolean) => {
    return async (dispatch: Dispatch<any>) => {
       let data = await authAPI.getLogout()
                if (data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false))
                }
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch: Dispatch<any>) => {

       let response = await securityAPI.getCaptchaUrl()
                if (response.data.resultCode === 0) {
                    const captchaURL = response.data.url
                    console.log(captchaURL)
                        dispatch(getCapchaUrlSuccess(captchaURL))
                }
    }
}



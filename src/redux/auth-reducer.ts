import {ActionTypes} from "./state";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";


let initialState: InitialStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

export type InitialStateType = {
    userId: any
    login: any
    email: any
    isAuth: boolean
}

const SET_USER_DATA = 'SET_USER_DATA'


export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                userId: action.data.userId,
                email: action.data.email,
                login: action.data.login,
                // ...action.data,
                isAuth: true
            }
        }

        default:
            return state
    }
}
export const setUserData = (userId: number, login: string, email: string) => ({
    type: SET_USER_DATA,
    data: {userId, login, email}
} as const)

export const getAuth = () => {
    return (dispatch: Dispatch) => {
        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setUserData(id, login, email))

                }
            })
    }
}



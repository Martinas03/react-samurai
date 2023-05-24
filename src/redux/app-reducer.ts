import {ActionTypes} from "./state";
import {Dispatch} from "redux";
import {getAuth} from "./auth-reducer";
// import {getAuth} from "./auth-reducer";


let initialState: InitialStateType = {
    initialized: false
}

export type InitialStateType = {
   initialized: boolean
}

const SET_INITIALIZED = 'SET_INITIALIZED'


export const appReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {

        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }

        default:
            return state
    }
}
export const initializedSuccess = () => ({
    type: SET_INITIALIZED,
} as const)

export const initializeApp = () => (dispatch: Dispatch<any>) => {
       //  authAPI.getAuth()
       let promise = dispatch(getAuth())
        debugger
       // //  // dispatch(initializeApp())
        Promise.all([promise])
           .then(() => {
                dispatch(initializedSuccess())
            })
    }




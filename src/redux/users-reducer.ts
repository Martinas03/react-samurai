
import {ActionTypes} from "./state";

export type UsersType = {
    id: number
    photos: {small: string, large: string}
    isFollow: boolean
    name: string
    status: string
    location: { country: string, city: string }
}

let initialState: InitialStateType = {
    users: []
}

export type InitialStateType = {
    users: UsersType[]
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFollow: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFollow: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.user]
            }


        default:
            return state
    }
}


export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (user: UsersType[]) => ({type: SET_USERS, user} as const)


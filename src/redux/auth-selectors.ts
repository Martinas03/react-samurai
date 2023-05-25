import {AppStateType} from "./redux-store";

export const getIsAuthSelector = (state: AppStateType) => {
    return state.auth.isAuth
}

export const getLoginSelector = (state: AppStateType) => {
    return  state.auth.login
}

export const getAutorizedUserIdSelector = (state: AppStateType) => {
    return state.auth.userId
}
//
// export const getCurrentPage = (state: AppStateType) => {
//     return state.usersPage.currentPage
// }
//
// export const getIsFetching = (state: AppStateType) => {
//     return state.usersPage.isFetching
// }
//
// export const getFollowingInProgress = (state: AppStateType) => {
//     return state.usersPage.followingInProgress
// }


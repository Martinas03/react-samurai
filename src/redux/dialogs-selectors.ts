import {AppStateType} from "./redux-store";

export const getMessageSelector = (state: AppStateType) => {
    return state.messagesPage
}

// export const getStatusSelector = (state: AppStateType) => {
//     return state.profilePage.status
// }

// export const getPageSize = (state: AppStateType) => {
//     return state.usersPage.pageSize
// }
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


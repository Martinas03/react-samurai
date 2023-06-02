import {AppStateType} from "./redux-store";

export const getProfileSelector = (state: AppStateType) => {
    return state.profilePage.profile
}

export const getStatusSelector = (state: AppStateType) => {
    return state.profilePage.status
}

// export const getPhotosSelector = (state: AppStateType) => {
//     return state.profilePage.profile.photos
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


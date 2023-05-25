import {AppStateType} from "./redux-store";

export const getInitializedSelector = (state: AppStateType) => {
    return state.app.initialized
}




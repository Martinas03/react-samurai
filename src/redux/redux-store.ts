import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {sideBarReduse} from "./sideBar-reduse";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    siteBar: sideBarReduse
})

export type StoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer)

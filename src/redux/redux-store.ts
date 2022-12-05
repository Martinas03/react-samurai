import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {StoreType} from "./state";
import {sideBarReduse} from "./sideBar-reduse";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    siteBar: sideBarReduse
})

export let store: StoreType = createStore(reducers)
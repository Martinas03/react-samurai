import React from 'react';
// import state, {addMessage, addPost, StateType, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
export const rerenderTree = () => {
    root.render(
        <React.StrictMode>
        <Provider store={store}>
            <App
                store={store}
                 // addPost={store.addPost}
                 // addMessage={store.addMessage.bind(store)}
                 // updateNewPostText={store.updateNewPostText.bind(store)}
                 // updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
            </Provider>
        </React.StrictMode>
    );
}

rerenderTree()

store.subscribe(rerenderTree)

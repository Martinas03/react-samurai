import React from 'react';
import state, {addMessage, addPost, StateType, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
export const rerenderTree = () => {
    root.render(
        <React.StrictMode>
            <App state={store.getState()}
                 addPost={store.addPost}
                 addMessage={store.addMessage.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}
                 updateNewMessageText={store.updateNewMessageText.bind(store)}/>
        </React.StrictMode>
    );
}

rerenderTree()


store.subscribe(rerenderTree)

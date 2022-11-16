import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {StoreType} from "./redux/state";

export type AppPropsType = {
    store: StoreType
    // addPost: ()=> void
    // addMessage: (message: string)=> void
    // updateNewPostText: (text: string)=> void
    // updateNewMessageText:(text: string)=> void
}

const App = (props: AppPropsType) => {
    let state = props.store.getState()
    return (
        <BrowserRouter>
                <div className='app-wrapper'>
                    <Header/>
                    <Nav siteBarBlock={state.siteBar}/>
                    <div className='app-wrapper-content'>
                            <Route path={'/dialogs'} render={() => <Dialogs messagesPage={state.messagesPage} addMessage={props.store.addMessage.bind(props.store)} updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}/>}/>
                            <Route path={'/profile'} render={() => <Profile profilePage={state.profilePage} addPost={props.store.addPost.bind(props.store)} updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>}/>
                            <Route path={'/news'} render={() => <News/>}/>
                            <Route path={'/music'} render={() => <Music/>}/>
                            <Route path={'/settings'} render={() => <Settings/>}/>
                    </div>
                </div>
        </BrowserRouter>
    );
}

export default App;


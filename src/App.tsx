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
import {addMessage, StateType, updateNewMessageText,} from "./redux/state";

export type AppPropsType = {
    state: StateType
    addPost: ()=> void
    addMessage: (message: string)=> void
    updateNewPostText: (text: string)=> void
    updateNewMessageText:(text: string)=> void
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
                <div className='app-wrapper'>
                    <Header/>
                    <Nav siteBarBlock={props.state.siteBar}/>
                    <div className='app-wrapper-content'>
                            <Route path={'/dialogs'} render={() => <Dialogs messagesPage={props.state.messagesPage} addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText}/>}/>
                            <Route path={'/profile'} render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                            <Route path={'/news'} render={() => <News/>}/>
                            <Route path={'/music'} render={() => <Music/>}/>
                            <Route path={'/settings'} render={() => <Settings/>}/>
                    </div>
                </div>
        </BrowserRouter>
    );
}

export default App;


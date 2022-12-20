import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {store, StoreType} from "./redux/redux-store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


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
                            <Route path={'/dialogs'} render={() => <DialogsContainer />}/>
                            <Route path={'/profile'} render={() => <Profile />}/>
                            <Route path={'/news'} render={() => <News/>}/>
                            <Route path={'/music'} render={() => <Music/>}/>
                            <Route path={'/settings'} render={() => <Settings/>}/>
                    </div>
                </div>
        </BrowserRouter>
    );
}

export default App;


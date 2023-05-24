import React from "react";
import './App.css';
// import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
// import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {AppStateType, StoreType} from "./redux/redux-store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContiner from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {connect} from "react-redux";
import Login from "./Components/Login/Login";
// import {getAuth} from "./redux/auth-reducer";
// import {withRouter} from "react-router";
// import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
// import Preloader from "./Components/comon/preloader/Preloader";



export type AppPropsType = {
    store: StoreType
    // addPost: ()=> void
    // addMessage: (message: string)=> void
    // updateNewPostText: (text: string)=> void
    // updateNewMessageText:(text: string)=> void
}

class App extends React.Component<any> {
    componentDidMount(): void {
        this.props.initializeApp()
    }

    render() {
        // if(!this.props.initialized) {
        //     return <Preloader/>
        // }

        let state = this.props.store.getState()

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Nav siteBarBlock={state.siteBar}/>
                    <div className='app-wrapper-content'>
                        <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                        <Route path={'/profile/:userId?'} render={() => <ProfileContiner/>}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
let mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized,
})
// export default compose(
//     withRouter,
//     connect(null, {getAuth})
// ) (App)

// let withRouterForApp: any = withRouter(App)
export default connect(mapStateToProps, {initializeApp})(App);


import React, {lazy} from "react";
import './App.css';
import Nav from "./Components/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {AppStateType, StoreType} from "./redux/redux-store";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {connect} from "react-redux";
import Login from "./Components/Login/Login";
import {initializeApp} from "./redux/app-reducer";
import {getInitializedSelector} from "./redux/app-selectors";
import Preloader from "./Components/comon/preloader/Preloader";
import WithSuspense from "./Components/hoc/WithSuspense";
import {Switch, Redirect} from 'react-router-dom'

const ProfileContiner = lazy( () => import("./Components/Profile/ProfileContainer"));
const UsersContainer = lazy( () => import( "./Components/Users/UsersContainer"));
const DialogsContainer = lazy( () => import("./Components/Dialogs/DialogsContainer"));

export type AppPropsType = {
    store: StoreType
}

class App extends React.Component<any, any> {

    catchAllUnhandleErrors = (promiseRejectionEvent) => {
        alert('some error')
    }
    componentDidMount(): void {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors)
    }

    componentWillUnmount(): void {
        window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors)
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        let state = this.props.store.getState()

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Nav siteBarBlock={state.siteBar}/>
                    <div className='app-wrapper-content'>
                        <Switch>
                            {/*<Route path={'/'} render={() => <Redirect to={'/profile'}/> }/>*/}
                            <Route path={'/dialogs'} render={WithSuspense(DialogsContainer)}/>
                            <Route path={'/profile/:userId?'} render={WithSuspense(ProfileContiner)}/>
                            <Route path={'/users'} render={WithSuspense(UsersContainer)}/>
                            <Route path={'/news'} render={() => <News/>}/>
                            <Route path={'/music'} render={() => <Music/>}/>
                            <Route path={'/settings'} render={() => <Settings/>}/>
                            <Route path={'/login'} render={() => <Login/>}/>
                            <Route path={'*'} render={() => <div>404 NOT FOUND</div> }/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
let mapStateToProps = (state: AppStateType) => ({
    initialized: getInitializedSelector(state),
})
// export default compose(
//     withRouter,
//     connect(null, {getAuth})
// ) (App)

// let withRouterForApp: any = withRouter(App)

// const SamuraiApp = () => {
//     return (
//             <BrowserRouter>
//                 <Provider store={store}>
//                     <App/>
//                 </Provider>
//             </BrowserRouter>
//         )
// }

export default connect(mapStateToProps, {initializeApp})(App);


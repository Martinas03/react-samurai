import React from "react";
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {getAuth, getLogout, setUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {getIsAuthSelector, getLoginSelector} from "../../redux/auth-selectors";


class HeaderContainer extends React.Component<any> {

    componentDidMount(): void {
        this.props.getAuth()
    }


    render(): React.ReactNode {
        if (!this.props.isAuth) {
            console.log('You are not autorised')
        }
        return (
            <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login} logout={this.props.getLogout}/>
        )
    }

}


let mapStateToProps = (state: AppStateType) => ({
    isAuth: getIsAuthSelector(state),
    login: getLoginSelector(state)
})

export default connect(mapStateToProps, {setUserData, getAuth, getLogout}) (HeaderContainer)
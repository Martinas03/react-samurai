import React from "react";
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {setUserData} from "../../redux/auth-reducer";
import {connect, useSelector} from "react-redux";
import {authAPI} from "../../api/api";


class HeaderContainer extends React.Component<any> {

    componentDidMount(): void {
        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setUserData(id, login, email)

                }
            })
    }


    render(): React.ReactNode {
        if (!this.props.isAuth) {
            console.log('You are not autorised')
        }
        return (
            <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }

}


let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setUserData}) (HeaderContainer)
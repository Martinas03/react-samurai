import React from "react";
import Header from "./Header";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {setUserData} from "../../redux/auth-reducer";
import {connect, useSelector} from "react-redux";


class HeaderContainer extends React.Component<any> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true

        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setUserData(id, login, email)

                }
            })
    }


    render(): React.ReactNode {
        // console.log(this.props.isAuth)
        // console.log(this.props.login)
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
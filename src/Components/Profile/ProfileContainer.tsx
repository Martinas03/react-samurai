import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from 'react-router'
import {Redirect} from 'react-router-dom'
import WithAuthRedirect from "../hoc/WithAuthRedirect";


class ProfileContiner extends React.Component<any> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getProfile(userId)
    }

    render(): React.ReactNode {
        if(!this.props.isAuth) return <Redirect to={'login'}/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}
let AuthRedirectComponent: any = WithAuthRedirect(ProfileContiner)

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    // isAuth: state.auth.isAuth
})




let withRouterDataUrl: any = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getProfile})(withRouterDataUrl)


import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, updateStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from 'react-router'
import {Redirect} from 'react-router-dom'
import WithAuthRedirect from "../hoc/WithAuthRedirect";
import {getProfileSelector, getStatusSelector} from "../../redux/profile-selectors";
import {getAutorizedUserIdSelector, getIsAuthSelector} from "../../redux/auth-selectors";

// import {compose} from "redux";


class ProfileContiner extends React.Component<any, any> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.autorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount(): void {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>, snapshot?: any): void {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
            // this.props.savePhoto(this.props.photos)
        }
    }

    render(): React.ReactNode {
        if (!this.props.isAuth) return <Redirect to={'login'}/>
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}
            />
        )
    }
}
let mapStateToProps = (state: AppStateType) => ({
    profile: getProfileSelector(state),
    status: getStatusSelector(state),
    isAuth: getIsAuthSelector(state),
    autorizedUserId: getAutorizedUserIdSelector(state),
})
// export default compose(
//     connect(mapStateToProps, {getProfile}),
//     withRouter,
//     WithAuthRedirect
// ) (ProfileContiner)

let AuthRedirectComponent: any = WithAuthRedirect(ProfileContiner)

let withRouterDataUrl: any = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto})(withRouterDataUrl)


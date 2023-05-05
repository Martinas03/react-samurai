import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {ProfilePageType, StateType} from "../../redux/state";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from 'react-router'
import {profileAPI} from "../../api/api";

// type ProfilePropsType = {
//     store: StoreType
//     // addPost: ()=> void
//     // updateNewPostText: (text: string)=> void
// }

class ProfileContiner extends React.Component<any> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render(): React.ReactNode {
        return (
           <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

let withRouterDataUrl = withRouter(ProfileContiner)

export default connect(mapStateToProps, {setUserProfile}) (withRouterDataUrl)


import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {ProfilePageType, StateType} from "../../redux/state";
import {AppStateType} from "../../redux/redux-store";

// type ProfilePropsType = {
//     store: StoreType
//     // addPost: ()=> void
//     // updateNewPostText: (text: string)=> void
// }

class ProfileContiner extends React.Component<any> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
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

export default connect(mapStateToProps, {setUserProfile}) (ProfileContiner)


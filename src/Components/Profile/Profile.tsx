import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: any)=>void
    // addPost: ()=> void
    // updateNewPostText: (text: string)=> void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.profile}>

            <ProfileInfo />
            <MyPosts profilePage={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile


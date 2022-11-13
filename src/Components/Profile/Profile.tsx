import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: ()=> void
    updateNewPostText: (text: string)=> void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.profile}>

            <ProfileInfo />
            <MyPosts profilePage={props.profilePage.posts} addPost={props.addPost} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}
export default Profile


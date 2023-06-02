import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profile: any
    status: string
    updateStatus: any
    isOwner: boolean
    savePhoto: any
}


const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} savePhoto={props.savePhoto}/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile


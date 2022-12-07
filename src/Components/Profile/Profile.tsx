import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/redux-store";

// type ProfilePropsType = {
//     store: StoreType
//     // addPost: ()=> void
//     // updateNewPostText: (text: string)=> void
// }

const Profile = () => {

    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPostsContainer/>
        </div>
    )
}
export default Profile


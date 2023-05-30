import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../comon/preloader/Preloader";
import user from './../../../Assets/images/user.png'
import {ProfileStatusFC} from "./ProfileStatusFC";

// type ProfileInfoPropsType = {
//     profile: any
//     status: string
//     updateStatus: any
// }

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
                <div className={s.ava}>
                <h3>{profile.fullName}</h3>

                <img src={profile.photos.small ?  profile.photos.small : user} alt="" className={s.userAva}/>
                <ProfileStatusFC status={status} updateStatus={updateStatus}/>

                <div>
                    <h4>About me: {profile.aboutMe}</h4>
                    <h4>Contacts</h4>
                    <p>facebook: <a href={profile.contacts.facebook}>{profile.contacts.facebook}</a></p>
                    <p>vk: <a href={profile.contacts.vk}>{profile.contacts.vk}</a></p>
                    <p>twitter: <a href={profile.contacts.twitter}>{profile.contacts.twitter}</a></p>
                    <p>instagram: <a href={profile.contacts.instagram}>{profile.contacts.instagram}</a></p>
                </div>
                <div className={s.job}>
                    <h4>looking for a job:</h4>
                    {profile.contacts.lookingForAJob ?
                    <img className={s.profileImg}
                         src={'https://freepngimg.com/thumb/green_tick/27890-7-green-tick-picture.png'} alt={''}/>
                    : <img className={s.profileImg}
                           src='https://freepngimg.com/thumb/red_cross/28028-5-red-cross-clipart.png' alt=""/>}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
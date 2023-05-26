import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../comon/preloader/Preloader";
import user from './../../../Assets/images/user.png'
import {ProfileStatusFC} from "./ProfileStatusFC";

type ProfileInfoPropsType = {
    profile: any
    status: string
    updateStatus: any
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profileInfo}>
            {/*<div>*/}
            {/*    <img className={s.img}*/}
            {/*         src='https://avatars.mds.yandex.net/i?id=b6d509c16aa7ec3b9c5281d960c5bfef-5258986-images-thumbs&n=13'/>*/}
            {/*</div>*/}

            <div className={s.ava}>
                <h3>{props.profile.fullName}</h3>

                <img src={props.profile.photos.small ?  props.profile.photos.small : user} alt="" className={s.userAva}/>
                <ProfileStatusFC status={props.status} updateStatus={props.updateStatus}/>

                <div>
                    <h4>About me: {props.profile.aboutMe}</h4>
                    <h4>Contacts</h4>
                    <p>facebook: <a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a></p>
                    <p>vk: <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></p>
                    <p>twitter: <a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a></p>
                    <p>instagram: <a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a></p>
                </div>
                <div>
                    <h4>looking for a job:</h4>
                    {props.profile.contacts.lookingForAJob ?
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
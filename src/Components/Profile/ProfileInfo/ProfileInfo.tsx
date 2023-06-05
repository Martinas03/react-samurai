import React, {useState} from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../comon/preloader/Preloader";
import user from './../../../Assets/images/user.png'
import {ProfileStatusFC} from "./ProfileStatusFC";
import ProfileDataForm from "../ProfileDataForm";

// type ProfileInfoPropsType = {
//     profile: any
//     status: string
//     updateStatus: any
// }

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }
    const onSavePhoto = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: any) => {
        saveProfile(formData)
            .then(()=> {
                setEditMode(false)
            })

        // props.getLogin(formData.email, formData.password, formData.rememberMe)
    }
    return (
        <div>
            <div className={s.ava}>
                <h3>{profile.fullName}</h3>

                <img src={profile.photos.small ? profile.photos.small : user} alt="" className={s.userAva}/>
                {isOwner && <input type={'file'} onChange={onSavePhoto}/>}
                <ProfileStatusFC status={status} updateStatus={updateStatus}/>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditeMode={() => setEditMode(true)} profile={profile} isOwner={isOwner}/>  }

            </div>
        </div>
    )
}

export const Contacts = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>:
       <a href={`http://${contactTitle}.com`}>{contactValue || `http://${contactTitle}.com`}</a>
            </div>
}

const ProfileData = ({profile, isOwner, goToEditeMode}) => {
    return <div>
        {isOwner && <button onClick={goToEditeMode}>Edit</button>}
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>

        <div className={s.job}>
            <b>Looking for a job:</b>
            {profile.lookingForAJob ?
                <img className={s.profileImg}
                     src={'https://freepngimg.com/thumb/green_tick/27890-7-green-tick-picture.png'}
                     alt={''}/>
                : <img className={s.profileImg}
                       src='https://freepngimg.com/thumb/red_cross/28028-5-red-cross-clipart.png' alt=""/>}
        </div>
        <div>
            <b>Name</b>: {profile.fullName}
        </div>
        <div>
            <b>Professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}

// export const ProfileDataForm = ({profile}) => {
//     return <div>
//        Form
//     </div>
// }

export default ProfileInfo
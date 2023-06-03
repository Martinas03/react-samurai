import React from 'react';
import s from "./ProfileInfo/ProfileInfo.module.css";
import {Contacts} from "./ProfileInfo/ProfileInfo";
import {createdField, Input, Textarea} from "../comon/FormControls/FormControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit ,profile}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {<button>Save</button>}
                <div>
                    <b>About me</b>:
                    {createdField('aboutMe', Textarea, [], 'About me')}
                </div>

                <div className={s.job}>
                    <b>Looking for a job:</b>: {createdField('lookingForAJob', Input, [], '', {type: 'checkbox'})}
                </div>
                <div>
                    <b>Name</b>: {createdField('fullName', Input, [], 'My name')}
                </div>
                <div>
                    <b>Professional skills</b>:  {createdField('lookingForAJobDescription', Textarea, [], 'My professional skills')}
                </div>
                {/*<div>*/}
                {/*    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {*/}
                {/*    return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
                {/*})}*/}
                {/*</div>*/}
            </form>
        </div>
    );
};

const ProfileReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileReduxForm;
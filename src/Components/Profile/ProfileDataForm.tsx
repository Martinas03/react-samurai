import React from 'react';
import {createdField, Input, Textarea} from "../comon/FormControls/FormControls";
import {reduxForm} from "redux-form";
import s from './ProfileInfo/ProfileInfo.module.css'

const ProfileDataForm = ({handleSubmit ,profile, error}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {<button>Save</button>}
                {error && <div className={s.formSummaryError}>
                    {error}
                </div>}
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
                <div>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contact}><b>{key}:</b>{createdField('contacts.' + key, Input, [], key)}</div>
                })}
                </div>
            </form>
        </div>
    );
};

const ProfileReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileReduxForm;
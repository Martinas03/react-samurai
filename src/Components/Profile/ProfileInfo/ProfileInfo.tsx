import React from "react";
import s from './ProfileInfo.module.css'



const ProfileInfo = () => {

    return (
        <div className={s.profileInfo}>
            <div>
                <img className={s.img}
                     src='https://avatars.mds.yandex.net/i?id=b6d509c16aa7ec3b9c5281d960c5bfef-5258986-images-thumbs&n=13'/>
            </div>

            <div className={s.ava}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo
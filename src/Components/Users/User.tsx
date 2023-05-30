import React from 'react';
import {NavLink} from "react-router-dom";
import s from './User.module.css'
import userAvartar from './../../Assets/images/user.png'

const User = ({user, followingInProgress, unfollow, follow, ...props}) => {

    return (
        <div>
                    <span>
                        <div>
                            <NavLink to={'profile/' + user.id}>
                            <img className={s.img} src={user.photos.small != null ? user.photos.small : userAvartar}
                                 alt={'avatar'}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.isFollow
                                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    unfollow(user.id)

                                }}>unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    follow(user.id)

                                }}>follow</button>}
                        </div>
                    </span>
            <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
            <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
        </div>
    );
};

export default User;

import React from 'react';
import s from "./UsersFC.module.css";
import userAvartar from "../../Assets/images/user.png";
import {UsersType} from "../../redux/users-reducer";

type UsersFCType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UsersType[]
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
}

export const UsersFC = (props: UsersFCType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div>
        <div className={s.numbers}>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}

        </div>
        {props.users.map((u: any) => {
            return <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.img} src={u.photos.small != null ? u.photos.small : userAvartar}/>
                        </div>
                        <div>
                            {u.isFollow
                                ? <button onClick={() => {
                                    props.unFollow(u.id)
                                }}>unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>follow</button>}
                        </div>
                    </span>
                <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
            </div>
        })}

    </div>

};


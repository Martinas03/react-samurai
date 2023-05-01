import React, {useState} from 'react';
import s from "./UsersFC.module.css";
import userAvartar from "../../Assets/images/user.png";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

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

    let [index, setIndex] = useState(1)
    let diapason = 10

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div>
        <div className={s.numbers}>
            <button onClick={() => setIndex(1)}>to begin</button>
            <button disabled={index === 1} onClick={() => setIndex(index - diapason)}>back</button>
            {pages.map((p, i) => {
                let iPlusOne = i + 1
                if (iPlusOne >= index && iPlusOne < (index + diapason)) {
                    return <span key={i} className={props.currentPage === p ? s.selectedPage : ''}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                } else {
                    return <>
                    </>
                }

            })}

            <button disabled={index + diapason >= pageCount} onClick={() => setIndex(index + diapason)}>next</button>
            <button onClick={() => setIndex(Math.floor(pageCount / diapason) * diapason + 1)}>to end</button>
        </div>
        {props.users.map((u: any) => {
            return <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'profile/' + u.id}>
                            <img className={s.img} src={u.photos.small != null ? u.photos.small : userAvartar}/>
                            </NavLink>
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


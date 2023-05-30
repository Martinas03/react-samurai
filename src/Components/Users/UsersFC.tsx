import React from 'react';
import {UsersType} from "../../redux/users-reducer";
import Paginator from "../comon/Paginater/Paginator";
import User from "./User";

type UsersFCType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UsersType[]
    follow: any
    unfollow: any
    followingInProgress: Array<number>
}

export const UsersFC = (props: UsersFCType) => {
    return <div>
        <Paginator currentPage={props.currentPage} pageSize={props.pageSize} totalUsersCount={props.totalUsersCount} onPageChanged={props.onPageChanged}/>
        {props.users.map((u: any) => {
            return <User key={u.id} user={u} follow={props.follow} unfollow={props.unfollow} followingInProgress={props.followingInProgress}/>
        })}
    </div>

};


import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, getUsers,
    setCurrentPage,
    toggleFolowingProgress,
    unFollow,
    UsersType
} from "../../redux/users-reducer";
import React from "react";
import {UsersFC} from "./UsersFC";
import Preloader from "../comon/preloader/Preloader";


export type MapsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    users: UsersType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFolowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: any
}

class UsersApiComponent extends React.Component<any> {

    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render(): React.ReactNode {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersFC currentPage={this.props.currentPage}
                     pageSize={this.props.pageSize}
                     totalUsersCount={this.props.totalUsersCount}
                     onPageChanged={this.onPageChanged}
                     users={this.props.users}
                     follow={this.props.follow}
                     unFollow={this.props.unFollow}
                     toggleFolowingProgress={this.props.toggleFolowingProgress}
                     followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    toggleFolowingProgress,
    getUsers
})(UsersApiComponent);
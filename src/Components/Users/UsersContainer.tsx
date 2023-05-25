import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    requestUsers,
    setCurrentPage,
    toggleFolowingProgress, unfollow,
    UsersType
} from "../../redux/users-reducer";
import React from "react";
import {UsersFC} from "./UsersFC";
import Preloader from "../comon/preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


// export type MapsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    users: UsersType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

// type MapDispatchPropsType = {
//     setUsers: (users: UsersType[]) => void
//     setCurrentPage: (currentPage: number) => void
//     setTotalUsersCount: (totalCount: number) => void
//     toggleIsFetching: (isFetching: boolean) => void
//     toggleFolowingProgress: (isFetching: boolean, userId: number) => void
//     getUsers: (currentPage: number, pageSize: number)=> (dispatch: Dispatch) => void
//     follow: (userId: number)=> (dispatch: Dispatch) => void
//     unfollow:  (userId: number)=> (dispatch: Dispatch) => void
// }

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
                     unfollow={this.props.unfollow}
                     followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

// compose(
//     connect(mapStateToProps, {
//         setCurrentPage,
//         toggleFolowingProgress,
//         getUsers,
//         follow,
//         unfollow
//     }),
//     WithAuthRedirect,
// ) (UsersApiComponent)
//
// let AuthRedirectComponent: any = WithAuthRedirect(UsersApiComponent)


export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        toggleFolowingProgress,
        getUsers: requestUsers,
        follow,
        unfollow
    }),
    // WithAuthRedirect,
) (UsersApiComponent)
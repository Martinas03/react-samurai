import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersType
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import {UsersFC} from "./UsersFC";
import s from "./UsersFC.module.css";
import userAvartar from "../../Assets/images/user.png";


export type MapsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    users: UsersType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

type MapDispatchPropsType = {
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

class UsersApiComponent extends React.Component<any> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render(): React.ReactNode {
        let pageCount = Math.ceil(this.props.totalUsersCount /this.props.pageSize)

        let pages = []

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return <div>
            <div className={s.numbers}>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? s.selectedPage : ''}
                                 onClick={() => {
                                     this.onPageChanged(p)
                                 }}>{p}</span>
                })}

            </div>
            {this.props.users.map((u: any) => {
                return <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.img} src={u.photos.small != null ? u.photos.small : userAvartar}/>
                        </div>
                        <div>
                            {u.isFollow
                                ? <button onClick={() => {
                                    this.props.unFollow(u.id)
                                }}>unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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


        // return <UsersFC currentPage={this.props.currentPage}
        //                 pageSize={this.props.pageSize}
        //                 totalUsersCount={this.props.currentPage}
        //                 onPageChanged={this.onPageChanged}
        //                 users={this.props.users}
        //                 follow={this.props.follow}
        //                 unFollow={this.props.unFollow}
        // />


    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (usersId: number) => {
            dispatch(followAC(usersId))
        },
        unFollow: (usersId: number) => {
            dispatch(unFollowAC(usersId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);
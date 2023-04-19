import React from 'react';
import s from "./Users.module.css";
import userAvartar from "../../Assets/images/user.png";
import axios from "axios";


class Users extends React.Component<any> {
    // constructor(props: any) {
    //     super(props);
    //
    //
    // }

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         debugger
    //
    //     }
    // }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render(): React.ReactNode {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

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
    }
}

export default Users

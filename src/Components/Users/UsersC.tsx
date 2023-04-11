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
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         debugger
    //
    //     }
    // }
    render(): React.ReactNode {
        return<div>
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

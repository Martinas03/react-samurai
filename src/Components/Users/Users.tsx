import React from 'react';
// import {MapsPropsType} from "./UsersContainer";
// import s from './UsersFC.module.css'
// import axios from "axios";
// import userAvartar from '../../Assets/images/user.png'
//
// export const Users = (props: MapsPropsType) => {
//     const getUsers = () => {
//         if (props.users.length === 0) {
//             debugger
//             axios.get('https://social-network.samuraijs.com/api/1.0/users')
//                 .then(response => {
//                     props.setUsers(response.data.items)
//                 })
//         }
//     }
//
//     // props.setUsers(
//     //     [
//     //         {
//     //             id: 1,
//     //             avatar: 'https://img.freepik.com/premium-vector/cat-vector-kitten-calico-cartoon-character_71328-128.jpg?w=2000',
//     //             isFollow: true,
//     //             fullName: "Polina",
//     //             status: 'I am cool',
//     //             location: {country: 'Russia', city: 'Moscow'}
//     //         },
//     //         {
//     //             id: 2,
//     //             avatar: 'https://www.shutterstock.com/image-vector/black-cat-sitting-smiling-logo-260nw-712292767.jpg',
//     //             isFollow: false,
//     //             fullName: "Vitaly",
//     //             status: 'I am cool too',
//     //             location: {country: 'Belarus', city: 'Minsk'}
//     //         },
//     //         {
//     //             id: 3,
//     //             avatar: 'https://static.vecteezy.com/system/resources/previews/006/018/558/original/black-cat-logo-simple-line-illustration-design-free-vector.jpg',
//     //             isFollow: true,
//     //             fullName: "Vladimir",
//     //             status: 'I am cool too',
//     //             location: {country: 'Ukraine', city: 'Kiev'}
//     //         },
//     //     ]
//     // )
//
//     return (
//         <div>
//             <button onClick={getUsers}>Get Users</button>
//             {props.users.map(u => {
//                 return <div key={u.id}>
//                     <span>
//                         <div>
//                             <img className={s.img} src={u.photos.small != null ? u.photos.small : userAvartar}/>
//                         </div>
//                         <div>
//                             {u.isFollow
//                                 ? <button onClick={() => {
//                                     props.unFollow(u.id)
//                                 }}>unfollow</button>
//                                 : <button onClick={() => {
//                                     props.follow(u.id)
//                                 }}>follow</button>}
//                         </div>
//                     </span>
//                     <span>
//                         <div>{u.name}</div>
//                         <div>{u.status}</div>
//                     </span>
//                     <span>
//                         <div>{'u.location.country'}</div>
//                         <div>{'u.location.city'}</div>
//                     </span>
//                 </div>
//             })}
//
//         </div>
//     );
// };
//

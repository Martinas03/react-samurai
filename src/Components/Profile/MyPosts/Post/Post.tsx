import React from "react";
import s from './Post.module.css'
import {PostsType} from "../../../../redux/state";

const Post = (props: PostsType) => {

    return (
        <div className={s.item}>

            <img src='https://s2.afisha.ru/mediastorage/f8/40/44c361537e354921a5a5266240f8.jpg'/>
            {props.message}
            <div className={s.likes}>
               <button>
                   {props.likeCount} likes
               </button>
            </div>
        </div>
    )
}

export default Post
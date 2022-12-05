import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionType, updateNewPostTextActionType} from "../../../redux/profile-reducer";
import {ActionTypes, PostsType } from "../../../redux/state";



type PostsPropsType = {
    profilePage: PostsType[]
    newPostText: string
    dispatch: (action: ActionTypes) => void
}



const MyPosts = (props: PostsPropsType) => {


    let postElement = props.profilePage.map(p => <Post message={p.message} likeCount={p.likeCount} id={p.id}/>)

    const message = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch(addPostActionType())
        props.dispatch(updateNewPostTextActionType(''))
        // props.addPost()
        // props.updateNewPostText('')
    }

    const onChangeHandler = () => {
        // let text = message.current.value
        if (message.current)
            props.dispatch(updateNewPostTextActionType(message.current.value))
        // props.updateNewPostText(message.current.value)
        console.log(message.current)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={message}
                              value={props.newPostText}
                              onChange={onChangeHandler}
                    />
                </div>

                <div>
                    <button onClick={addPost}>Add new post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
                {/*<Post message={posts[0].message} likeCounts={posts[0].likeCount}/>*/}
                {/*<Post message={posts[1].message} likeCounts={posts[1].likeCount}/>*/}
            </div>
        </div>
    )
}

export default MyPosts
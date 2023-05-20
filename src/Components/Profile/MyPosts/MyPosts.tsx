import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { PostsType} from "../../../redux/state";
import {Field, reduxForm} from "redux-form";


const myPostsForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="post"
                   component="textarea"
                   type="text"
                   placeholder={'post'}
            />
        </div>

        <div>
            <button>Add new post</button>
        </div>
    </form>
}

const MyPostsReduxForm = reduxForm({form: 'addPostsForm'})(myPostsForm)

type PostsPropsType = {
    posts: PostsType[]
    addPost: (post: string) => void
}


const MyPosts = (props: PostsPropsType) => {

    const onSubmit = (value: any) => {
        console.log(value.post)
        props.addPost(value.post)
    }

    let postElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} id={p.id}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <MyPostsReduxForm onSubmit={onSubmit}/>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts
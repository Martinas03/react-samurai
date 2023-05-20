import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionTypes, PostsType} from "../../../redux/state";
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
    addPost: () => void
    newPostText: string
    updateNewPostText: (text: string) => void
}


const MyPosts = (props: PostsPropsType) => {

    const onSubmit = (value: any) => {
        console.log(value.post)
    }

    let postElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} id={p.id}/>)

    // const message = React.createRef<HTMLTextAreaElement>()

    // const addPost = () => {
    //     props.addPost()
    //     // props.updateNewPostText('')
    // }
    //
    // const onChangeHandler = () => {
    //     // let text = message.current.value
    //     if (message.current)
    //         // props.dispatch(updateNewPostTextActionType(message.current.value))
    //         props.updateNewPostText(message.current.value)
    // }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <MyPostsReduxForm onSubmit={onSubmit}/>
                {/*<div>*/}
                {/*    <textarea ref={message}*/}
                {/*              value={props.newPostText}*/}
                {/*              onChange={onChangeHandler}*/}
                {/*    />*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*    <button onClick={addPost}>Add new post</button>*/}
                {/*</div>*/}

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
import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionType, updateNewPostTextActionType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";



type PostsPropsType = {
   store: StoreType
}



const MyPostsContainer = (props: PostsPropsType) => {


    // let postElement = props.store.getState().profilePage.posts.map(p => <Post message={p.message} likeCount={p.likeCount} id={p.id}/>)


    const addPost = () => {
        props.store.dispatch(addPostActionType())
        props.store.dispatch(updateNewPostTextActionType(''))
        // props.addPost()
        // props.updateNewPostText('')
    }

    const onChangeHandler = (text: string) => {
        // let text = message.current.value
            props.store.dispatch(updateNewPostTextActionType(text))
        // props.updateNewPostText(message.current.value)
    }

    return (
        <div className={s.postsBlock}>
            <MyPosts newPostText={props.store.getState().profilePage.newPostText} updateNewPostText={onChangeHandler} addPost={addPost} posts={props.store.getState().profilePage.posts}/>
            {/*<h3>My posts</h3>*/}
            {/*<div>*/}
            {/*    <div>*/}
            {/*        <textarea ref={message}*/}
            {/*                  value={props.newPostText}*/}
            {/*                  onChange={onChangeHandler}*/}
            {/*        />*/}
            {/*    </div>*/}

            {/*    <div>*/}
            {/*        <button onClick={addPost}>Add new post</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={s.posts}>*/}
            {/*    {postElement}*/}
            {/*    /!*<Post message={posts[0].message} likeCounts={posts[0].likeCount}/>*!/*/}
            {/*    /!*<Post message={posts[1].message} likeCounts={posts[1].likeCount}/>*!/*/}
            {/*</div>*/}
        </div>
    )
}

export default MyPostsContainer
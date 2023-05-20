// import React from "react";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {PostsType} from "../../../redux/state";
import {Dispatch} from "redux";


export type MapsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    posts: PostsType[]
}

type MapDispatchPropsType = {
    addPost: (post: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (post: string) => dispatch(addPostActionCreator(post)),
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


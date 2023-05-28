
import {addPostActionCreator, deletPostActionCreator, PostsType, profileReducer} from "./profile-reducer";
let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 5},
        {id: 2, message: "It's my first post", likeCount: 55},
        {id: 3, message: "Hehehey", likeCount: 550},
    ] as Array<PostsType>,
    profile: null,
    status: ''
}
test('length of post should be incremented', (): any => {
    let action = addPostActionCreator('It-kamasutra')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
})

test('text of post should be correct', (): any => {
    let action = addPostActionCreator('It-kamasutra')
    let newState = profileReducer(state, action)
    expect(newState.posts[3].message).toBe('It-kamasutra')
})

test('correct post should be deleted', (): any => {
    let action = deletPostActionCreator(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
})






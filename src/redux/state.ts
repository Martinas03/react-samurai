let _rerenderTree = () => {
    console.log('State changed')
}

export type StoreType = {
    _state: StateType
    rerenderTree: ()=> void
    getState: ()=> StateType
    addPost: ()=> void
    addMessage: (message: string)=> void
    updateNewPostText: (newText: string)=> void
    updateNewMessageText: (text: string)=> void
    subscribe: (observer: ()=> void)=> void
}

export type StateType = {
    messagesPage: MessagePageType
    profilePage: ProfilePageType
    siteBar: SiteBarType
}

export type MessagePageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

export type DialogsType = {
    id: number
    name: string
    avatar: string
}

export type MessagesType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export type PostsType = {
    id: number
    message: string
    likeCount: number
}

export type SiteBarType = {
    title: string
    friends: FriendsType[]
}

export type FriendsType = {
    id: number
    name: string
    avatar: string
}

let store: StoreType = {
    rerenderTree () {
        console.log('State changed')
    },
    _state: {
        messagesPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Dimych',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVTxYJh0__zgheEYKs-48k-1ENhdE3iDbH2g&usqp=CAU'
                },
                {
                    id: 2,
                    name: 'Arlan',
                    avatar: "https://cdn3.vectorstock.com/i/1000x1000/15/32/isolated-cute-cat-avatar-vector-21041532.jpg"
                },
                {id: 3, name: 'Abzal', avatar: 'https://avatarfiles.alphacoders.com/798/79894.jpg'},
                {
                    id: 4,
                    name: 'Ainyr',
                    avatar: 'https://img.freepik.com/premium-vector/cute-orange-robot-cat-avatar_79416-86.jpg?w=2000'
                },
                {
                    id: 5,
                    name: 'Polina',
                    avatar: 'https://cdn3.vectorstock.com/i/1000x1000/15/37/isolated-cute-cat-avatar-vector-21041537.jpg'
                },
                {
                    id: 6,
                    name: 'Alexey',
                    avatar: 'https://as2.ftcdn.net/v2/jpg/02/07/81/65/1000_F_207816574_hQqoQk0p8n2xxHtScE7sYDBFihQ7yFgV.jpg'
                },
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are your it?'},
                {id: 3, message: 'See you later'}
            ],
            newMessageText: 'New message'
        },
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likeCount: 5},
                {id: 2, message: "It's my first post", likeCount: 55},
                {id: 3, message: "Hehehey", likeCount: 550},
            ],
            newPostText: 'It-kamasutra'
        },
        siteBar: {
            title: 'Friends',
            friends: [
                {
                    id: 1,
                    name: 'Dimych',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVTxYJh0__zgheEYKs-48k-1ENhdE3iDbH2g&usqp=CAU'
                },
                {
                    id: 4,
                    name: 'Ainyr',
                    avatar: 'https://img.freepik.com/premium-vector/cute-orange-robot-cat-avatar_79416-86.jpg?w=2000'
                },
                {
                    id: 5,
                    name: 'Polina',
                    avatar: 'https://cdn3.vectorstock.com/i/1000x1000/15/37/isolated-cute-cat-avatar-vector-21041537.jpg'
                },
            ]
        }
    },
    getState() {
        return this._state;
    },
    addPost  () {
        let newPoost: PostsType = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }
        this._state.profilePage.posts.push(newPoost)
        this.rerenderTree()
    },

    addMessage  (message: string)  {
        let newMessage: MessagesType = {
            id: 4,
            message: message
        }
        this._state.messagesPage.messages.unshift(newMessage)
        this._state.profilePage.newPostText = ''
        this.rerenderTree()
    },

    updateNewPostText  (newText: string)  {
        this._state.profilePage.newPostText = newText
        this.rerenderTree()
    },

    updateNewMessageText (text: string) {
        this._state.messagesPage.newMessageText = text
        this.rerenderTree()
    },

    subscribe (observer: () => void) {
        this.rerenderTree = observer
    }
}

export default store

import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "545f0941-50bb-4eed-89ba-102ecd1c4cc4"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            })
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
            .then(res => {
                return res.data
            })
    },
    getStatus(userId: number) {
        return instance.get('profile/status/' + userId)
            // .then(res => {
            //     return res.data
            // })
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status})
            .then(res => {
                return res.data
            })
    },
    updatePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                return res.data
            })
    }
}

export const followAPI = {
    getUnfollow(userId: number) {
       return  instance.delete(`follow/` + userId)
           .then(res => {
               return res.data
           })
    },
    getFollow(userId: number) {
       return  instance.post(`follow/` + userId, {})
           .then(res => {
               return res.data
           })
    },
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me/`)
            .then(res => {
                return res.data
            })
    },
    getLogin(email: string, password: string, rememberMe = false) {
        return instance.post(`auth/login/`, {email, password, rememberMe})
            // .then(res => {
            //     return res.data
            // })
    },
    getLogout() {
        return instance.delete(`auth/login/`)
            .then(res => {
                return res.data
            })
    }

}

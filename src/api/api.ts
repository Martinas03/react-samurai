import React from "react";
import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "545f0941-50bb-4eed-89ba-102ecd1c4cc4"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
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
    }
}

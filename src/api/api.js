import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '528a2ffc-274d-4846-a56e-98617a2f1e3e',
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(pageSize = 10, currentPage = 1){
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
    },
    onCurrentPage(pageSize = 10, page = 10) {
        return instance.get(`users?count=${pageSize}&page=${page}`)
    },
    follow(userid) {
        return instance.post(`follow/${userid}`, null)
    },
    unfollow(userid) {
        return instance.delete(`follow/${userid}`)
    }
}

export const profileAPI = {
    setProfile(userID) {
        return instance.get(`profile/${userID}`)
    },
    getStatus(userID) {
        return instance.get(`profile/status/${userID}`)
    },
    setStatus(status) {
        return instance.put(`profile/status`, {
            status
        })
    }
}

export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}
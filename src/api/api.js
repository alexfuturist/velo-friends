import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "18021664-8191-4731-8d37-bfc58504d56d"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
        )
    },
    unfollow(id) {
        return (
            instance.delete(`follow/${id}`)
        )
    },
    follow(id) {
        return (
            instance.post(`follow/${id}`)
        )
    }
};


export const profileAPI = {
    getProfile (userId) {
        return (
            instance.get(`profile/${userId}`)
        )
    }
};


export const headerAPI = {
    auth () {
        return (
            instance.get(`auth/me`)
        )
    }
};




// const getUsers = (currentPage=1, pageSize=10) => {
//     return (
//         instance.get(`users?page=${currentPage}&count=${pageSize}`)
//         .then(response => {
//             return response.data
//         })
//     )
// };


// export const getUsers = (currentPage=1, pageSize=10) => {
//     return (
//         axios
//         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
//             withCredentials: true
//         })
//         .then(response => {
//             return response.data
//         })
//     )
// };
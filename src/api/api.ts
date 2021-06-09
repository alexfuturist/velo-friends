import axios from 'axios'
import { PhotosType, ProfileInfoType, UserType } from '../types/types'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '18021664-8191-4731-8d37-bfc58504d56d',
    },
})

export enum ResultCodes {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10,
}

//AUTH
type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        id: number
    }
    resultCode: number
    messages: Array<string>
}

type LogoutResponseType = {
    data: {}
    resultCode: number
    messages: Array<string>
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`).then((res) => res.data)
    },
    login(
        email: string,
        password: string,
        rememberMe: boolean,
        captcha = null
    ) {
        return instance
            .post<LoginResponseType>(`auth/login`, {
                email,
                password,
                rememberMe,
                captcha,
            })
            .then((res) => res.data)
    },
    logout() {
        return instance
            .delete<LogoutResponseType>(`auth/login`)
            .then((res) => res.data)
    },
}

//SECURITY
type GetCaptchaUrl = {
    url: string
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance
            .get<GetCaptchaUrl>(`security/get-captcha-url`)
            .then((res) => res.data)
    },
}

//PROFILE
type GetProfileResponseType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    photos: PhotosType
}

type UpdateStatusResponseType = {
    data: {}
    resultCode: number
    messages: Array<string>
}

type UpdatePhotoResponseType = {
    data: {
        photos: PhotosType
    }
    resultCode: number
    messages: Array<string>
}

type SaveProfileResponseType = {
    data: {}
    resultCode: number
    messages: Array<string>
}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance
            .get<GetProfileResponseType>(`profile/${userId}`)
            .then((res) => res.data)
    },
    getStatus(userId: number) {
        return instance
            .get<string>(`profile/status/${userId}`)
            .then((res) => res.data)
    },
    updateStatus(status: string) {
        return instance
            .put<UpdateStatusResponseType>(`profile/status`, {
                status: status,
            })
            .then((res) => res.data)
    },
    updatePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append('image', photoFile)

        return instance
            .put<UpdatePhotoResponseType>(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((res) => res.data)
    },
    saveProfile(profile: ProfileInfoType) {
        return instance
            .put<SaveProfileResponseType>(`profile`, profile)
            .then((res) => res.data)
    },
}

//USERS
type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

type FolloWUnfollowResponseType = {
    data: {}
    resultCode: number
    messages: Array<string>
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance
            .get<GetUsersResponseType>(
                `users?page=${currentPage}&count=${pageSize}`
            )
            .then((res) => res.data)
    },
    unfollow(id: number) {
        return instance
            .delete<FolloWUnfollowResponseType>(`follow/${id}`)
            .then((res) => res.data)
    },
    follow(id: number) {
        return instance
            .post<FolloWUnfollowResponseType>(`follow/${id}`)
            .then((res) => res.data)
    },
}

import { UserType } from "../types/types"
import { instance } from "./api"

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
    getUsers(currentPage: number, pageSize: number, term: string = '', friend: boolean | null = null) {
        return instance
            .get<GetUsersResponseType>(
                `users?page=${currentPage}&count=${pageSize}&term=${term}`+ (friend===null ? '' : `&friend=${friend}`)
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
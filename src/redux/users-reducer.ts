import { UserType } from './../types/types'
import { usersAPI } from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: false, //preloader
    followingInProgress: [] as Array<number>, //array of users ids
}

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            //возвращаем объект (новый state)
            return {
                //cкопировали state
                ...state,
                //в него пушим массив users
                //(перезаписываем с изменениями исходный)
                users: state.users.map((u) => {
                    //если id пользователя совпадает
                    if (u.id === action.userId) {
                        //копируем объект пользователя поверхностно
                        //внутри него меняем флаг подписки
                        //и возвращаем в новый массив
                        return {
                            ...u,
                            followed: true,
                        }
                    }
                    //иначе возвращаем исходный элемент в новый массив users
                    return u
                }),
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false,
                        }
                    }

                    return u
                }),
            }
        }

        case SET_USERS: {
            return {
                ...state,
                //добавляем новых юзеров из экшена (склеиваем два массива)
                users: [...action.users],
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount,
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }

        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(
                          (id) => id != action.userId
                      ),
            }
        }

        default:
            return state
    }
}

//AC
type FollowSuccesActionType = {
    type: typeof FOLLOW
    userId: number
}

export const followSucces = (userId: number): FollowSuccesActionType => ({
    type: FOLLOW,
    userId,
})

//AC
type UnfollowSuccesActionType = {
    type: typeof UNFOLLOW
    userId: number
}

export const unfollowSucces = (userId: number): UnfollowSuccesActionType => ({
    type: UNFOLLOW,
    userId,
})

//AC
type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

export const setUsers = (users: Array<UserType>): SetUsersActionType => ({
    type: SET_USERS,
    users,
})

//AC
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

export const setCurrentPage = (
    currentPage: number
): SetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage,
})

//AC
type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}

export const setTotalUsersCount = (
    totalCount: number
): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
})

//AC
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export const toggleIsFetching = (
    isFetching: boolean
): ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
})

//AC
type ToggleFollowingInProgressActionType = {
    type: typeof TOGGLE_FOLLOWING_IN_PROGRESS
    followingInProgress: Array<number>
    userId: number
}

export const toggleFollowingInProgress = (
    followingInProgress: Array<number>,
    userId: number
): ToggleFollowingInProgressActionType => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    followingInProgress,
    userId,
})

//TC
export const requestUsers =
    (currentPage: number, pageSize: number) => async (dispatch: any) => {
        dispatch(toggleIsFetching(true))

        //side-effect
        let data = await usersAPI.getUsers(currentPage, pageSize)

        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }

export const updateUsers =
    (pageNumber: number, pageSize: number) => async (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNumber))

        //side-effect
        let data = await usersAPI.getUsers(pageNumber, pageSize)

        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
    }

export const unfollow = (userId: number) => async (dispatch: any) => {
    dispatch(toggleFollowingInProgress(true, userId))
    //side-effect
    let response = await usersAPI.unfollow(userId)

    dispatch(toggleFollowingInProgress(false, userId))
    if (response.data.resultCode == 0) {
        dispatch(unfollowSucces(userId))
    }
}

export const follow = (userId: number) => async (dispatch: any) => {
    dispatch(toggleFollowingInProgress(true, userId))
    //side-effect
    let response = await usersAPI.follow(userId)

    dispatch(toggleFollowingInProgress(false, userId))
    if (response.data.resultCode == 0) {
        dispatch(followSucces(userId))
    }
}

export default usersReducer

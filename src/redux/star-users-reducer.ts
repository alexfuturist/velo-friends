import { ThunkAction } from 'redux-thunk'
import { usersAPI } from '../api/api'
import { UserType } from '../types/types'
import { AppStateType } from './redux-store'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS_STARS = 'SET_USERS_STARS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [] as UserType[],
    pageSize: 5 as number,
    currentPage: 1 as number,
    totalUsersCount: 0 as number,
    isFetching: false, //preloader
    followingInProgress: [] as number[],
}

type InitialStateType = typeof initialState

const starUsersReducer = (
    state = initialState,
    action: ActionsTypes
): InitialStateType => {
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

        case SET_USERS_STARS: {
            return {
                ...state,
                //добавляем новых юзеров из экшена (склеиваем два массива)
                users: [...action.users],
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

//AC Types
type ActionsTypes =
    | FollowSuccesActionType
    | UnfollowSuccesActionType
    | SetUsersStarsActionType
    | ToggleIsFetchingActionType
    | ToggleFollowingInProgressActionType

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
type SetUsersStarsActionType = {
    type: typeof SET_USERS_STARS
    users: Array<UserType>
}

export const setUsersStars = (
    users: Array<UserType>
): SetUsersStarsActionType => ({
    type: SET_USERS_STARS,
    users,
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
    followingInProgress: boolean
    userId: number
}

export const toggleFollowingInProgress = (
    followingInProgress: boolean,
    userId: number
): ToggleFollowingInProgressActionType => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    followingInProgress,
    userId,
})

//TC type
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

//TC
export const unfollow =
    (userId: number): ThunkType =>
    async (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        //side-effect
        let response = true

        dispatch(toggleFollowingInProgress(false, userId))
        if (response) {
            dispatch(unfollowSucces(userId))
        }
    }

export const follow =
    (userId: number): ThunkType =>
    async (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        //side-effect
        let response = true

        dispatch(toggleFollowingInProgress(false, userId))
        if (response) {
            dispatch(followSucces(userId))
        }
    }

export default starUsersReducer

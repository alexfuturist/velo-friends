import { usersAPI } from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS_STARS = 'SET_USERS_STARS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5 as number,
    currentPage: 1 as number,
    totalUsersCount: 0 as number,
    isFetching: false, //preloader
    followingInProgress: [],
}

type InitialStateType = typeof initialState

const starUsersReducer = (state = initialState, action): InitialStateType => {
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

//AC
export const followSucces = (userId) => ({
    type: FOLLOW,
    userId,
})

export const unfollowSucces = (userId) => ({
    type: UNFOLLOW,
    userId,
})

export const setUsersStars = (users) => ({
    type: SET_USERS_STARS,
    users,
})

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
})

export const toggleFollowingInProgress = (followingInProgress, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    followingInProgress,
    userId,
})

//TC
export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    //side-effect
    let response = true

    dispatch(toggleFollowingInProgress(false, userId))
    if (response) {
        dispatch(unfollowSucces(userId))
    }
}

export const follow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    //side-effect
    let response = true

    dispatch(toggleFollowingInProgress(false, userId))
    if (response) {
        dispatch(followSucces(userId))
    }
}

export default starUsersReducer

import { ResultCodes } from './../api/api';
import { ProfileInfoType, PostType, PhotosType } from './../types/types'
import { reset, stopSubmit } from 'redux-form'
import { profileAPI } from '../api/api'
import userPhotoDefault from '../assets/images/user_default.png'
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from './redux-store'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'GET_USER_STATUS'
const UPDATE_PHOTO_SUCCESS = 'UPDATE_PHOTO_SUCCESS'
const DELETE_POST = 'DELETE_POST'
const UPDATE_POST = 'UPDATE_POST'
const UPDATE_POST_MODE = 'UPDATE_POST_MODE'

let initialState = {
    profileInfo: {
        aboutMe: 'про мене',
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null,
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'js',
        fullName: "Им'я",
        userId: null,
        photos: {
            small: userPhotoDefault,
            large: userPhotoDefault,
        },
    } as ProfileInfoType,
    status: 'Статус має бути тут' as string | null,
    posts: [
        {
            id: 0,
            message:
                'А настройки профиля отправляются на сервер после изменения, поэтому можно редактировать и перезагружать, всё должно сохраниться и обновиться.)',
        },
        {
            id: 1,
            message:
                'Все эти посты работают со стейтом Redux, но пока не написали API для их хранения на сервере и поэтому после полной перезагрузки странички они возвращаются по дефолту..',
        },
        {
            id: 2,
            message:
                'Дууууже довгий пост. Він показує що, слова переносяться автоматичооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооо, навіть якщо клавіша залипла:)',
        },
        {
            id: 3,
            message: '✅Привіт, хто хоче покататись?',
        },
        {
            id: 4,
            message: '🕝Сьогодні починаю нову програму! Поїхали!',
        },
    ] as Array<PostType>,
    isUpdatePostMode: false,
}

type InitialStateType = typeof initialState

const profileReducer = (
    state = initialState,
    action: ActionTypes
): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: +`${Math.max(...state.posts.map((p) => p.id)) + 1}`,
                message: action.newPostText,
            }

            console.log(newPost)

            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profileInfo: action.profileInfo,
            }
        }

        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }

        case UPDATE_PHOTO_SUCCESS: {
            return {
                ...state,
                profileInfo: {
                    ...state.profileInfo,
                    photos: action.photos,
                },
            }
        }

        case DELETE_POST: {
            return {
                ...state,
                posts: [
                    ...state.posts.filter(
                        (item, index) => index !== action.index
                    ),
                ],
            }
        }

        case UPDATE_POST: {
            let updatePost = {
                id: +`${state.posts[action.index].id}`,
                message: action.message,
            }

            return {
                ...state,
                posts: [
                    ...state.posts.map((post, index) => {
                        if (index === action.index) {
                            return updatePost
                        }

                        return post
                    }),
                ],
            }
        }

        case UPDATE_POST_MODE: {
            return {
                ...state,
                isUpdatePostMode: action.flag,
            }
        }

        default:
            return state
    }
}

//AC Types
type ActionTypes =
    | AddPostActionType
    | SetUserProfileActionType
    | SetUserStatusActionType
    | UpdatePhotoSuccessActionType
    | DeletePostSuccessActionType
    | UpdatePostSuccessActionType
    | UpdatePostModeActionType

//AC
type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}

export const addPost = (newPostText: string): AddPostActionType => {
    return {
        type: ADD_POST,
        newPostText: newPostText,
    }
}

//AC
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profileInfo: ProfileInfoType
}

export const setUserProfile = (
    profileInfo: ProfileInfoType
): SetUserProfileActionType => {
    return {
        type: SET_USER_PROFILE,
        profileInfo: profileInfo,
    }
}

//AC
type SetUserStatusActionType = {
    type: typeof SET_USER_STATUS
    status: string
}

export const setUserStatus = (status: string): SetUserStatusActionType => {
    return {
        type: SET_USER_STATUS,
        status: status,
    }
}

//AC
type UpdatePhotoSuccessActionType = {
    type: typeof UPDATE_PHOTO_SUCCESS
    photos: PhotosType
}

export const updatePhotoSuccess = (
    photos: PhotosType
): UpdatePhotoSuccessActionType => {
    return {
        type: UPDATE_PHOTO_SUCCESS,
        photos,
    }
}

//AC
type DeletePostSuccessActionType = {
    type: typeof DELETE_POST
    index: number
}

export const deletePostSuccess = (
    postIndex: number
): DeletePostSuccessActionType => {
    return {
        type: DELETE_POST,
        index: postIndex,
    }
}

//AC
type UpdatePostSuccessActionType = {
    type: typeof UPDATE_POST
    index: number
    message: string
}

export const updatePostSuccess = (
    postIndex: number,
    message: string
): UpdatePostSuccessActionType => {
    return {
        type: UPDATE_POST,
        index: postIndex,
        message: message,
    }
}

//AC
type UpdatePostModeActionType = {
    type: typeof UPDATE_POST_MODE
    flag: boolean
}

export const updatePostMode = (flag: boolean): UpdatePostModeActionType => {
    return {
        type: UPDATE_POST_MODE,
        flag: flag,
    }
}

//TC Type
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

//TC
export const addNewPost = (newPostText: string): ThunkType => (dispatch) => {
    dispatch(addPost(newPostText))
    //@ts-ignore
    dispatch(reset('ProfileAddNewPost'))
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    const response = await profileAPI.getUserProfile(userId)

    dispatch(setUserProfile(response))
}

export const getUserStatus = (userId: number): ThunkType => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)

    dispatch(setUserStatus(response))
}

export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)

    if (response.resultCode === ResultCodes.Success) {
        dispatch(setUserStatus(status))
    }
}

export const updatePhoto = (file: any): ThunkType => async (dispatch) => {
    const response = await profileAPI.updatePhoto(file)

    if (response.resultCode === ResultCodes.Success) {
        console.log(response)
        dispatch(updatePhotoSuccess(response.data.photos))
    }
}

export const saveProfile =
    (profile: ProfileInfoType): ThunkType => async (dispatch, getState) => {
        const response = await profileAPI.saveProfile(profile)
        const userId = getState().auth.userId
    
        if (response.resultCode === ResultCodes.Success) {
            //@ts-ignore
            dispatch(getUserProfile(userId))
        } else {
            dispatch(
                //@ts-ignore
                stopSubmit('edit-profile', {
                    _error: response.messages[0],
                })
            )
            return Promise.reject(response.messages[0])
        }
    }

export const deletePost = (id: number): ThunkType => (dispatch, getState) => {
    const posts = getState().profilePage.posts
    let postIndex = posts.findIndex((element: PostType) => element.id === id)

    dispatch(deletePostSuccess(postIndex))
    dispatch(updatePostMode(false))
    // console.log(posts);
}

export const updatePost =
    (id: number, message: string): ThunkType => (dispatch, getState) => {
        const posts = getState().profilePage.posts
        let postIndex = posts.findIndex(
            (element: PostType) => element.id === id
        )

        dispatch(updatePostSuccess(postIndex, message))
    }

export default profileReducer

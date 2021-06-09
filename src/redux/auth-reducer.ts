import { ResultCodeForCaptcha, ResultCodes } from './../api/api';
import { Dispatch } from 'react'
import { stopSubmit } from 'redux-form'
import { ThunkAction } from 'redux-thunk'
import { authAPI, securityAPI } from '../api/api'
import { AppStateType } from './redux-store'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}

type InitialStateType = typeof initialState

const authReducer = (
    state = initialState,
    action: ActionsTypes
): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}

//AC Types
type ActionsTypes = SetAuthUserDataActionType | GetCaptchaUrlSuccessActionType

//AC
type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA
    payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean = true
): SetAuthUserDataActionType => ({
    type: SET_AUTH_USER_DATA,
    payload: {
        userId,
        email,
        login,
        isAuth,
    },
})

//AC
type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: {
        captchaUrl: string | null
    }
}

export const getCaptchaUrlSuccess = (
    captchaUrl: string | null
): GetCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {
        captchaUrl,
    },
})

//TC Types
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

//TC
export const getAuthUserData = () => async (dispatch: DispatchType) => {
    // debugger
    const response = await authAPI.me()

    if (response.resultCode === ResultCodes.Success) {
        let { id, email, login } = response.data
        dispatch(setAuthUserData(id, email, login))
    }
}

//TC
export const login =
    (
        email: string,
        password: string,
        rememberMe: boolean,
        captcha: string
    ): ThunkType =>
    async (dispatch) => {
        const response = await authAPI.login(
            email,
            password,
            rememberMe,
            //@ts-ignore
            captcha
        )

        if (response.resultCode === ResultCodes.Success) {
            dispatch(getAuthUserData())
            getCaptchaUrlSuccess(null)
        } else {
            if (response.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
                dispatch(getCaptchaUrl())
            }

            let message =
                response.messages.length > 0
                    ? response.messages[0]
                    : 'some error'

            dispatch(
                //@ts-ignore
                stopSubmit('login', {
                    _error: message,
                })
            );
        }
    }

//TC
export const logout = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logout()

    if (response.resultCode === ResultCodes.Success) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

//TC
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.url

    console.log(`каптча с сервера:` + captchaUrl);

    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer

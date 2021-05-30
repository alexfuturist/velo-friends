import { stopSubmit } from 'redux-form'
import { authAPI, securityAPI } from '../api/api'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

// type InitialStateType = {
//     userId: number | null
//     email: string | null
//     login: string | null
//     isAuth: boolean
//     captchaUrl: string | null // if null, then captcha is not required
// }

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}

type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
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
    userId: number,
    email: string,
    login: string,
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
        captchaUrl: string
    }
}

export const getCaptchaUrlSuccess = (
    captchaUrl: string
): GetCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {
        captchaUrl,
    },
})

//TC
export const getAuthUserData = () => async (dispatch: any) => {
    // debugger
    const response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(setAuthUserData(id, email, login))
    }
}

export const login =
    (email: string, password: string, rememberMe: boolean, captcha: string) =>
    async (dispatch: any) => {
        const response = await authAPI.login(
            email,
            password,
            rememberMe,
            captcha
        )

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
            getCaptchaUrlSuccess(null)
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }

            let message =
                response.data.messages.length > 0
                    ? response.data.messages[0]
                    : 'some error'

            dispatch(
                stopSubmit('login', {
                    _error: message,
                })
            )

            // console.log(response.data.resultCode);
        }
    }

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url

    // console.log(`каптча с сервера:` + captchaUrl);

    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer

import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            };

        default:
            return state;
    }
};

//AC
export const setAuthUserData = (userId, email, login, isAuth=true) => ({
    type: SET_AUTH_USER_DATA,
    data: {
        userId,
        email,
        login,
        isAuth
    }
});

//TC
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                console.log(response);

                if (response.data.resultCode === 0) {
                    let {
                        id,
                        email,
                        login
                    } = response.data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
};

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
    }
};

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
        .then (response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
};

export default authReducer;
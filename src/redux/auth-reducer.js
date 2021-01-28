import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                    isAuth: true
            };

        default:
            return state;
    }
};

//AC
export const setAuthUserData = (userId, email, login) => ({
    type: SET_AUTH_USER_DATA,
    data: {
        userId,
        email,
        login
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

export const postLoginData = (formData) => {
    return (dispatch) => {
        authAPI.loginIn(formData)
        .then()
    }
}

export default authReducer;
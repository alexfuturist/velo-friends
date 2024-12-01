// import { ResultCodeForCaptcha, ResultCodes } from './../api/api';
import { stopSubmit } from "redux-form";
import { BaseThunkType, InferActionsTypes } from "./redux-store";
import { ResultCodeForCaptcha, ResultCodes } from "src/shared/api/api";
import { securityAPI } from "src/shared/api/security-api";
import { authAPI } from "src/shared/api/auth-api";

//State
type InitialStateType = typeof initialState;

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

//Reducer
const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case "VF/AUTH/SET_AUTH_USER_DATA":
    case "VF/AUTH/GET_CAPTCHA_URL_SUCCESS":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

//AC Types
type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
  setAuthUserData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth = true,
  ) => ({
    type: "VF/AUTH/SET_AUTH_USER_DATA",
    payload: {
      userId,
      email,
      login,
      isAuth,
    },
  }),
  getCaptchaUrlSuccess: (captchaUrl: string | null) => ({
    type: "VF/AUTH/GET_CAPTCHA_URL_SUCCESS",
    payload: {
      captchaUrl,
    },
  }),
};

//TC Type
type ThunkType = BaseThunkType<ActionsTypes>;

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  try {
    const response = await authAPI.me();
    console.log("response", response);

    if (response.resultCode === ResultCodes.Success) {
      const { id, email, login } = response.data;
      dispatch(actions.setAuthUserData(id, email, login));
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const login =
  (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType =>
  async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.resultCode === ResultCodes.Success) {
      dispatch(getAuthUserData());
      actions.getCaptchaUrlSuccess(null);
    } else {
      if (response.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
        dispatch(getCaptchaUrl());
      }

      const message = response.messages.length > 0 ? response.messages[0] : "some error";

      dispatch(
        //@ts-ignore
        stopSubmit("login", {
          _error: message,
        }),
      );
    }
  };

export const logout = (): ThunkType => async (dispatch) => {
  const response = await authAPI.logout();

  if (response.resultCode === ResultCodes.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.url;

  console.log(`каптча с сервера:` + captchaUrl);

  dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;

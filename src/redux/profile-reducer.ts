import { ResultCodes } from './../api/api';
import { ProfileInfoType, PostType, PhotosType } from './../types/types';
// eslint-disable-next-line
import { FormAction, reset, stopSubmit } from 'redux-form';
import userPhotoDefault from '../assets/images/user_default.png';
import { BaseLocalThunkType, BaseThunkType, InferActionsTypes } from './redux-store';
import { profileAPI } from '../api/profile-api';

//State
type InitialStateType = typeof initialState;

const initialState = {
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
};

//Reducer
const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'VF/PROFILE/ADD_POST': {
      const newPost = {
        id: +`${Math.max(...state.posts.map((p) => p.id)) + 1}`,
        message: action.newPostText,
      };

      console.log(newPost);

      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }

    case 'VF/PROFILE/SET_USER_PROFILE': {
      return {
        ...state,
        profileInfo: action.profileInfo,
      };
    }

    case 'VF/PROFILE/SET_USER_STATUS': {
      return {
        ...state,
        status: action.status,
      };
    }

    case 'VF/PROFILE/UPDATE_PHOTO_SUCCESS': {
      return {
        ...state,
        profileInfo: {
          ...state.profileInfo,
          photos: action.photos,
        },
      };
    }

    case 'VF/PROFILE/DELETE_POST': {
      return {
        ...state,
        posts: [...state.posts.filter((item, index) => index !== action.index)],
      };
    }

    case 'VF/PROFILE/UPDATE_POST': {
      const updatePost = {
        id: +`${state.posts[action.index].id}`,
        message: action.message,
      };

      return {
        ...state,
        posts: [
          ...state.posts.map((post, index) => {
            if (index === action.index) {
              return updatePost;
            }

            return post;
          }),
        ],
      };
    }

    case 'VF/PROFILE/UPDATE_POST_MODE': {
      return {
        ...state,
        isUpdatePostMode: action.flag,
      };
    }

    default:
      return state;
  }
};

//AC Types
type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
  addPost: (newPostText: string) =>
    ({
      type: 'VF/PROFILE/ADD_POST',
      newPostText: newPostText,
    }) as const,
  setUserProfile: (profileInfo: ProfileInfoType) =>
    ({
      type: 'VF/PROFILE/SET_USER_PROFILE',
      profileInfo: profileInfo,
    }) as const,
  setUserStatus: (status: string) =>
    ({
      type: 'VF/PROFILE/SET_USER_STATUS',
      status: status,
    }) as const,
  updatePhotoSuccess: (photos: PhotosType) =>
    ({
      type: 'VF/PROFILE/UPDATE_PHOTO_SUCCESS',
      photos,
    }) as const,
  deletePostSuccess: (postIndex: number) =>
    ({
      type: 'VF/PROFILE/DELETE_POST',
      index: postIndex,
    }) as const,
  updatePostSuccess: (postIndex: number, message: string) =>
    ({
      type: 'VF/PROFILE/UPDATE_POST',
      index: postIndex,
      message: message,
    }) as const,
  updatePostMode: (flag: boolean) =>
    ({
      type: 'VF/PROFILE/UPDATE_POST_MODE',
      flag: flag,
    }) as const,
};

//TC Type
type ThunkType = BaseThunkType<ActionsTypes | FormAction>;
type LocalThunkType = BaseLocalThunkType<ActionsTypes | FormAction>;

export const addNewPost =
  (newPostText: string): LocalThunkType =>
  (dispatch) => {
    dispatch(actions.addPost(newPostText));
    dispatch(reset('ProfileAddNewPost'));
  };

export const getUserProfile =
  (userId: number | null): ThunkType =>
  async (dispatch) => {
    const response = await profileAPI.getUserProfile(userId);

    dispatch(actions.setUserProfile(response));
  };

export const getUserStatus =
  (userId: number | null): ThunkType =>
  async (dispatch) => {
    const response = await profileAPI.getStatus(userId);

    dispatch(actions.setUserStatus(response));
  };

export const updateUserStatus =
  (status: string): ThunkType =>
  async (dispatch) => {
    const response = await profileAPI.updateStatus(status);

    if (response.resultCode === ResultCodes.Success) {
      dispatch(actions.setUserStatus(status));
    }
  };

export const updatePhoto =
  (file: any): ThunkType =>
  async (dispatch) => {
    const response = await profileAPI.updatePhoto(file);

    if (response.resultCode === ResultCodes.Success) {
      console.log(response);
      dispatch(actions.updatePhotoSuccess(response.data.photos));
    }
  };

export const saveProfile =
  (profile: ProfileInfoType): ThunkType =>
  async (dispatch, getState) => {
    const response = await profileAPI.saveProfile(profile);
    const userId = getState().auth.userId;

    if (response.resultCode === ResultCodes.Success) {
      dispatch(getUserProfile(userId));
    } else {
      dispatch(
        stopSubmit('edit-profile', {
          _error: response.messages[0],
        }),
      );
      return Promise.reject(response.messages[0]);
    }
  };

export const deletePost =
  (id: number): LocalThunkType =>
  (dispatch, getState) => {
    const posts = getState().profilePage.posts;
    const postIndex = posts.findIndex((element: PostType) => element.id === id);

    dispatch(actions.deletePostSuccess(postIndex));
    dispatch(actions.updatePostMode(false));
  };

export const updatePost =
  (id: number, message: string): LocalThunkType =>
  (dispatch, getState) => {
    const posts = getState().profilePage.posts;
    const postIndex = posts.findIndex((element: PostType) => element.id === id);

    dispatch(actions.updatePostSuccess(postIndex, message));
  };

export default profileReducer;

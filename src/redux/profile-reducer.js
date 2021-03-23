import {
    reset,
    stopSubmit
} from "redux-form";
import {
    profileAPI
} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'GET_USER_STATUS';
const UPDATE_PHOTO_SUCCESS = 'UPDATE_PHOTO_SUCCESS';
const DELETE_POST = 'DELETE_POST';
const UPDATE_POST = 'UPDATE_POST';
const UPDATE_POST_MODE = 'UPDATE_POST_MODE';

let initialState = {
    profileInfo: {
        "aboutMe": "я круто чувак 1001%",
        "contacts": {
            "facebook": "facebook.com",
            "website": null,
            "vk": null,
            "twitter": null,
            "instagram": "instagra.com/v",
            "youtube": null,
            "github": "github.com",
            "mainLink": null
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "работаю, а катаюсь по выходным",
        "fullName": "Володимир Погребняк",
        "userId": "myProfile",
        "photos": {
            "small": "https://tengrinews.kz/userdata/images/u38/resized/35fcc7bea1f32a6437650758096b9f89.jpeg",
            "large": "https://tengrinews.kz/userdata/images/u38/resized/35fcc7bea1f32a6437650758096b9f89.jpeg"
        },
        "status": "Status must be here",
    },
    posts: [{
            id: 0,
            message: "А настройки профиля отправляются на сервер после изменения, поэтому можно редактировать и перезагружать, всё должно сохраниться и обновиться.)"
        }, {
            id: 1,
            message: "Все эти посты работают со стейтом Redux, но пока не написали API для их хранения на сервере и поэтому после полной перезагрузки странички они возвращаются по дефолту.."
        }, {
            id: 2,
            message: "Дууууже довгий пост. Він показує що, слова переносяться автоматичооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооо, навіть якщо клавіша залипла:)"
        },
        {
            id: 3,
            message: "✅Привіт, хто хоче покататись?"
        },
        {
            id: 4,
            message: "🕝Сьогодні починаю нову програму! Поїхали!"
        }
    ],
    isUpdatePostMode: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: +`${Math.max(...state.posts.map( (p)=> p.id ))+1}`,
                message: action.newPostText
            };

            console.log (newPost)

            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profileInfo: action.profileInfo
            }
        }

        case SET_USER_STATUS: {
            return {
                ...state,
                profileInfo: {
                    ...state.profileInfo,
                    status: action.status
                }
            }
        }

        case UPDATE_PHOTO_SUCCESS: {
            return {
                ...state,
                profileInfo: {
                    ...state.profileInfo,
                    photos: action.photos
                }
            }
        }

        case DELETE_POST: {
            return {
                ...state,
                posts: [...state.posts.filter((item, index) => index !== action.index)]
            }
        }

        case UPDATE_POST: {
            let updatePost = {
                id: +`${state.posts[action.index].id}`,
                message: action.message
            };

            return {
                ...state,
                posts: [...state.posts.map((post, index) => {
                    if (index === action.index) {
                        return updatePost;
                    }

                    return post;
                })],
            };

        }

        case UPDATE_POST_MODE: {
            return {
                ...state,
                isUpdatePostMode: action.flag
            }
        }

        default:
            return state;
    }
}

//AC
export const addPost = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    }
};

export const setUserProfile = (profileInfo) => {
    return {
        type: SET_USER_PROFILE,
        profileInfo: profileInfo
    }
};

export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status: status
    }
};

export const updatePhotoSuccess = (photos) => {
    return {
        type: UPDATE_PHOTO_SUCCESS,
        photos
    }
};

export const deletePostSuccess = (postIndex) => {
    return {
        type: DELETE_POST,
        index: postIndex
    }
};

export const updatePostSuccess = (postIndex, message) => {
    return {
        type: UPDATE_POST,
        index: postIndex,
        message: message
    }
};

export const updatePostMode = (flag) => {
    console.log(flag);

    return {
        type: UPDATE_POST_MODE,
        flag: flag
    }
};


//TC
export const addNewPost = (newPostText) => (dispatch) => {
    dispatch(addPost(newPostText));
    dispatch(reset('ProfileAddNewPost'));
};

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);

    dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);

    dispatch(setUserStatus(response.data));
};

export const updateUserStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
};

export const updatePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.updatePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(updatePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const response = await profileAPI.saveProfile(profile);
    const userId = getState().auth.userId;
    console.log(response);
    console.log(response.data.messages[0]);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {
            _error: response.data.messages[0]
        }));
        return Promise.reject(response.data.messages[0]);
    }
};

export const deletePost = (id) => (dispatch, getState) => {
    const posts = getState().profilePage.posts;
    let postIndex = posts.findIndex(element => element.id === id);

    dispatch(deletePostSuccess(postIndex));
    // console.log(posts);
};

export const updatePost = (id, message) => (dispatch, getState) => {
    const posts = getState().profilePage.posts;
    let postIndex = posts.findIndex(element => element.id === id);

    dispatch(updatePostSuccess(postIndex, message));
};

export default profileReducer;
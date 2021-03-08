import {
    stopSubmit
} from "redux-form";
import {
    profileAPI
} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'GET_USER_STATUS';
const UPDATE_PHOTO_SUCCESS = 'UPDATE_PHOTO_SUCCESS';

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
            id: 1,
            message: "Привіт, хто хоче покататись?"
        },
        {
            id: 2,
            message: "Починаю нову програму! Поїхали!"
        }
    ]
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newPostText
            };

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


//TC
export const getUserProfile = (userId) => async (dispatch) => {
    // if (!userId) {
    //     userId = 2;
    // }

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

debugger;
export const saveProfile = (profile) => async (dispatch, getState) => {
    const response = await profileAPI.saveProfile(profile);
    const userId = getState().auth.userId;
    console.log(response);
    console.log(response.data.messages[0]);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error:response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}



export default profileReducer;
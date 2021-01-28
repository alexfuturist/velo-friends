import {
    profileAPI
} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'GET_USER_STATUS';

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
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_POST: {
            return {
                ...state,
                newPostText: action.newPostText
            };
        }
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
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
                profileInfo: {...state.profileInfo, status: action.status}
            }
        }

        default:
            return state;
    }
}

//AC
export const updatePost = (text) => {
    return {
        type: UPDATE_POST,
        newPostText: text
    }
};

export const addPost = () => ({
    type: ADD_POST
});

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


//TC
export const getUserProfile = (userId) => {
    return (dispatch) => {
        if (!userId) {
            userId = 2;
        }

        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
    }
};

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
        .then (response => {
            dispatch(setUserStatus(response.data))
        })
    }
};

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
        .then (response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
    }
};


export default profileReducer;
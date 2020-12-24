const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
        }
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

        default:
            return state;
    }
}

//создатели событий (объектов событий)
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

export default profileReducer;
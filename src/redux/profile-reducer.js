const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

let initialState = {
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
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_POST:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
}

//создатели событий (объектов событий)
export const addPostActionCreator = () => ({type: ADD_POST});

export const updatePostActionCreator = (text) => {
    return {
        type: UPDATE_POST,
        newPostText: text
    }
};

export default profileReducer;
const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

const profileReducer = (state, action) => {
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

export default profileReducer;
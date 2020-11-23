const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                name: 'Я',
                messagesText: state.newMessageText
            };

            state.messages.push(newMessage);
            state.newMessageText = '';

            return state;
        case UPDATE_MESSAGE:
            state.newMessageText = action.newMessageText;

            return state;

        default:
            return state;
    }
}

export default dialogsReducer;
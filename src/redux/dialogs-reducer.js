const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let initialState = {
    dialogs: [{
            id: 1,
            name: 'Михайло'
        },
        {
            id: 2,
            name: 'Ізабела'
        },
        {
            id: 3,
            name: 'Софія'
        },
        {
            id: 2,
            name: 'Ізабела'
        },
        {
            id: 3,
            name: 'Софія'
        },
        {
            id: 2,
            name: 'Ізабела'
        },
        {
            id: 3,
            name: 'Софія'
        },
        {
            id: 2,
            name: 'Ізабела'
        },
        {
            id: 3,
            name: 'Софія'
        },
        {
            id: 2,
            name: 'Ізабела'
        },
        {
            id: 3,
            name: 'Софія'
        },
        {
            id: 2,
            name: 'Ізабела'
        },
        {
            id: 3,
            name: 'Софія'
        },
        {
            id: 2,
            name: 'Ізабела'
        },
        {
            id: 3,
            name: 'Софія'
        },
        {
            id: 2,
            name: 'Ізабела'
        },
        {
            id: 3,
            name: 'Софія'
        },
        {
            id: 2,
            name: 'Ізабела'
        },
        {
            id: 3,
            name: 'Софія'
        }
    ],
    messages: [{
            id: 1,
            name: 'Ізабела',
            messagesText: 'Привіт! Вже замінив колесо?'
        },
        {
            id: 2,
            name: 'Я',
            messagesText: 'Привіт. Так вже відремонтував і встановив нові катафоти!'
        },
        {
            id: 3,
            name: 'Ізабела',
            messagesText: 'Тоді завтра на 10:30 їдемо 20км по маршруту Б.'
        },
        {
            id: 4,
            name: 'Я',
            messagesText: 'ОК'
        }
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                name: 'Я',
                messagesText: state.newMessageText
            };

            let stateCopy = {
                ...state
            };
            stateCopy.messages = [...state.messages]

            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';

            return stateCopy;
        }
        case UPDATE_MESSAGE: {
            let stateCopy = {
                ...state
            };

            stateCopy.newMessageText = action.newMessageText;

            return stateCopy;
        }
        default:
            return state;
    }
}

//создатели событий (объектов событий)
export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});

export const updateMessageActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE,
        newMessageText: text
    }
};

export default dialogsReducer;
const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                name: 'Я',
                messagesText: action.newMessageText
            };

            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        }
        default:
            return state;
    }
}

//AC
export const addMessage = (newMessageText) => ({
    type: ADD_MESSAGE,
    newMessageText: newMessageText
});

export default dialogsReducer;
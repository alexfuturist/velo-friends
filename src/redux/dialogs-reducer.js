const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [{
            id: 1,
            name: 'Михайло'
        },
        {
            id: 2,
            name: 'Віка'
        },
        {
            id: 3,
            name: 'Софія'
        },
        {
            id: 4,
            name: 'Іван'
        },
        {
            id: 5,
            name: 'Клара'
        },
        {
            id: 6,
            name: 'Христина'
        },
        {
            id: 7,
            name: 'Давид'
        },
        {
            id: 8,
            name: 'Ігор'
        },
        {
            id: 9,
            name: 'Інна'
        },
        {
            id: 10,
            name: 'Аліна'
        },
        {
            id: 11,
            name: 'Наталя'
        },
        {
            id: 12,
            name: 'Ірина'
        },
        {
            id: 13,
            name: 'Тетяна'
        },
        {
            id: 14,
            name: 'Володимир'
        },
        {
            id: 15,
            name: 'Віталій'
        },
        {
            id: 16,
            name: 'Олександр'
        },
        {
            id: 17,
            name: 'Валерій'
        },
        {
            id: 18,
            name: 'Святослав'
        },
        {
            id: 19,
            name: 'Петро'
        }
    ],
    dialogsMessages: [{
            id: 0,
            messages: [{
                    id: 1,
                    name: 'вело-радник',
                    messagesText: 'Виберіть діалог зі списку контактів щоби почати спілкування.'
                }
            ]
        },
        {
            id: 1,
            messages: [{
                    id: 1,
                    name: 'Михайло',
                    messagesText: 'Здаров! Вже замінив колесо?'
                },
                {
                    id: 2,
                    name: 'Я',
                    messagesText: 'Привіт. Так вже відремонтував і встановив нові катафоти!'
                },
                {
                    id: 3,
                    name: 'Михайло',
                    messagesText: 'Тоді завтра на 10:30 їдемо 20км по маршруту Б.'
                },
                {
                    id: 4,
                    name: 'Я',
                    messagesText: 'ОК'
                }
            ]
        },
        {
            id: 2,
            messages: [{
                    id: 1,
                    name: 'Віка',
                    messagesText: 'Привіт! Коли їдемо на стадіон?'
                },
                {
                    id: 2,
                    name: 'Я',
                    messagesText: 'Привіт. Ще маю трохи повчити react, потім їдемо!'
                },
                {
                    id: 3,
                    name: 'Віка',
                    messagesText: 'Добре, після дощу їдемо 10км по парку.'
                },
                {
                    id: 4,
                    name: 'Я',
                    messagesText: 'Домовились)'
                }
            ]
        }
    ]

}

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
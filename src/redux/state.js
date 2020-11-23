import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

export let store = {
    _state: {
        navbar: {
            friends: [{
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
                }
            ]
        },
        content: {
            profilePage: {
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
            },
            dialogsPage: {
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
            }
        }

    },
    _renderEntireTree() {
        console.log('state was changed');
    },


    dispatch(action) {

        this._state.content.profilePage = profileReducer(this._state.content.profilePage, action);
        this._state.content.dialogsPage = dialogsReducer(this._state.content.dialogsPage, action);

        this._renderEntireTree(this._state); // перерисовка UI (уведомление подписчика)
    },

    getState() {
        return this._state;
    },

    //функция колбэк - переписывает метод _renderEntireTree() 
    //с заглушки на функцию отрисовки из index.js
    subscribe(observer) {
        this._renderEntireTree = observer; //паттерн
    },

}
const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';


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

    _addPost() {
        let newPost = {
            id: 3,
            message: this._state.content.profilePage.newPostText
        };

        this._state.content.profilePage.posts.push(newPost);
        this._state.content.profilePage.newPostText = '';
        this._renderEntireTree(this._state); // перерисовка UI
    },
    //функция обновления текста поста
    _updatePost(newPostText) {
        this._state.content.profilePage.newPostText = newPostText;
        this._renderEntireTree(this._state); // перерисовка UI
    },
    _addMessage() {
        let newMessage = {
            id: 5,
            name: 'Я',
            messagesText: this._state.content.dialogsPage.newMessageText
        };

        this._state.content.dialogsPage.messages.push(newMessage);
        this._state.content.dialogsPage.newMessageText = '';
        this._renderEntireTree(this._state); // перерисовка UI
    },
    //функция обновления текста сообщения
    _updateMessage(newMessageText) {
        this._state.content.dialogsPage.newMessageText = newMessageText;
        this._renderEntireTree(this._state); // перерисовка UI
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                this._addPost();
                break;
            case UPDATE_POST:
                this._updatePost(action.newPostText);
                break;
            case ADD_MESSAGE:
                this._addMessage();
                break;
            case UPDATE_MESSAGE:
                this._updateMessage(action.newMessageText);
                break;
        }
    },

    getState() {
        return this._state;
    },
    //функция колбэк
    subscribe(observer) {
        this._renderEntireTree = observer; //паттерн
    },

}


export const addPostActionCreator = () => ({type: ADD_POST});

export const updatePostActionCreator = (text) => {
    return {
        type: UPDATE_POST,
        newPostText: text
    }
};


export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateMessageActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE,
        newMessageText: text
    }
};

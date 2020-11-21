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
            case "ADD-POST":
                this._addPost();
                break;
            case "UPDATE-POST":
                this._updatePost(action.newPostText);
                break;
            case "ADD-MESSAGE":
                this._addMessage();
                break;
            case "UPDATE-MESSAGE":
                this._updateMessage(action.newMessageText);
                break;
        }
        
        // if (action.type === "ADD-POST") {
        //     this._addPost()
        // } else if (action.type === "UPDATE-POST") {
        //     this._updatePost(action.newPostText)
        // } else if (action.type === "ADD-MESSAGE") {
        //     this._addMessage()
        // } else if (action.type === "UPDATE-MESSAGE") {
        //     this._updateMessage(action.newMessageText)
        // }
    },

    getState() {
        return this._state;
    },
    //функция колбэк
    subscribe(observer) {
        this._renderEntireTree = observer; //паттерн
    },

}

// window.store = store;

// let renderEntireTree = () => {
//     console.log('state was changed');
// };

// let state = {
//     navbar: {
//         friends: [{
//                 id: 1,
//                 name: 'Михайло'
//             },
//             {
//                 id: 2,
//                 name: 'Ізабела'
//             },
//             {
//                 id: 3,
//                 name: 'Софія'
//             }
//         ]
//     },
//     content: {
//         profilePage: {
//             posts: [{
//                     id: 1,
//                     message: "Привіт, хто хоче покататись?"
//                 },
//                 {
//                     id: 2,
//                     message: "Починаю нову програму! Поїхали!"
//                 }
//             ],
//         },
//         dialogsPage: {
//             dialogs: [{
//                     id: 1,
//                     name: 'Михайло'
//                 },
//                 {
//                     id: 2,
//                     name: 'Ізабела'
//                 },
//                 {
//                     id: 3,
//                     name: 'Софія'
//                 },
//                 {
//                     id: 2,
//                     name: 'Ізабела'
//                 },
//                 {
//                     id: 3,
//                     name: 'Софія'
//                 },
//                 {
//                     id: 2,
//                     name: 'Ізабела'
//                 },
//                 {
//                     id: 3,
//                     name: 'Софія'
//                 },
//                 {
//                     id: 2,
//                     name: 'Ізабела'
//                 },
//                 {
//                     id: 3,
//                     name: 'Софія'
//                 },
//                 {
//                     id: 2,
//                     name: 'Ізабела'
//                 },
//                 {
//                     id: 3,
//                     name: 'Софія'
//                 },
//                 {
//                     id: 2,
//                     name: 'Ізабела'
//                 },
//                 {
//                     id: 3,
//                     name: 'Софія'
//                 },
//                 {
//                     id: 2,
//                     name: 'Ізабела'
//                 },
//                 {
//                     id: 3,
//                     name: 'Софія'
//                 },
//                 {
//                     id: 2,
//                     name: 'Ізабела'
//                 },
//                 {
//                     id: 3,
//                     name: 'Софія'
//                 },
//                 {
//                     id: 2,
//                     name: 'Ізабела'
//                 },
//                 {
//                     id: 3,
//                     name: 'Софія'
//                 }
//             ],
//             messages: [{
//                     id: 1,
//                     name: 'Ізабела',
//                     messagesText: 'Привіт! Вже замінив колесо?'
//                 },
//                 {
//                     id: 2,
//                     name: 'Я',
//                     messagesText: 'Привіт. Так вже відремонтував і встановив нові катафоти!'
//                 },
//                 {
//                     id: 3,
//                     name: 'Ізабела',
//                     messagesText: 'Тоді завтра на 10:30 їдемо 20км по маршруту Б.'
//                 },
//                 {
//                     id: 4,
//                     name: 'Я',
//                     messagesText: 'ОК'
//                 }
//             ],
//             newMessageText: ''
//         }
//     }

// }

// window.state = state;

// export const addPost = (postMessage) => {
//     let newPost = {
//         id: 3,
//         message: postMessage
//     };

//     state.content.profilePage.posts.push(newPost);
//     renderEntireTree(state); // перерисовка UI
// };

// export const addMessage = () => {
//     let newMessage = {
//         id: 5,
//         name: 'Я',
//         messagesText: state.content.dialogsPage.newMessageText
//     };

//     state.content.dialogsPage.messages.push(newMessage);
//     state.content.dialogsPage.newMessageText = '';
//     renderEntireTree(state); // перерисовка UI
// };

// //функция обновления текста сообщения
// export const updateMessage = (newMessageText) => {
//     state.content.dialogsPage.newMessageText = newMessageText;
//     renderEntireTree(state); // перерисовка UI
// };

// //функция колбэк
// export const subscribe = (observer) => {
//     renderEntireTree = observer; //паттерн
// };

// export default state;
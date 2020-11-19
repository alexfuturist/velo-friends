let renderEntireTree = () => {
    console.log('state was changed');
};

let state = {
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

}

window.state = state;

export const addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage
    };

    state.content.profilePage.posts.push(newPost);
    renderEntireTree(state); // перерисовка UI
};

export const addMessage = () => {
    let newMessage = {
        id: 5,
        name: 'Я',
        messagesText: state.content.dialogsPage.newMessageText
    };

    state.content.dialogsPage.messages.push(newMessage);
    state.content.dialogsPage.newMessageText = '';
    renderEntireTree(state); // перерисовка UI
};

//функция обновления текста сообщения
export const updateMessage = (newMessageText) => {
    state.content.dialogsPage.newMessageText = newMessageText;
    renderEntireTree(state); // перерисовка UI
};

//функция колбэк
export const subscribe = (observer) => {
    renderEntireTree = observer; //паттерн
};

export default state;
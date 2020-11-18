import {
    renderEntireTree
} from '../render'

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
        }
    }

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage
    };

    state.content.profilePage.posts.push(newPost);
    renderEntireTree(state); // перерисовка UI
};

export let addMessage = (textMessage) => {
    let newMessage = {
        id: 5,
        name: 'Я',
        messagesText: textMessage
    };

    state.content.dialogsPage.messages.push(newMessage);
    renderEntireTree(state); // перерисовка UI
};

export default state;
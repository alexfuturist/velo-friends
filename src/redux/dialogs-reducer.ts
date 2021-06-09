import { DialogType, DialogMessagesType } from './../types/types'
import { reset } from 'redux-form'
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from './redux-store'

const ADD_MESSAGE = 'ADD-MESSAGE'
const REFRESH_CURRENT_TEXT_OF_MESSAGE = 'REFRESH_CURRENT_TEXT_OF_MESSAGE'
const SET_CURRENT_TEXT_OF_MESSAGE = 'SET_CURRENT_TEXT_OF_MESSAGE'

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Михайло',
        },
        {
            id: 2,
            name: 'Віка',
        },
        {
            id: 3,
            name: 'Софія',
        },
        {
            id: 4,
            name: 'Іван',
        },
        {
            id: 5,
            name: 'Клара',
        },
        {
            id: 6,
            name: 'Христина',
        },
        {
            id: 7,
            name: 'Давид',
        },
        {
            id: 8,
            name: 'Ігор',
        },
        {
            id: 9,
            name: 'Інна',
        },
        {
            id: 10,
            name: 'Аліна',
        },
        {
            id: 11,
            name: 'Наталя',
        },
        {
            id: 12,
            name: 'Ірина',
        },
        {
            id: 13,
            name: 'Тетяна',
        },
        {
            id: 14,
            name: 'Володимир',
        },
        {
            id: 15,
            name: 'Віталій',
        },
        {
            id: 16,
            name: 'Олександр',
        },
        {
            id: 17,
            name: 'Валерій',
        },
        {
            id: 18,
            name: 'Святослав',
        },
        {
            id: 19,
            name: 'Петро',
        },
    ] as Array<DialogType>,
    dialogsMessages: [
        {
            id: 0,
            messages: [
                {
                    id: 1,
                    name: 'вело-радник',
                    messagesText:
                        'Виберіть діалог зі списку контактів щоби почати спілкування.',
                },
            ],
            newMessageText: '',
        },
        {
            id: 1,
            messages: [
                {
                    id: 1,
                    name: 'Михайло',
                    messagesText: 'Здаров! Вже замінив колесо?',
                },
                {
                    id: 2,
                    name: 'Я',
                    messagesText: 'Привіт.',
                },
                {
                    id: 3,
                    name: 'Я',
                    messagesText:
                        'Так вже відремонтував і встановив нові катафоти!',
                },
                {
                    id: 4,
                    name: 'Михайло',
                    messagesText:
                        'Тоді завтра на 10:30 їдемо 20км по маршруту Б.',
                },
                {
                    id: 5,
                    name: 'Я',
                    messagesText: 'ОК',
                },
                {
                    id: 6,
                    name: 'Михайло',
                    messagesText: 'До зустрічі.',
                },
            ],
            newMessageText: '',
        },
        {
            id: 2,
            messages: [
                {
                    id: 1,
                    name: 'Віка',
                    messagesText: 'Привіт! Коли їдемо на стадіон?',
                },
                {
                    id: 2,
                    name: 'Я',
                    messagesText:
                        'Привіт. Ще маю трохи повчити react, потім їдемо!',
                },
                {
                    id: 3,
                    name: 'Віка',
                    messagesText: 'Добре, після дощу їдемо 10км по парку.',
                },
            ],
            newMessageText: '',
        },
        {
            id: 3,
            messages: [
                {
                    id: 1,
                    name: 'Софія',
                    messagesText: 'Привіт. А коли змагання на велотреку?',
                },
                {
                    id: 2,
                    name: 'Я',
                    messagesText: 'Здається в суботу.',
                },
                {
                    id: 3,
                    name: 'Я',
                    messagesText: 'але треба перевірити..',
                },
            ],
            newMessageText: '',
        },
        {
            id: 4,
            messages: [
                {
                    id: 1,
                    name: 'Іван',
                    messagesText: 'Друже, в тебе десь був запасний підшипник?',
                },
            ],
            newMessageText: '',
        },
    ] as Array<DialogMessagesType>,
}

type InitialStateType = typeof initialState

const dialogsReducer = (
    state = initialState,
    action: ActionsTypes
): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let dialogsMessagesItemAvaileble = [
                ...state.dialogsMessages.filter(
                    (dm) => dm.id == action.dialogId
                ),
            ]
            let id = +`${dialogsMessagesItemAvaileble[0].messages.length + 1}`
            // let id = +`${Math.max(dialogsMessagesItemAvaileble[0].messages.map( (p)=> p.id ))}`;

            let newMessage = {
                id: +id,
                name: 'Я',
                messagesText: action.newMessageText,
            }

            let dialogsMessagesMockup = {
                id: action.dialogId,
                messages: [newMessage],
                newMessageText: '',
            }

            if (dialogsMessagesItemAvaileble.length > 0) {
                return {
                    ...state,
                    dialogsMessages: [
                        ...state.dialogsMessages.map((dm) => {
                            return dm.id == action.dialogId
                                ? {
                                      ...dm,
                                      messages: [...dm.messages, newMessage],
                                  }
                                : dm
                        }),
                    ],
                }
            } else {
                return {
                    ...state,
                    dialogsMessages: [
                        ...state.dialogsMessages,
                        dialogsMessagesMockup,
                    ],
                }
            }
        }

        case REFRESH_CURRENT_TEXT_OF_MESSAGE: {
            return {
                ...state,
                dialogsMessages: [
                    ...state.dialogsMessages.map((dm) => {
                        return dm.id == action.dialogId
                            ? {
                                  ...dm,
                                  newMessageText: '',
                              }
                            : dm
                    }),
                ],
            }
        }

        case SET_CURRENT_TEXT_OF_MESSAGE: {
            let dialogsMessagesItemAvaileble = [
                ...state.dialogsMessages.filter(
                    (dm) => dm.id == action.dialogId
                ),
            ]

            let dialogsMessagesMockup = {
                id: action.dialogId,
                messages: [],
                newMessageText: action.currentTextOfMessage,
            }

            if (dialogsMessagesItemAvaileble.length > 0) {
                return {
                    ...state,
                    dialogsMessages: [
                        ...state.dialogsMessages.map((dm) => {
                            return dm.id == action.dialogId
                                ? {
                                      ...dm,
                                      newMessageText:
                                          action.currentTextOfMessage,
                                  }
                                : dm
                        }),
                    ],
                }
            } else {
                return {
                    ...state,
                    dialogsMessages: [
                        ...state.dialogsMessages,
                        dialogsMessagesMockup,
                    ],
                }
            }
        }

        default:
            return state
    }
}

//AC Types
type ActionsTypes =
    | AddMessageActionType
    | RefreshCurrentTextOfMessageActionType
    | SetCurrentTextOfMessageActionType

//AC
type AddMessageActionType = {
    type: typeof ADD_MESSAGE
    newMessageText: string
    dialogId: number
}

export const addMessage = (
    newMessageText: string,
    dialogId: number
): AddMessageActionType => ({
    type: ADD_MESSAGE,
    newMessageText: newMessageText,
    dialogId: dialogId,
})

//AC
type RefreshCurrentTextOfMessageActionType = {
    type: typeof REFRESH_CURRENT_TEXT_OF_MESSAGE
    dialogId: number
}

export const refreshCurrentTextOfMessage = (
    dialogId: number
): RefreshCurrentTextOfMessageActionType => ({
    type: REFRESH_CURRENT_TEXT_OF_MESSAGE,
    dialogId: dialogId,
})

//AC
export type SetCurrentTextOfMessageActionType = {
    type: typeof SET_CURRENT_TEXT_OF_MESSAGE
    currentTextOfMessage: string
    dialogId: number
}

export const setCurrentTextOfMessage = (
    currentTextOfMessage: string,
    dialogId: number
): SetCurrentTextOfMessageActionType => ({
    type: SET_CURRENT_TEXT_OF_MESSAGE,
    currentTextOfMessage: currentTextOfMessage,
    dialogId: dialogId,
})

//TC Type
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

//TC
export const addNewMessage =
    (newMessageText: string, dialogId: number): ThunkType =>
    (dispatch) => {
        if (newMessageText.length > 0) {
            dispatch(addMessage(newMessageText, dialogId))
            dispatch(refreshCurrentTextOfMessage(dialogId))
            //@ts-ignore
            dispatch(reset('DialogsAddNewMessage'))
        }
    }

export const resetNewMessageField = (): ThunkType => (dispatch) => {
    //@ts-ignore
    dispatch(reset('DialogsAddNewMessage'))
}

export default dialogsReducer

// //найти объект переписки из массива переписок
// let dialogMessages = {
//     ...state.dialogsMessages.filter(dm => dm.id === action.dialogId)
// };

// let id = +`${Math.max(...state.dialogsMessages
//         .filter( messagesItems => messagesItems.id === action.dialogId)
//         .map( (p)=> p.id ))+1}`;

// const newProjects = projects.map(p =>
//     p.value === 'jquery-ui' ?
//     {
//         ...p,
//         desc: 'new description'
//     } :
//     p
// );

// return {
//     ...state,
//     dialogsMessages: [...state.dialogsMessages.map((dm) => {
//         return (
//             dm.id == action.dialogId ? {
//                 ...dm,
//                 messages: [...dm.messages, newMessage],
//             } :
//             dm
//         )
//     })]
// };

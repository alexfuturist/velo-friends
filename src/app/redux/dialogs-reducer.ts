import { DialogType, DialogMessagesType } from "src/shared/types";
import { type FormAction, reset } from "redux-form";
import { BaseLocalThunkType, InferActionsTypes } from "./redux-store";

//State
type InitialStateType = typeof initialState;

const initialState = {
  dialogs: [
    {
      id: 1,
      name: "Михайло",
    },
    {
      id: 2,
      name: "Віка",
    },
    {
      id: 3,
      name: "Софія",
    },
    {
      id: 4,
      name: "Іван",
    },
    {
      id: 5,
      name: "Клара",
    },
    {
      id: 6,
      name: "Христина",
    },
    {
      id: 7,
      name: "Давид",
    },
    {
      id: 8,
      name: "Ігор",
    },
    {
      id: 9,
      name: "Інна",
    },
    {
      id: 10,
      name: "Аліна",
    },
    {
      id: 11,
      name: "Наталя",
    },
    {
      id: 12,
      name: "Ірина",
    },
    {
      id: 13,
      name: "Тетяна",
    },
    {
      id: 14,
      name: "Володимир",
    },
    {
      id: 15,
      name: "Віталій",
    },
    {
      id: 16,
      name: "Олександр",
    },
    {
      id: 17,
      name: "Валерій",
    },
    {
      id: 18,
      name: "Святослав",
    },
    {
      id: 19,
      name: "Петро",
    },
  ] as Array<DialogType>,
  dialogsMessages: [
    {
      id: 0,
      messages: [
        {
          id: 1,
          name: "вело-радник",
          messagesText: "Виберіть діалог зі списку контактів щоби почати спілкування.",
        },
      ],
      newMessageText: "",
    },
    {
      id: 1,
      messages: [
        {
          id: 1,
          name: "Михайло",
          messagesText: "Здаров! Вже замінив колесо?",
        },
        {
          id: 2,
          name: "Я",
          messagesText: "Привіт.",
        },
        {
          id: 3,
          name: "Я",
          messagesText: "Так вже відремонтував і встановив нові катафоти!",
        },
        {
          id: 4,
          name: "Михайло",
          messagesText: "Тоді завтра на 10:30 їдемо 20км по маршруту Б.",
        },
        {
          id: 5,
          name: "Я",
          messagesText: "ОК",
        },
        {
          id: 6,
          name: "Михайло",
          messagesText: "До зустрічі.",
        },
      ],
      newMessageText: "",
    },
    {
      id: 2,
      messages: [
        {
          id: 1,
          name: "Віка",
          messagesText: "Привіт! Коли їдемо на стадіон?",
        },
        {
          id: 2,
          name: "Я",
          messagesText: "Привіт. Ще маю трохи повчити react, потім їдемо!",
        },
        {
          id: 3,
          name: "Віка",
          messagesText: "Добре, після дощу їдемо 10км по парку.",
        },
      ],
      newMessageText: "",
    },
    {
      id: 3,
      messages: [
        {
          id: 1,
          name: "Софія",
          messagesText: "Привіт. А коли змагання на велотреку?",
        },
        {
          id: 2,
          name: "Я",
          messagesText: "Здається в суботу.",
        },
        {
          id: 3,
          name: "Я",
          messagesText: "але треба перевірити..",
        },
      ],
      newMessageText: "",
    },
    {
      id: 4,
      messages: [
        {
          id: 1,
          name: "Іван",
          messagesText: "Друже, в тебе десь був запасний підшипник?",
        },
      ],
      newMessageText: "",
    },
  ] as Array<DialogMessagesType>,
};

//Reducer
const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case "VF/DIALOGS/ADD_MESSAGE": {
      const dialogsMessagesItemAvaileble = [
        ...state.dialogsMessages.filter((dm) => dm.id == action.dialogId),
      ];
      const id = +`${dialogsMessagesItemAvaileble[0].messages.length + 1}`;
      // let id = +`${Math.max(dialogsMessagesItemAvaileble[0].messages.map( (p)=> p.id ))}`;

      const newMessage = {
        id: +id,
        name: "Я",
        messagesText: action.newMessageText,
      };

      const dialogsMessagesMockup = {
        id: action.dialogId,
        messages: [newMessage],
        newMessageText: "",
      };

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
                : dm;
            }),
          ],
        };
      } else {
        return {
          ...state,
          dialogsMessages: [...state.dialogsMessages, dialogsMessagesMockup],
        };
      }
    }

    case "VF/DIALOGS/REFRESH_CURRENT_TEXT_OF_MESSAGE": {
      return {
        ...state,
        dialogsMessages: [
          ...state.dialogsMessages.map((dm) => {
            return dm.id == action.dialogId
              ? {
                  ...dm,
                  newMessageText: "",
                }
              : dm;
          }),
        ],
      };
    }

    case "VF/DIALOGS/SET_CURRENT_TEXT_OF_MESSAGE": {
      const dialogsMessagesItemAvaileble = [
        ...state.dialogsMessages.filter((dm) => dm.id == action.dialogId),
      ];

      const dialogsMessagesMockup = {
        id: action.dialogId,
        messages: [],
        newMessageText: action.currentTextOfMessage,
      };

      if (dialogsMessagesItemAvaileble.length > 0) {
        return {
          ...state,
          dialogsMessages: [
            ...state.dialogsMessages.map((dm) => {
              return dm.id == action.dialogId
                ? {
                    ...dm,
                    newMessageText: action.currentTextOfMessage,
                  }
                : dm;
            }),
          ],
        };
      } else {
        return {
          ...state,
          dialogsMessages: [...state.dialogsMessages, dialogsMessagesMockup],
        };
      }
    }

    default:
      return state;
  }
};

//AC Types
type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
  addMessage: (newMessageText: string, dialogId: number) =>
    ({
      type: "VF/DIALOGS/ADD_MESSAGE",
      newMessageText: newMessageText,
      dialogId: dialogId,
    }) as const,
  refreshCurrentTextOfMessage: (dialogId: number) =>
    ({
      type: "VF/DIALOGS/REFRESH_CURRENT_TEXT_OF_MESSAGE",
      dialogId: dialogId,
    }) as const,
  setCurrentTextOfMessage: (currentTextOfMessage: string, dialogId: number) =>
    ({
      type: "VF/DIALOGS/SET_CURRENT_TEXT_OF_MESSAGE",
      currentTextOfMessage: currentTextOfMessage,
      dialogId: dialogId,
    }) as const,
};

//TC Type
type LocalThunkType = BaseLocalThunkType<ActionsTypes | FormAction>;

export const addNewMessage =
  (newMessageText: string, dialogId: number): LocalThunkType =>
  (dispatch) => {
    if (newMessageText.length > 0) {
      dispatch(actions.addMessage(newMessageText, dialogId));
      dispatch(actions.refreshCurrentTextOfMessage(dialogId));
      dispatch(reset("DialogsAddNewMessage"));
    }
  };

export const resetNewMessageField = (): LocalThunkType => (dispatch) => {
  dispatch(reset("DialogsAddNewMessage"));
};

export default dialogsReducer;

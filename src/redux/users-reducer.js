const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            //возвращаем объект (новый state)
            return {
                //cкопировали state
                ...state,
                //в него пушим массив users 
                //(перезаписываем с изменениями исходный)
                users: state.users.map(u => {
                    //если id пользователя совпадает
                    if (u.id === action.userId) {
                        //копируем объект пользователя поверхностно
                        //внутри него меняем флаг подписки
                        //и возвращаем в новый массив
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    //иначе возвращаем исходный элемент в новый массив users
                    return u;
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }

                    return u
                })
            }
        }

        case SET_USERS: {
            return {
                ...state,
                //добавляем новых юзеров из экшена (склеиваем два массива)
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

//создатели событий (объектов событий)
export const followAC = (userId) => ({
    type: FOLLOW,
    userId
});

export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId
});

export const setUsersAC = (users) => ({
    type: SET_USERS,
    users
});

export default usersReducer;
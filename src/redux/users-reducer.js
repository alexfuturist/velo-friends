const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 0
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
                users: [...action.users]
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
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

export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

export const setTotalUsersCountAC = (totalCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
})

export default usersReducer;
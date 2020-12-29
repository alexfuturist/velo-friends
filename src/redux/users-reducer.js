const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: false, //preloader
    followingInProgress: []
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

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }


        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.followingInProgress ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state;
    }
}

//создатели событий (объектов событий)
export const follow = (userId) => ({
    type: FOLLOW,
    userId
});

export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users
});

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

export const setTotalUsersCount = (totalCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});

export const toggleFollowingInProgress = (followingInProgress, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    followingInProgress,
    userId
});

export default usersReducer;
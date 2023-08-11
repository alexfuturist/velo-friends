// import { ResultCodes } from './../api/api';
// import { UserType } from '../shared/types';
import { UserType } from 'src/shared/types';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { usersAPI } from 'src/shared/api/users-api';
import { ResultCodes } from 'src/shared/api/api';
// import { usersAPI } from '../api/users-api';

//State
type InitialStateType = typeof initialState;

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  currentPage: 1,
  totalUsersCount: 0,
  filter: {
    term: '',
    friend: null as null | boolean,
  },
  isFetching: false, //preloader
  followingInProgress: [] as Array<number>, //array of users ids
};

export type filterType = typeof initialState.filter;

//Reducer
const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'VF/USERS/FOLLOW': {
      //возвращаем объект (новый state)
      return {
        //cкопировали state
        ...state,
        //в него пушим массив users
        //(перезаписываем с изменениями исходный)
        users: state.users.map((u) => {
          //если id пользователя совпадает
          if (u.id === action.userId) {
            //копируем объект пользователя поверхностно
            //внутри него меняем флаг подписки
            //и возвращаем в новый массив
            return {
              ...u,
              followed: true,
            };
          }
          //иначе возвращаем исходный элемент в новый массив users
          return u;
        }),
      };
    }

    case 'VF/USERS/UNFOLLOW': {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: false,
            };
          }

          return u;
        }),
      };
    }

    case 'VF/USERS/SET_USERS': {
      return {
        ...state,
        //добавляем новых юзеров из экшена (склеиваем два массива)
        users: [...action.users],
      };
    }

    case 'VF/USERS/SET_CURRENT_PAGE': {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }

    case 'VF/USERS/SET_TOTAL_USERS_COUNT': {
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    }

    case 'VF/USERS/SET_FILTER': {
      return {
        ...state,
        filter: action.payload,
      };
    }

    case 'VF/USERS/TOGGLE_IS_FETCHING': {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    case 'VF/USERS/TOGGLE_FOLLOWING_IN_PROGRESS': {
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }

    default:
      return state;
  }
};

//AC Types
type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
  followSucces: (userId: number) =>
    ({
      type: 'VF/USERS/FOLLOW',
      userId,
    }) as const,
  unfollowSucces: (userId: number) =>
    ({
      type: 'VF/USERS/UNFOLLOW',
      userId,
    }) as const,
  setUsers: (users: Array<UserType>) =>
    ({
      type: 'VF/USERS/SET_USERS',
      users,
    }) as const,
  setCurrentPage: (currentPage: number) =>
    ({
      type: 'VF/USERS/SET_CURRENT_PAGE',
      currentPage,
    }) as const,
  setTotalUsersCount: (totalCount: number) =>
    ({
      type: 'VF/USERS/SET_TOTAL_USERS_COUNT',
      totalCount,
    }) as const,
  setFilter: (filter: filterType) =>
    ({
      type: 'VF/USERS/SET_FILTER',
      payload: filter,
    }) as const,
  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: 'VF/USERS/TOGGLE_IS_FETCHING',
      isFetching,
    }) as const,
  toggleFollowingInProgress: (followingInProgress: boolean, userId: number) =>
    ({
      type: 'VF/USERS/TOGGLE_FOLLOWING_IN_PROGRESS',
      followingInProgress,
      userId,
    }) as const,
};

//TC type
type ThunkType = BaseThunkType<ActionsTypes>;

export const requestUsers =
  (pageNumber: number, pageSize: number, filter: filterType): ThunkType =>
  async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(pageNumber));
    dispatch(actions.setFilter(filter));

    const response = await usersAPI.getUsers(pageNumber, pageSize, filter.term, filter.friend);
    console.log(response);

    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(response.items));
    dispatch(actions.setTotalUsersCount(response.totalCount));
  };

export const unfollow =
  (userId: number): ThunkType =>
  async (dispatch) => {
    dispatch(actions.toggleFollowingInProgress(true, userId));

    const response = await usersAPI.unfollow(userId);

    dispatch(actions.toggleFollowingInProgress(false, userId));
    if (response.resultCode == ResultCodes.Success) {
      dispatch(actions.unfollowSucces(userId));
    }
  };

export const follow =
  (userId: number): ThunkType =>
  async (dispatch) => {
    dispatch(actions.toggleFollowingInProgress(true, userId));

    const response = await usersAPI.follow(userId);

    dispatch(actions.toggleFollowingInProgress(false, userId));
    if (response.resultCode == ResultCodes.Success) {
      dispatch(actions.followSucces(userId));
    }
  };

export default usersReducer;

import { UserType } from '../types/types';
import { BaseThunkType, InferActionsTypes } from './redux-store';

//State
type InitialStateType = typeof initialState;

const initialState = {
  users: [] as UserType[],
  pageSize: 5 as number,
  currentPage: 1 as number,
  totalUsersCount: 0 as number,
  isFetching: false, //preloader
  followingInProgress: [] as number[],
};

//Reducer
const starUsersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'VF/STAR-USERS/FOLLOW': {
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

    case 'VF/STAR-USERS/UNFOLLOW': {
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

    case 'VF/STAR-USERS/SET_USERS_STARS': {
      return {
        ...state,
        //добавляем новых юзеров из экшена (склеиваем два массива)
        users: [...action.users],
      };
    }

    case 'VF/STAR-USERS/TOGGLE_IS_FETCHING': {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    case 'VF/STAR-USERS/TOGGLE_FOLLOWING_IN_PROGRESS': {
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
      type: 'VF/STAR-USERS/FOLLOW',
      userId,
    }) as const,
  unfollowSucces: (userId: number) =>
    ({
      type: 'VF/STAR-USERS/UNFOLLOW',
      userId,
    }) as const,
  setUsersStars: (users: Array<UserType>) =>
    ({
      type: 'VF/STAR-USERS/SET_USERS_STARS',
      users,
    }) as const,
  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: 'VF/STAR-USERS/TOGGLE_IS_FETCHING',
      isFetching,
    }) as const,
  toggleFollowingInProgress: (followingInProgress: boolean, userId: number) =>
    ({
      type: 'VF/STAR-USERS/TOGGLE_FOLLOWING_IN_PROGRESS',
      followingInProgress,
      userId,
    }) as const,
};

//TC type
type ThunkType = BaseThunkType<ActionsTypes>;

export const unfollow =
  (userId: number): ThunkType =>
  async (dispatch) => {
    dispatch(actions.toggleFollowingInProgress(true, userId));
    //side-effect
    const response = true;

    dispatch(actions.toggleFollowingInProgress(false, userId));
    if (response) {
      dispatch(actions.unfollowSucces(userId));
    }
  };

export const follow =
  (userId: number): ThunkType =>
  async (dispatch) => {
    dispatch(actions.toggleFollowingInProgress(true, userId));
    //side-effect
    const response = true;

    dispatch(actions.toggleFollowingInProgress(false, userId));
    if (response) {
      dispatch(actions.followSucces(userId));
    }
  };

export default starUsersReducer;

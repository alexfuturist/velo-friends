import { AppStateType } from './redux-store';

//USERS
export const getUsers = (state: AppStateType) => {
  return state.usersPage.users;
};

export const getPageSize = (state: AppStateType) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state: AppStateType) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage;
};

export const getFilter = (state: AppStateType) => {
  return state.usersPage.filter;
};

export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state: AppStateType) => {
  return state.usersPage.followingInProgress;
};

//STAR-USERS
export const getStars = (state: AppStateType) => {
  return state.starUsersPage.users;
};

export const getIsFetchingStars = (state: AppStateType) => {
  return state.starUsersPage.isFetching;
};

export const getFollowingInProgressStars = (state: AppStateType) => {
  return state.starUsersPage.followingInProgress;
};

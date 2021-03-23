export const getUsers = (state) => {
    return state.usersPage.users
};

export const getPageSize = (state) => {
    return state.usersPage.pageSize
};

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
};

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
};

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
};

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
};

//
export const getStars = (state) => {
    return state.starUsersPage.users
};

export const getIsFetchingStars = (state) => {
    return state.starUsersPage.isFetching
};

export const getFollowingInProgressStars = (state) => {
    return state.starUsersPage.followingInProgress
};
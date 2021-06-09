import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../../../hoc/AuthRedirect'
import { AppStateType } from '../../../../redux/redux-store'
import {
    followSucces,
    unfollowSucces,
    toggleFollowingInProgress,
    requestUsers,
    updateUsers,
    unfollow,
    follow,
} from '../../../../redux/users-reducer'
import {
    getUsers,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress,
} from '../../../../redux/users-selectors'
import { UserType } from '../../../../types/types'
import { Preloader } from '../../../Common/Preloader'
import Users from './Users'

type PropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]

    followSucces: (userId: number) => void
    unfollowSucces: (userId: number) => void
    // toggleFollowingInProgress: (followingInProgress: number[], userId: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
    updateUsers: (pageNumber: number, pageSize: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

//внутренний контейнер
class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.updateUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    unfollowSucces={this.props.unfollowSucces}
                    followSucces={this.props.followSucces}
                    followingInProgress={this.props.followingInProgress}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                />
            </div>
        )
    }
}

//внешний контейнер
let mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        followSucces,
        unfollowSucces,
        toggleFollowingInProgress,
        requestUsers,
        updateUsers,
        unfollow,
        follow,
    }),
    withAuthRedirect
)(UsersContainer) as React.ComponentType

import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../../../hoc/AuthRedirect'
import { AppStateType } from '../../../../redux/redux-store'
import {
    followSucces,
    unfollowSucces,
    toggleFollowingInProgress,
    unfollow,
    follow,
    setUsersStars,
} from '../../../../redux/star-users-reducer'
import {
    getStars,
    getIsFetchingStars,
    getFollowingInProgressStars,
} from '../../../../redux/users-selectors'
import { Preloader } from '../../../Common/Preloader'
import StarUsers from './StarUsers'

type PropsType = {
    users: any[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]

    followSucces: (userId: number) => void
    unfollowSucces: (userId: number) => void
    toggleFollowingInProgress: (
        followingInProgress: number[],
        userId: number
    ) => void
    requestUsers: (currentPage: number, pageSize: number) => void
    updateUsers: (pageNumber: number, pageSize: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
	setUsersStars: (users: any) => void
}

//внутренний контейнер
class StarUsersContainer extends React.Component<PropsType> {
    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader /> : null}
                <StarUsers
                    users={this.props.users}
                    unfollowSucces={this.props.unfollowSucces}
                    followSucces={this.props.followSucces}
                    // followingInProgress={this.props.followingInProgress}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    setUsersStars={this.props.setUsersStars}
                />
            </div>
        )
    }
}

//внешний контейнер
let mapStateToProps = (state: AppStateType) => {
    return {
        users: getStars(state),
        isFetching: getIsFetchingStars(state),
        followingInProgress: getFollowingInProgressStars(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        followSucces,
        unfollowSucces,
        toggleFollowingInProgress,
        unfollow,
        follow,
        setUsersStars,
    }),
    withAuthRedirect
)(StarUsersContainer) as React.ComponentType

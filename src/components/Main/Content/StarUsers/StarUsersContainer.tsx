import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../../../hoc/AuthRedirect'
import { AppStateType } from '../../../../redux/redux-store'
import { unfollow, follow, actions } from '../../../../redux/star-users-reducer'
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
        unfollow,
        follow,
        setUsersStars: actions.setUsersStars,
    }),
    withAuthRedirect
)(StarUsersContainer) as React.ComponentType

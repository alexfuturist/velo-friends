import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../../hoc/AuthRedirect';
import {
  followSucces,
  unfollowSucces,
  toggleFollowingInProgress,
  getUsers,
  updateUsers,
  unfollow,
  follow
} from '../../../../redux/users-reducer';
import Preloader from '../../../Common/Preloader/Preloader';
import Users from './Users';


//внутренний контейнер
class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.updateUsers(pageNumber, this.props.pageSize);
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

};


//внешний контейнер
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
};


let withRedirect = withAuthRedirect (UsersContainer)

export default connect(mapStateToProps,
  {
    followSucces,
    unfollowSucces,
    toggleFollowingInProgress,
    getUsers,
    updateUsers,
    unfollow,
    follow
  }
)(withRedirect);
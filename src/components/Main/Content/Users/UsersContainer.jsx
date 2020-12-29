import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow,
  toggleFollowingInProgress
} from '../../../../redux/users-reducer';
import Preloader from '../../../Common/Preloader/Preloader';
import Users from './Users';
import { usersAPI } from '../../../../api/api';


//внутренний контейнер
class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);

    //side-effect
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);

    //side-effect
    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
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
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
          toggleFollowingInProgress={this.props.toggleFollowingInProgress}
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

export default connect(mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingInProgress
  }
)(UsersContainer);
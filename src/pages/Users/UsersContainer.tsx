import { connect } from "react-redux";
import { compose } from "redux";
// import { withAuthRedirect } from '../../../../hoc/AuthRedirect';
import { AppStateType } from "src/app/redux/redux-store";
import { requestUsers, unfollow, follow, filterType } from "src/app/redux/users-reducer";
// import {
//   getUsers,
//   getPageSize,
//   getTotalUsersCount,
//   getCurrentPage,
//   getIsFetching,
//   getFollowingInProgress,
//   getFilter,
// } from '../../../../redux/users-selectors';
// import { UserType } from '../../../../shared/types';
// import { Preloader } from '../../../../shared/ui/Preloader';
import Users from "./Users";
import { Preloader } from "src/shared/ui/Preloader";
import {
  getCurrentPage,
  getFilter,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "src/app/redux/users-selectors";
import { withAuthRedirect } from "src/shared/lib/hoc/AuthRedirect";
import { UserType } from "src/shared/types";
import React from "react";

type PropsType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  filter: filterType;
  isFetching: boolean;
  followingInProgress: number[];

  requestUsers: (pageNumber: number, pageSize: number, filter: filterType) => void;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
};

//внутренний контейнер
class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize, this.props.filter);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.requestUsers(pageNumber, this.props.pageSize, this.props.filter);
  };

  onFilterChanged = (filter: filterType) => {
    this.props.requestUsers(1, this.props.pageSize, filter);
  };

  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress}
          onPageChanged={this.onPageChanged}
          onFilterChanged={this.onFilterChanged}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          isFetching={this.props.isFetching}
        />
      </div>
    );
  }
}

//внешний контейнер
const mapStateToProps = (state: AppStateType) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    filter: getFilter(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    requestUsers,
    unfollow,
    follow,
  }),
  withAuthRedirect,
)(UsersContainer) as React.ComponentType;

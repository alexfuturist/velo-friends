import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { AppStateType } from "src/app/redux/redux-store";
import { unfollow, follow, actions } from "src/app/redux/star-users-reducer";
import StarUsers from "./StarUsers";
import { withAuthRedirect } from "src/shared/lib/hoc/AuthRedirect";
import { Preloader } from "src/shared/ui/Preloader";
import {
  getFollowingInProgressStars,
  getIsFetchingStars,
  getStars,
} from "src/app/redux/users-selectors";

type PropsType = {
  users: any[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: number[];

  toggleFollowingInProgress: (followingInProgress: number[], userId: number) => void;
  requestUsers: (currentPage: number, pageSize: number) => void;
  updateUsers: (pageNumber: number, pageSize: number) => void;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
  setUsersStars: (users: any) => void;
};

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
    );
  }
}

//внешний контейнер
const mapStateToProps = (state: AppStateType) => {
  return {
    users: getStars(state),
    isFetching: getIsFetchingStars(state),
    followingInProgress: getFollowingInProgressStars(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    unfollow,
    follow,
    setUsersStars: actions.setUsersStars,
  }),
  withAuthRedirect,
)(StarUsersContainer) as React.ComponentType;

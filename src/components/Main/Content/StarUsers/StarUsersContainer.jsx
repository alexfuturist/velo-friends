import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../../hoc/AuthRedirect';
import {
  followSucces,
  unfollowSucces,
  toggleFollowingInProgress,
  unfollow,
  follow,
  setUsersStars
} from '../../../../redux/star-users-reducer';
import {
  getStars,
  getIsFetchingStars,
  getFollowingInProgressStars
} from '../../../../redux/users-selectors';
import Preloader from '../../../Common/Preloader/Preloader';
import StarUsers from './StarUsers';


//внутренний контейнер
class StarUsersContainer extends React.Component {


  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}
        <StarUsers
          users={this.props.users}
          unfollowSucces={this.props.unfollowSucces}
          followSucces={this.props.followSucces}
          followingInProgress={this.props.followingInProgress}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          setUsersStars={this.props.setUsersStars}
        />
      </div>
    )
  }

};


//внешний контейнер
let mapStateToProps = (state) => {
  return {
    users: getStars(state),
    isFetching: getIsFetchingStars(state),
    followingInProgress: getFollowingInProgressStars(state)
  }
};


export default compose(
  connect(mapStateToProps,
    {
      followSucces,
      unfollowSucces,
      toggleFollowingInProgress,
      unfollow,
      follow,
      setUsersStars
    }
  ),
  withAuthRedirect
)(StarUsersContainer);
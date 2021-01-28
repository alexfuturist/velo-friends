import React from 'react';
import { connect } from 'react-redux';
import { addPost, updatePost, setUserProfile, getUserProfile, getUserStatus, updateUserStatus } from '../../../../redux/profile-reducer';
import Profile from './Profile';

import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../../hoc/AuthRedirect';
import { compose } from 'redux';


//внутренний контейнер
class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    console.log(userId);
    if (!userId) {
      userId = 13211;
    }
    console.log(userId);

    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <Profile {...this.props} />
    )
  }
}


//наиболее внешний контейнер
let mapStateToProps = (state) => {
  return {
    profileInfo: state.profilePage.profileInfo,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
};


export default compose (
  connect(mapStateToProps,
    {
      addPost,
      updatePost,
      setUserProfile,
      getUserProfile,
      getUserStatus,
      updateUserStatus
    }
  ),
  withRouter,
  withAuthRedirect
) (ProfileContainer);
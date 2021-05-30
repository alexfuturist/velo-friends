import React from 'react';
import { connect } from 'react-redux';
import {
  addNewPost,
  setUserProfile,
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  updatePhoto,
  saveProfile,
  deletePost,
  updatePost,
  updatePostMode
} from '../../../../redux/profile-reducer';
import Profile from './Profile';

import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../../hoc/AuthRedirect';
import { compose } from 'redux';


//внутренний контейнер
class ProfileContainer extends React.Component <any, any> {

  refreshProfile() {
    // debugger

    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.authorizedUserId;
    }

    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }


  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile {...this.props} isOwner={!this.props.match.params.userId} />
    )
  }
}


//
let mapStateToProps = (state) => {
  return {
    profileInfo: state.profilePage.profileInfo,
    status: state.profilePage.status,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    isUpdatePostMode: state.profilePage.isUpdatePostMode
  }
};

export default compose(
  connect(mapStateToProps,
    {
      addNewPost,
      setUserProfile,
      getUserProfile,
      getUserStatus,
      updateUserStatus,
      updatePhoto,
      saveProfile,
      deletePost,
      updatePost,
      updatePostMode
    }
  ),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
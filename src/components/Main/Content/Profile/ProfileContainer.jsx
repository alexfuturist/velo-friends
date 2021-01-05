import React from 'react';
import { connect } from 'react-redux';
import { addPost, updatePost, setUserProfile, getUserProfile } from '../../../../redux/profile-reducer';
import Profile from './Profile';

import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../../hoc/AuthRedirect';
import { compose } from 'redux';


//внутренний контейнер
class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    this.props.getUserProfile(userId);
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
      getUserProfile
    }
  ),
  withRouter,
  withAuthRedirect
) (ProfileContainer);
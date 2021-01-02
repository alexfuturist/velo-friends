import React from 'react';
import { connect } from 'react-redux';
import { addPost, updatePost, setUserProfile, getUserProfile } from '../../../../redux/profile-reducer';
import Profile from './Profile';

import { Redirect, withRouter } from 'react-router-dom';
import { profileAPI } from '../../../../api/api';


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
    if(!this.props.isAuth) return <Redirect to="login"/>

    return (
      <Profile {...this.props} />
    )
  }
}


//внешний контейнер
let mapStateToProps = (state) => {
  return {
    profileInfo: state.profilePage.profileInfo,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    isAuth: state.auth.isAuth
  }
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,
  {
    addPost,
    updatePost,
    setUserProfile,
    getUserProfile
  }
)(WithUrlDataContainerComponent);
import React from 'react';
import { connect } from 'react-redux';
import { addPost, updatePost, setUserProfile } from '../../../../redux/profile-reducer';
import Profile from './Profile';

import * as axios from 'axios';
import { withRouter } from 'react-router-dom';


//внутренний контейнер
class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    axios
      .get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
      .then( response => {
        this.props.setUserProfile(response.data);
      })
  }

  render() {
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
    newPostText: state.profilePage.newPostText
  }
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,
  {
    addPost,
    updatePost,
    setUserProfile
  }
)(WithUrlDataContainerComponent);
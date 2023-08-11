import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  addNewPost,
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  updatePhoto,
  saveProfile,
  deletePost,
  updatePost,
  actions,
} from 'src/app/redux/profile-reducer';
import Profile from './Profile';

import { withRouter } from 'react-router-dom';
// import { withAuthRedirect } from '../../../../hoc/AuthRedirect';
import { compose } from 'redux';
import { PostType, ProfileInfoType } from 'src/shared/types';
import { withAuthRedirect } from 'src/shared/lib/hoc/AuthRedirect';
// import { AppStateType } from '../../../../redux/redux-store';
// import { PostType, ProfileInfoType } from '../../../../shared/types';

type MapStatePropsType = {
  profileInfo: ProfileInfoType;
  status: string | null;
  posts: PostType[];
  // newPostText: state.profilePage.newPostText
  authorizedUserId: number | null;
  isAuth: boolean;
  isUpdatePostMode: boolean;
  match?: any;
};

type MapDispatchPropsType = {
  addNewPost: (newPostText: string) => void;
  setUserProfile: () => void;
  getUserProfile: (userId: number) => void;
  getUserStatus: (userId: number) => void;
  updateUserStatus: (status: string) => void;
  updatePhoto: () => void;
  saveProfile: (profile: ProfileInfoType) => void;
  deletePost: (id: number) => void;
  updatePost: () => void;
  updatePostMode: () => void;
};

type PropsType = MapStatePropsType & MapDispatchPropsType;

// //внутренний контейнер
// const ProfileContainer = (props: any) => {
//     const refreshProfile = () => {
//         // debugger

//         let userId = props.match.params.userId

//         if (!userId) {
//             userId = props.authorizedUserId
//         }

//         props.getUserProfile(userId)
//         props.getUserStatus(userId)
//     }

//     useEffect(() => {
//         refreshProfile()
//     }, [])

//     useEffect(() => {
//         refreshProfile()
//     }, [props.match.params.userId])

//     return <Profile {...props} isOwner={!props.match.params.userId} />
// }

//внутренний контейнер
class ProfileContainer extends React.Component<PropsType> {
  refreshProfile() {
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

  componentDidUpdate(prevProps: PropsType) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
      />
    );
  }
}

//
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profileInfo: state.profilePage.profileInfo,
    status: state.profilePage.status,
    posts: state.profilePage.posts,
    // newPostText: state.profilePage.newPostText,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    isUpdatePostMode: state.profilePage.isUpdatePostMode,
  };
};

// <MapStatePropsType, MapDispatchPropsType, {}, AppStateType>

export default compose(
  connect(mapStateToProps, {
    setUserProfile: actions.setUserProfile,
    updatePostMode: actions.updatePostMode,
    addNewPost,
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    updatePhoto,
    saveProfile,
    deletePost,
    updatePost,
  }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer) as React.ComponentType;

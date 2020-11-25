import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updatePostActionCreator } from '../../../../redux/profile-reducer';
import Profile from './Profile';


let MapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
};

let MapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator()); //вызываем функцию добавления нового поста
    },
    updatePost: (text) => {
      dispatch(updatePostActionCreator(text)); //вызываем функцию обновления вводимого текста
    }
  }
};

const ProfileContainer = connect(MapStateToProps, MapDispatchToProps) (Profile);

export default ProfileContainer;
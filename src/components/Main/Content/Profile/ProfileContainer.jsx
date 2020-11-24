import React from 'react';
import { addPostActionCreator, updatePostActionCreator } from '../../../../redux/profile-reducer';
import Profile from './Profile';


const ProfileContainer = (props) => {
  
  let state = props.store.getState();
  let newPostText = state.profilePage.newPostText;
  let posts = state.profilePage.posts;


  //колбэк функция 
  let addPost = () => {
    props.store.dispatch(addPostActionCreator()); //вызываем функцию добавления нового поста
  };

  //колбэк функция
  let updatePost = (text) => {
    props.store.dispatch(updatePostActionCreator(text)); //вызываем функцию обновления вводимого текста
  };


  return (
    <Profile addPost={addPost} updatePost={updatePost} newPostText={newPostText} posts={posts} />
  );
}

export default ProfileContainer;
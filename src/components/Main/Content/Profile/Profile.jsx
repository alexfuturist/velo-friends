import React from 'react';
import s from './Profile.module.css';

import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
  return (
    <section className={s.profile}>
      <ProfileInfo profileInfo={props.profileInfo}/>
      <NewPost updatePost={props.updatePost} addPost={props.addPost} newPostText={props.newPostText} />
      <Posts posts={props.posts} />
    </section>
  );
}

export default Profile;
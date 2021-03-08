import React from 'react';
import s from './Profile.module.css';

import AddNewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
  return (
    <section className={s.profile}>
      <ProfileInfo profileInfo={props.profileInfo}
                   getUserStatus={props.getUserStatus}
                   updateUserStatus={props.updateUserStatus}
                   isOwner={props.isOwner}
                   updatePhoto={props.updatePhoto}
                   saveProfile={props.saveProfile} />
      <AddNewPost addPost={props.addPost} newPostText={props.newPostText} />
      <Posts posts={props.posts} />
    </section>
  );
}

export default Profile;
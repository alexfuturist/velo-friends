import React, { useEffect } from 'react';
import s from './Profile.module.css';

import AddNewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
  useEffect( () => {props.updatePostMode(false)}, [] )

  return (
    <section className={s.profile}>
      <ProfileInfo
        profileInfo={props.profileInfo}
        status={props.status}
        getUserStatus={props.getUserStatus}
        updateUserStatus={props.updateUserStatus}
        isOwner={props.isOwner}
        updatePhoto={props.updatePhoto}
        saveProfile={props.saveProfile} />
      {props.isOwner &&
        <div>
          <AddNewPost
            addNewPost={props.addNewPost}
            updatePostMode={props.profileInfo.updatePostMode}
            isUpdatePostMode={props.isUpdatePostMode}
          />
          <Posts
            posts={props.posts}
            profileInfo={props.profileInfo}
            deletePost={props.deletePost}
            updatePost={props.updatePost}
            updatePostMode={props.updatePostMode}
            isUpdatePostMode={props.isUpdatePostMode}
          />
        </div>
      }

    </section>
  );
}

export default Profile;
import React, { useEffect } from 'react';
import s from './Profile.module.css';

import AddNewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { PostType, ProfileInfoType } from 'src/shared/types';

type PropsType = {
  profileInfo: ProfileInfoType;
  status: string | null;
  posts: PostType[];
  // newPostText: state.profilePage.newPostText
  authorizedUserId: number | null;
  isAuth: boolean;
  isUpdatePostMode: boolean;
  isOwner: boolean;

  addNewPost: (newPostText: string) => void;
  setUserProfile: () => void;
  getUserProfile: (userId: number) => void;
  getUserStatus: (userId: number) => void;
  updateUserStatus: (status: string) => void;
  updatePhoto: () => void;
  saveProfile: (profile: ProfileInfoType) => void;
  deletePost: (id: number) => void;
  updatePost: (id: number, message: string) => void;
  updatePostMode: (flag: boolean) => void;
};

const Profile: React.FC<PropsType> = (props) => {
  useEffect(() => {
    props.updatePostMode(false);
  }, []);

  return (
    <section className={s.profile}>
      <ProfileInfo
        profileInfo={props.profileInfo}
        status={props.status}
        getUserStatus={props.getUserStatus}
        updateUserStatus={props.updateUserStatus}
        isOwner={props.isOwner}
        updatePhoto={props.updatePhoto}
        saveProfile={props.saveProfile}
      />
      {props.isOwner && (
        <div>
          <AddNewPost
            addNewPost={props.addNewPost}
            updatePostMode={props.updatePostMode}
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
      )}
    </section>
  );
};

export default Profile;

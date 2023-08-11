import React, { ChangeEvent, useState } from 'react';
import s from './ProfileInfo.module.scss';
import userPhotoDefault from '../../../../../assets/images/user_default.png';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import ProfileDataFormRedux from './ProfileDataForm/ProfileDataForm';
import { ProfileInfoType } from '../../../../../types/types';

type PropsType = {
  profileInfo: ProfileInfoType;
  status: string | null;
  isOwner: boolean;

  getUserStatus: (userId: number) => void;
  updateUserStatus: (status: string) => void;
  updatePhoto: () => void;
  saveProfile: (profile: any) => void;
};

const ProfileInfo: React.FC<PropsType> = React.memo(function ProfileInfo(props: PropsType) {
  const [editMode, setEditMode] = useState(false);

  //@ts-ignore
  const onMainPhotoSelected = (e: ChangeEvent<string>) => {
    //@ts-ignore
    if (e.target.files.length) {
      //@ts-ignore
      props.updatePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData: any) => {
    //@ts-ignore
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div>
      <div className={s.profileCover}>
        <img
          className={s.profileCover__img}
          src="https://s1.1zoom.me/b5050/382/388402-svetik_1920x1080.jpg"
        />
      </div>
      <div className={s.profileInfo}>
        <div className={s.profileInfo__PhotoWrapper}>
          <img
            className={s.profileInfo__PhotoImage}
            src={props.profileInfo.photos.large || userPhotoDefault}
          />
          <div>
            {props.isOwner && (
              <div className={s.input__wrapper}>
                <input
                  className={s.input__file}
                  //@ts-ignore
                  onChange={onMainPhotoSelected}
                  type="file"
                  name="file"
                  id="input__file"
                />
                <label
                  className={s.input__fileButton}
                  htmlFor="input__file"
                >
                  <span className={s.input__fileIcon}></span>
                  <span className={s.input__fileButtonText}>Оновити фото</span>
                </label>
              </div>
            )}
          </div>
        </div>

        {editMode ? (
          <ProfileDataFormRedux
            {...props}
            //@ts-ignore
            getUserStatus={props.getUserStatus}
            updateUserStatus={props.updateUserStatus}
            onSubmit={onSubmit}
            initialValues={props.profileInfo}
          />
        ) : (
          <ProfileData
            {...props}
            getUserStatus={props.getUserStatus}
            updateUserStatus={props.updateUserStatus}
            goToEditMode={() => {
              setEditMode(true);
            }}
          />
        )}
      </div>
    </div>
  );
});

export default ProfileInfo;

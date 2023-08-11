import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhotoDefault from 'src/shared/assets/images/user_default.png';
import s from './User.module.scss';
import { UserType } from 'src/shared/types';

type PropsType = {
  u: UserType;
  followingInProgress: number[];

  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
};

const User: React.FC<PropsType> = ({ u, ...props }) => {
  return (
    <div
      key={u.id}
      className={s.users__item}
    >
      <div className={s.users__img}>
        <NavLink to={'/profile/' + u.id}>
          <img
            src={u.photos.small !== null ? u.photos.small : userPhotoDefault}
            alt=""
          />
        </NavLink>

        <div>
          {u.followed ? (
            <button
              disabled={props.followingInProgress.some((id) => id === u.id)}
              onClick={() => {
                props.unfollow(u.id);
              }}
              className={`${s.users__button__unfollow} ${s.users__button} button`}
            >
              <span className={s.active}>Слідкую</span>
              <span className={s.hover}>Відписатись</span>
            </button>
          ) : (
            <button
              disabled={props.followingInProgress.some((id) => id === u.id)}
              onClick={() => {
                props.follow(u.id);
              }}
              className={`${s.users__button__follow} ${s.users__button} button`}
            >
              Підписатись
            </button>
          )}
        </div>
      </div>

      <div className={s.users__info}>
        <div className={s.users__infoTop}>
          <p className={s.users__name}>{u.name}</p>
          <p className={s.users__city}>{'city'},</p>
        </div>
        <div className={s.users__infoBottom}>
          <p className={s.users__status}>{u.status}</p>
          <p className={s.users__country}>{'country'}</p>
        </div>
      </div>
    </div>
  );
};

export default User;

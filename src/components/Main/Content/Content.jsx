import React from 'react';
import Profile from './Profile/Profile';

import s from './Content.module.css';

const Content = () => {
  return (
    <div className={s.content}>
      <Profile />
      {/* <Dialogs />
      <Friends />
      <Photos />
      <Routes /> */}
    </div>
  );
}

export default Content;
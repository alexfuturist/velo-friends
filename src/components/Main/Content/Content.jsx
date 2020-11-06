import React from 'react';

import s from './Content.module.css';

import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Content = (props) => {

  return (
    <div className={s.content}>
      <Route path="/profile" render={ () => <Profile postsData={props.postsData} /> } />
      <Route path="/dialogs" render={ () => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} /> } />
      {/* <Route path="/friends" component={Friends} />
      <Route path="/photos" component={Photos} />
      <Route path="/routes" component={Routes} /> */}
    </div>
  );
}

export default Content;
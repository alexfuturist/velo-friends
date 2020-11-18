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
      <Route path="/profile" render={() => <Profile state={props.state.profilePage} addPost={props.addPost} />} />
      <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} addMessage={props.addMessage} />} />
      {/* <Route path="/friends" component={Friends} />
      <Route path="/photos" component={Photos} />
      <Route path="/routes" component={Routes} /> */}
    </div>
  );
}

export default Content;
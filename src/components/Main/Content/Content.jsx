import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import s from './Content.module.css';

import ProfileContainer from './Profile/ProfileContainer';
// import DialogsContainer from './Dialogs/DialogsContainer';
// import UsersContainer from './Users/UsersContainer';
// import Login from '../../Login/Login';
const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./Users/UsersContainer'));
const Login = React.lazy(() => import('../../Login/Login'));


const Content = (props) => {
  return (
    <div className={s.content}>
      
      <Suspense fallback={<div>Завантаження...</div>}>
        <Route path="/login" render={() => <Login />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        {/* <Route path="/friends" component={Friends} />
      <Route path="/photos" component={Photos} />
      <Route path="/routes" component={Routes} /> */}
      </Suspense>
    </div>
  );
}

export default Content;
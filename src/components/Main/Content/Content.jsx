import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import s from './Content.module.css';

import Friends from './Friends/Friends';
import Music from './Music/Music';
import Photos from './Photos/Photos';
import ProfileContainer from './Profile/ProfileContainer';
import Routes from './Routes/Routes';
import Settings from './Settings/Settings';
import StarUsersContainer from './StarUsers/StarUsersContainer';

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
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/profile" />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs/:dialogId?" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/starusers" render={() => <StarUsersContainer />} />
          <Route path="/photos" render={() => <Photos />} />
          <Route path="/routes" render={() => <Routes />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/friends" render={() => <Friends />} />;
          <Route path="*" render={() => <div>404 NotFound</div>} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default Content;
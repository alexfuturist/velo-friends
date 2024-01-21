import { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import StarUsersContainer from "src/pages/StarUsers/StarUsersContainer";
import ProfileContainer from "src/pages/Profile/ProfileContainer";
import Photos from "src/pages/Photos/Photos";
import Routes from "src/pages/Routes/Routes";
import Music from "src/pages/Music/Music";
import Settings from "src/pages/Settings/Settings";
import Friends from "src/pages/Friends/Friends";
import Login from "src/features/ui/Login/Login";
// import UsersContainer from 'src/pages/Users/UsersContainer';
import { AboutProject } from "src/pages/AboutProject";
import { DialogsPage } from "src/pages/DialogsPage";

// const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));
const UsersContainerLazy = lazy(() => import("src/pages/Users/UsersContainer"));
// const Login = React.lazy(() => import('../../Login/Login'));

interface AppRouterProps {
  className?: string;
}

export const AppRouter = ({ className }: AppRouterProps) => {
  return (
    <div className={className}>
      <Suspense fallback={<div>Завантаження...</div>}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/profile" />}
          />
          <Route
            path="/login"
            render={() => <Login />}
          />
          <Route
            path="/profile/:userId?"
            render={() => <ProfileContainer />}
          />
          <Route
            path="/dialogs/:dialogId?"
            render={() => <DialogsPage />}
          />
          <Route
            path="/users"
            render={() => <UsersContainerLazy />}
          />
          <Route
            path="/starusers"
            render={() => <StarUsersContainer />}
          />
          <Route
            path="/photos"
            render={() => <Photos />}
          />
          <Route
            path="/routes"
            render={() => <Routes />}
          />
          <Route
            path="/aboutproject"
            render={() => <AboutProject />}
          />
          <Route
            path="/music"
            render={() => <Music />}
          />
          <Route
            path="/settings"
            render={() => <Settings />}
          />
          <Route
            path="/friends"
            render={() => <Friends />}
          />
          ;
          <Route
            path="*"
            render={() => <div>404 NotFound</div>}
          />
        </Switch>
      </Suspense>
    </div>
  );
};

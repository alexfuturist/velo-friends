import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logout } from "src/app/redux/auth-reducer";
import { AppStateType } from "src/app/redux/redux-store";

type MapStatePropsType = {
  isAuth: boolean;
  login: string | null;
};

type MapDispatchPropsType = {
  logout: () => void;
};

type PropsType = MapStatePropsType & MapDispatchPropsType;

//внутренний контейнер
class HeaderContainer extends React.Component<PropsType> {
  render() {
    return <Header {...this.props} />;
  }
}

//внешний контейнер
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { logout })(HeaderContainer);

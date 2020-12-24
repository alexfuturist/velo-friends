import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Header from './Header';
import {setAuthUserData} from './../../redux/auth-reducer';


//внутренний контейнер
class HeaderContainer extends React.Component {
  
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true})
      .then( response => {
        console.log(response);

        if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
  }

  render() {
    return (
      <Header {...this.props} />
    )
  }
}


//внешний контейнер
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
};

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setAuthUserData} from './../../redux/auth-reducer';
import { headerAPI } from '../../api/api';


//внутренний контейнер
class HeaderContainer extends React.Component {
  
  componentDidMount() {
    headerAPI.auth()
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
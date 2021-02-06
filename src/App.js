import React, {
  Component
} from 'react';

import './components/Common/_normalize.css'
import './components/Common/_nullstyle.css'
import './components/Common/__scrollbar.scss'
import './App.scss';

import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';
import { initializeApp } from './../src/redux/app-reducer';
import { connect } from 'react-redux';
import Preloader from './components/Common/Preloader/Preloader';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';


class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app">
      <HeaderContainer />
      <Main />
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect (mapStateToProps, {initializeApp} )
)  (App);
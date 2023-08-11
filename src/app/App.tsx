import React, { Component } from 'react';

import 'src/app/styles/_normalize.scss';
import 'src/app/styles/_nullstyle.scss';
import 'src/app/styles/__scrollbar.scss';
import './App.scss';

// import HeaderContainer from './components/Header/HeaderContainer';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';

import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
// import { Preloader } from './components/Common/Preloader';
import { AppStateType } from './redux/redux-store';
import { Preloader } from 'src/shared/ui/Preloader';
import HeaderContainer from 'src/widgets/Header/HeaderContainer';
import Navbar from 'src/widgets/Navbar/Navbar';
import { AppRouter } from './providers/router/ui/AppRouter';

type MapStatePropsType = {
  initialized: boolean;
};

type MapDispatchPropsType = {
  initializeApp: () => void;
};

type PropsType = MapStatePropsType & MapDispatchPropsType;

class App extends Component<PropsType> {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app">
        <HeaderContainer />
        <div className={`main wrapper`}>
          <Navbar />
          <AppRouter className="app__content" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  initialized: state.app.initialized,
});

// <MapStatePropsType, MapDispatchPropsType, undefined, AppStateType>

export default compose(
  withRouter,
  connect(mapStateToProps, {
    initializeApp,
  }),
)(App) as React.ComponentType;

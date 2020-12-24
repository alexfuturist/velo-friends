import React from 'react';

import './components/Common/_normalize.css'
import './components/Common/_nullstyle.css'
import './components/Common/__scrollbar.scss'
import './App.scss';

import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';


function App(props) {
  return (
    
      <div className="app">
        <HeaderContainer />
        <Main />
      </div>
    
  );
}

export default App;

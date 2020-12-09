import React from 'react';

import './components/Common/_normalize.css'
import './components/Common/_nullstyle.css'
import './components/Common/__scrollbar.scss'
import './App.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App(props) {
  return (
    
      <div className="app">
        <Header />
        <Main />
      </div>
    
  );
}

export default App;

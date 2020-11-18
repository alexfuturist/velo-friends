import React from 'react';

import './components/Common/_normalize.css'
import './components/Common/_nullstyle.css'
import './components/Common/__scrollbar.scss'
// import './App.scss';
import './App.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Main state={props.state} addPost={props.addPost} addMessage={props.addMessage}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

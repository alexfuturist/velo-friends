import React from 'react';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';
import s from './Main.module.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Main = (props) => {
  return (
    <div className={`${s.main} wrapper`}>
      <Navbar />
      <Content />
    </div>
  );
}

export default Main;
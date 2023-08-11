import React from 'react';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';
import s from './Main.module.css';

class Main extends React.Component {
  render() {
    return (
      <div className={`${s.main} wrapper`}>
        <Navbar />
        <Content />
      </div>
    );
  }
}

export default Main;

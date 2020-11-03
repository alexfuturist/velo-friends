import React from 'react';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';

import s from './Main.module.css';


const Main = () => {
    return (
        <div className={`${s.main} wrapper`}>
        <Navbar />
        <Content />
       </div>
    );
}

export default Main;
import React from "react";
import Post from './Post/Post';

import s from './Posts.module.css';

const Posts = () => {
    return (
      <ul className={s.posts}>
        <Post massage="Привіт, хто хоче покататись?"/>
        <Post massage="Починаю нову програму! Поїхали!"/>

        <Post massage="Привіт, хто хоче покататись?"/>
        <Post massage="Починаю нову програму! Поїхали!"/>
      </ul>
    );
  }
  
  export default Posts;
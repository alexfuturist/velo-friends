import React from "react";

import s from './Post.module.css';

const Post = (props) => {
    return (
      <li className={s.post}>
        {props.massage}
      </li>
    );
  }
  
  export default Post;
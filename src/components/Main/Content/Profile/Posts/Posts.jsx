import React from "react";
import Post from './Post/Post';

import s from './Posts.module.css';

const Posts = (props) => {

  // let postsData = [
  //   {
  //     id: 1,
  //     message:"Привіт, хто хоче покататись?"
  //   },
  //   {
  //     id: 2,
  //     message:"Починаю нову програму! Поїхали!"
  //   }
  // ];

  let postsElements = props.posts.map ( p => <Post massage={p.message} id={p.id} /> );



  return (
    <ul className={s.posts}>
      { postsElements }
    </ul>
  );
}

export default Posts;
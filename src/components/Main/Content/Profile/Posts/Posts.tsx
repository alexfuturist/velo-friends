import React from "react";
import Post from './Post/Post';
import s from './Posts.module.scss';

const Posts = (props) => {
  let postsElements = [...props.posts].reverse()
    .map(p => <Post
      profileInfo={props.profileInfo}
      massage={p.message}
      deletePost={props.deletePost}
      updatePost={props.updatePost}
      updatePostMode={props.updatePostMode}
      isUpdatePostMode={props.isUpdatePostMode}
      key={p.id}
      id={p.id} />);

  return (
    <ul className={s.posts}>
      {postsElements}
    </ul>
  );
}

export default Posts;
import React from 'react';

import s from './NewPost.module.scss'

const NewPost = (props) => {

    let newPostElement = React.createRef(); //создали ссылку на элемент

    //колбэк функция
    let updatePost = () => {
        let text = newPostElement.current.value; //считали данные из элемента
        props.updatePost(text);
    };

    //колбэк функция 
    let addPost = () => {
        props.addPost(); //вызываем функцию добавления нового поста
    };

    return (
        <div className={s.newPosts}>
            <p className={s.newPosts__title}>Новий пост</p>
            <textarea onChange={updatePost} ref={newPostElement} className={s.newPosts__text} value={props.newPostText} placeholder="моя новина.."></textarea>
            <button onClick={addPost} className={`button ${s.newPosts__button}`}>Опубліковати</button>
        </div>
    );
}

export default NewPost;
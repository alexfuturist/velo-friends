import React from 'react';
import { addPostActionCreator, updatePostActionCreator } from '../../../../redux/state';
import Posts from './Posts/Posts';
import s from './Profile.module.css';


const Profile = (props) => {

  let newPostElement = React.createRef(); //создали ссылку на элемент

  //колбэк функция 
  let addPost = () => {
    props.dispatch(addPostActionCreator()); //вызываем функцию добавления нового поста
  };

  //
  let updatePost = () => {
    let text = newPostElement.current.value; //считали данные из элемента
    props.dispatch(updatePostActionCreator(text));
  };



  return (
    <section className={s.profile}>

      <div className={s.profile__img}>
        <img src="https://s1.1zoom.me/b5050/382/388402-svetik_1920x1080.jpg" />
      </div>

      <div className={s.profile__info}>
        <img src="https://tengrinews.kz/userdata/images/u38/resized/35fcc7bea1f32a6437650758096b9f89.jpeg" />
        <div className={s.profile__infoText} >
          <p className={s.profile__infoName}> Володимир Погребняк</p>
          <p className={s.profile__infoParametr}>Вік: 36</p>
          <p className={s.profile__infoParametr}>Освіта: КНУ</p>
          <p className={s.profile__infoParametr}>Місто: Жмеринка</p>
        </div>
      </div>

      <div className={s.newPosts}>
        <p className={s.newPosts__title}>Новий пост</p>
        <textarea onChange={updatePost} ref={newPostElement} className={s.newPosts__text} value={props.state.newPostText} placeholder="моя новина.."></textarea>
        <button onClick={addPost} className={`button ${s.newPosts__button}`}>Опубліковати</button>
      </div>

      <Posts posts={props.state.posts} />

    </section>
  );
}

export default Profile;
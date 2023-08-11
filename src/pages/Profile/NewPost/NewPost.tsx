import React, { useEffect, useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './NewPost.module.scss';
import { required } from 'src/shared/lib/utils/validators';

// const maxLength600 = maxLengthCreator(600);
// const minLength1 = minLengthCreator(1);

const AddNewPostForm: React.FC = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="newPost"></label>
        <Field
          className={s.newPosts__text}
          component="textarea"
          name="newPost"
          id="newPost"
          placeholder="моя новина.."
          validate={[required]}
          maxLength="600"
        />
      </div>
      <button className={`button ${s.newPosts__button}`}>Опублікувати</button>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({
  form: 'ProfileAddNewPost',
})(AddNewPostForm);

const AddNewPost = (props: any) => {
  //колбэк функция
  const onSubmit = (formData: any) => {
    !props.isUpdatePostMode && props.addNewPost(formData.newPost); //вызываем функцию добавления нового поста
  };

  return (
    <div className={s.newPosts}>
      <p className={s.newPosts__title}>Новий пост</p>
      <AddNewPostFormRedux
        onSubmit={onSubmit}
        initialValues={{ newPost: null }}
      />
    </div>
  );
};

export default AddNewPost;

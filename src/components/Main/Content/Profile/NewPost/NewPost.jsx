import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../../../utils/validators/validators';
import { Element } from '../../../../Common/FormControls/FormControls';
import s from './NewPost.module.scss'


const maxLength20 = maxLengthCreator(20);
const Textarea = Element("textarea");

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="newPost"></label>
                <Field className={s.newPosts__text} component={Textarea} name="newPost"
                    placeholder="моя новина.." validate={[required, maxLength20]} />
            </div>
            <button className={`button ${s.newPosts__button}`}>Опубліковати</button>
        </form>
    )
};


const AddNewPostFormRedux = reduxForm({
    form: 'ProfileAddNewPost'
})(AddNewPostForm);


const AddNewPost = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    //колбэк функция 
    const onAddPost = (formData) => {
        props.addPost(formData.newPost); //вызываем функцию добавления нового поста
    };

    return (
        <div className={s.newPosts}>
            <p className={s.newPosts__title}>Новий пост</p>
            <AddNewPostFormRedux onSubmit={onAddPost} />
        </div>
    );
}

export default AddNewPost;
import React from "react";
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, minLengthCreator, required } from "../../utils/validators/validators";
import { Element } from "../Common/FormControls/FormControls";
import s from './Login.module.scss';

const Input = Element("input");
const maxLength10 = maxLengthCreator(10);
const minLength5 = minLengthCreator(5);

const LoginForm = (props) => {
    return (
        <form className={s.loginForm} onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="login"></label>
                <Field className={s.loginField} name="login" component={Input} type="text"
                    placeholder={"login"} validate={[required, maxLength10]} />
            </div>
            <div>
                <label htmlFor="password"></label>
                <Field className={s.loginField} name="password" component={Input} type="text" 
                placeholder={"password"} validate={[required, minLength5, maxLength10]} />
            </div>
            <div>
                <Field className={s.loginField} name="rememberMe" component={Input} type="checkbox" />
                <label className={s.loginCheckboxLabel} htmlFor="rememberMe">rememberMe</label>
            </div>
            <button className={s.loginButton} type="submit">Login</button>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div className={s.login}>
            <h1 className={s.loginTitle}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
};

export default Login;
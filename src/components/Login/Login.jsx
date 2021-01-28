import React from "react";
import { Field, reduxForm } from 'redux-form';
import s from './Login.module.scss';

const LoginForm = (props) => {
    return (
        <form className={s.loginForm} onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="login"></label>
                <Field className={s.loginField} name="login" component="input" type="text" placeholder={"login"} />
            </div>
            <div>
                <label htmlFor="password"></label>
                <Field className={s.loginField} name="password" component="input" type="text" placeholder={"password"} />
            </div>
            <div>
                <Field className={s.loginField} name="rememberMe" component="input" type="checkbox" />
                <label className={s.loginCheckboxLabel} htmlFor="rememberMe">rememberMe</label>
            </div>
            <button className={s.loginButton} type="submit">Login</button>
        </form>
    )
};

const LoginReduxForm = reduxForm ({
    form: 'login'
}) (LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div className={s.login}>
            <h1 className={s.loginTitle}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

export default Login;
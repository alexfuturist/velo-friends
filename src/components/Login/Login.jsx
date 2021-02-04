import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, minLengthCreator, required } from "../../utils/validators/validators";
import { Element } from "../Common/FormControls/FormControls";
import { login } from "../../redux/auth-reducer";
import s from './Login.module.scss';
import { Redirect } from "react-router-dom";

const Input = Element("input");
const maxLength15 = maxLengthCreator(15);
const minLength5 = minLengthCreator(5);

const LoginForm = (props) => {
    return (
        <form className={s.loginForm} onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="email"></label>
                <Field className={s.loginField} name="email" component={Input} type="text"
                    placeholder={"login"} validate={[required]} />
            </div>
            <div>
                <label htmlFor="password"></label>
                <Field className={s.loginField} name="password" component={Input} type="password"
                placeholder={"password"} validate={[required, minLength5, maxLength15]} />
            </div>
            <div className={s.RememberMe}>
                <Field className={s.RememberMeInput} name="rememberMe" component={Input} type="checkbox" />
                <label className={s.RememberMeLabel} htmlFor="rememberMe">rememberMe</label>
            </div>
            <div>
                {props.error && 
                <div className={s.formCommonError}>{props.error}</div>}
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
        props.login(formData.email, formData.password, formData.rememberMe);
        console.log(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div className={s.login}>
            <h1 className={s.loginTitle}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login}) (Login);
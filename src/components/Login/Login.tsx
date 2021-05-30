import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  maxLengthCreator,
  minLengthCreator,
  required,
} from '../../utils/validators/validators';
import { Element } from '../Common/FormControls/FormControls';
import { login, getCaptchaUrl } from '../../redux/auth-reducer';
import s from './Login.module.scss';
import { Redirect } from 'react-router-dom';

const Input = Element('input');
const maxLength15 = maxLengthCreator(15);
const minLength4 = minLengthCreator(4);

const LoginForm = (props: any) => {
  return (
    <form className={s.loginForm} onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="email"></label>
        <Field
          className={s.loginField}
          name="email"
          component={Input}
          type="text"
          placeholder={'login'}
          validate={[required]}
        />
      </div>
      <div>
        <label htmlFor="password"></label>
        <Field
          className={s.loginField}
          name="password"
          component={Input}
          type="password"
          placeholder={'password'}
          validate={[required, minLength4, maxLength15]}
        />
      </div>
      <div className={s.RememberMe}>
        <Field
          className={s.RememberMeInput}
          name="rememberMe"
          id="rememberMe"
          component="input"
          type="checkbox"
        />
        <label className={s.RememberMeLabel} htmlFor="rememberMe">
          запам'ятати мене
        </label>
      </div>
      <div>
        {props.error && <div className={s.formCommonError}>{props.error}</div>}
      </div>

      {props.captchaUrl && (
        <div className={s.CaptchaImageContainer}>
          <div>
            <div>
              <img className={s.CaptchaImage} src={props.captchaUrl} />
              <div
                className={s.reloadDouble}
                onClick={props.getCaptchaUrl}
              ></div>
            </div>
          </div>
          <div>
            <Field
              className={s.loginField}
              name="captcha"
              autocomplete="off"
              placeholder="введіть символи"
              component={Input}
              validate={[required]}
            />
          </div>
        </div>
      )}

      <button className={s.loginButton} type="submit">
        УВІЙТИ
      </button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props: any) => {
  const onSubmit = (formData: any) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
    // console.log(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <div className={s.login}>
      <h1 className={s.loginTitle}>Авторизація</h1>
      <LoginReduxForm
        onSubmit={onSubmit}
        // captchaUrl={props.captchaUrl}
        // getCaptchaUrl={props.getCaptchaUrl}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login, getCaptchaUrl })(Login);

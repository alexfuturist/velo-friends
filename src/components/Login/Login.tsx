import React from 'react'
import { connect } from 'react-redux'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import {
    maxLengthCreator,
    minLengthCreator,
    required,
} from '../../utils/validators/validators'
import { Element } from '../Common/FormControls/FormControls'
import { login, getCaptchaUrl } from '../../redux/auth-reducer'
import s from './Login.module.scss'
import { Redirect } from 'react-router-dom'
import { AppStateType } from '../../redux/redux-store'

//1-LoginForm
const Input = Element('input')
const maxLength15 = maxLengthCreator(15)
const minLength4 = minLengthCreator(4)

type LoginOwnFormProps = {
    captchaUrl: string | null
    getCaptchaUrl: () => void
}

const LoginForm: React.FC<
    InjectedFormProps<LoginFormValuesType, LoginOwnFormProps> &
        LoginOwnFormProps
> = ({ error, captchaUrl, getCaptchaUrl, handleSubmit }) => {
    return (
        <form className={s.loginForm} onSubmit={handleSubmit}>
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
                {error && <div className={s.formCommonError}>{error}</div>}
            </div>

            {captchaUrl && (
                <div className={s.CaptchaImageContainer}>
                    <div>
                        <div>
                            <img className={s.CaptchaImage} src={captchaUrl} />
                            <div
                                className={s.reloadDouble}
                                onClick={getCaptchaUrl}
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
    )
}

//2-Container ReduxForm
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginOwnFormProps>({
    form: 'login',
})(LoginForm)

//3-Component Login
type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    login: (
        email: string,
        password: string,
        rememberMe: boolean,
        captcha: string
    ) => void
    getCaptchaUrl: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const Login: React.FC<PropsType> = ({
    captchaUrl,
    isAuth,
    login,
    getCaptchaUrl,
}) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        //TC
        login(
            formData.email,
            formData.password,
            formData.rememberMe,
            formData.captcha
        )
        // console.log(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div className={s.login}>
            <h1 className={s.loginTitle}>Авторизація</h1>
            <LoginReduxForm
                onSubmit={onSubmit}
                captchaUrl={captchaUrl}
                getCaptchaUrl={getCaptchaUrl}
            />
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login, getCaptchaUrl })(Login)

import React from 'react';
import {reduxForm, Field} from "redux-form";
import {Input} from "../comon/FormControls/FormControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {getLogin} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from 'react-router-dom'
import s from './../comon/FormControls/FormControls.module.css'

const LoginForm = (props: any) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name="email"
                           component={Input}
                           validate={[requiredField]}
                           type="text"
                           placeholder={'email'}/>
                </div>
                <div>
                    <Field name="password"
                           component={Input}
                           validate={[requiredField]}
                           type="password"
                           placeholder={'Password'}/>
                </div>
                <div>
                    <Field name="rememberMe" component={Input} type="checkbox"/>
                    remember me
                </div>
                {props.error && <div className={s.formSummaryError}>
                    {props.error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props: any) => {

    const onSubmit = (formData: any) => {
        // console.log(formData)
        props.getLogin(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
            return <Redirect to={'/profile'}/>
        }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {getLogin})(Login);

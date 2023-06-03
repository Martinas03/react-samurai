import React from 'react';
import {reduxForm} from "redux-form";
import {createdField, Input} from "../comon/FormControls/FormControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {getLogin} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from 'react-router-dom'
import s from './../comon/FormControls/FormControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {createdField("email", Input, [requiredField], 'email')}
                {createdField("password", Input, [requiredField], 'Password', {type: 'password'}) }
                {createdField("rememberMe", Input, [], '', {type: 'checkbox'}, 'remember me') }
                {error && <div className={s.formSummaryError}>
                    {error}
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

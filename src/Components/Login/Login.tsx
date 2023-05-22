import React from 'react';
import  {reduxForm, Field} from "redux-form";
import {Input} from "../comon/FormControls/FormControls";
import {requiredField} from "../../utils/validators/validators";

const LoginForm = (props: any) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    {/*<input type="text" placeholder={'Login'}/>*/}
                    <Field name="login"
                           component={Input}
                           validate={[requiredField]}
                           type="text"
                           placeholder={'Login'}/>
                </div>
                <div>
                    {/*<input type="password" placeholder={'Password'}/>*/}
                    <Field name="password"
                           component={Input}
                           validate={[requiredField]}
                           type="password"
                           placeholder={'Password'}/>
                </div>
                <div>
                    {/*<input type="checkbox" />*/}
                    <Field name="rememberMe" component="input" type="checkbox" />
                    remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = () => {

    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;

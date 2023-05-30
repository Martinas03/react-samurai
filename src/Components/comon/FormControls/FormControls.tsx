import React from 'react';
import s from './FormControls.module.css'
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children, ...props}: any) => {
    const hasError = touched && error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error: '')}>
            <div>
                {children}
            </div>
            {hasError && <span className={s.span}>{error}</span>}
        </div>
    );
}

export const Textarea = (props: any) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
};

export const Input = (props: any) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};

export const createdField = (name, component, validators, placeholder, props = {}, text= '') => {
    return <div>
        <Field name={name}
               component={component}
               validate={validators}
               placeholder={placeholder}
               {...props}
        /> {text}
    </div>
}


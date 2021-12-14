import React from 'react';
import SuperInputText from "../../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import SuperCheckbox from "../../../n1-main/m1-ui/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import {Navigate, NavLink} from "react-router-dom";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {useDispatch, useSelector} from "react-redux";
import s from './Login.module.scss'
import {LoginTC} from "../../../n1-main/m2-bll/authReducer";
import {FormikProvider, useFormik} from "formik";

export const Login = () => {
    const dispatch = useDispatch()

    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.auth.isLoggedIn)
    const errorFromServer = useSelector<AppStoreType, string | null>(state => state.auth.error)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            dispatch(LoginTC(values.email, values.password, values.rememberMe));
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            }
            return errors
        },
    },);

    if (isLoggedIn) {
        return <Navigate to="/profile"/>
    }

    return (
        <div className={s.form}>
            <form onSubmit={formik.handleSubmit}>
                    <div className={s.border}>
                        <div className={s.text}>Sign In</div>
                        <div><SuperInputText
                            id="email"
                            placeholder={'email'}
                            {...formik.getFieldProps('email')}
                        /></div>
                        {formik.touched.email && formik.errors.email ? (
                            <div className={s.error}>{formik.errors.email}</div>
                        ) : null}
                        <div><SuperInputText
                            id="password"
                            placeholder={'password'}
                            type={'password'}
                            {...formik.getFieldProps('password')}
                        /></div>
                        {formik.touched.password && formik.errors.password ? (
                            <div className={s.error}>{formik.errors.password}</div>
                        ) : null}
                        {errorFromServer ? <span className={s.error}>{errorFromServer}</span> : null}
                        <div><SuperCheckbox
                            id="rememberMe"
                            className={s.checkbox}
                            {...formik.getFieldProps('rememberMe')}
                        >
                            Remember Me
                        </SuperCheckbox></div>
                        <SuperButton type={'submit'}>Login</SuperButton>
                        <NavLink to={'/passwordrecovery'}>Forgot password</NavLink>
                    </div>
            </form>
        </div>
    );
}


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}
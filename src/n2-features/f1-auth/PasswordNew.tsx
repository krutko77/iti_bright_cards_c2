import React from 'react';
import {Navigate, NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../n1-main/m2-bll/store";
import {useFormik} from "formik";
import s from "./a1-login/Login.module.scss";
import SuperInputText from "../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import {setNewPassTC} from "../../n1-main/m2-bll/passwordRecoveryReducer";


export const PasswordNew = () => {
    const dispatch = useDispatch()
    const {token} = useParams<{ token: string }>();

    const errorFromServer = useSelector<AppStoreType, string | null>(state => state.recovery.error)
    const infoFromServer = useSelector<AppStoreType, string | null>(state => state.recovery.info)

    const formik = useFormik({
        initialValues: {
            password: '',
        },
        onSubmit: values => {
            if (token)
                dispatch(setNewPassTC(values.password, token));
        },
        validate: (values) => {
            const errors: Partial<FormikErrorType> = {};
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 7) {
                errors.password = 'Must be 3 characters or more';
            }
            return errors
        },
    },);

    if (infoFromServer) {
        return <Navigate to={"/login"}/>
    }

    return (
        <div className={s.form}>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.border}>
                    <div className={s.text}>Set New Password</div>
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
                    <SuperButton type={'submit'}>Send</SuperButton>
                    <NavLink to={'/passwordrecovery'}>Forgot password</NavLink>
                </div>
            </form>
        </div>
    );
}


type FormikErrorType = {
    password: string
}

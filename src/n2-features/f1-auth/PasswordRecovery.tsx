import {useFormik} from 'formik';
import React from 'react';
import SuperInputText from "../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from '../../n1-main/m1-ui/common/c2-SuperButton/SuperButton';
import {useDispatch, useSelector} from "react-redux";
import {sendPassRecoveryTC} from "../../n1-main/m2-bll/passwordRecoveryReducer";
import s from "./a1-login/Login.module.scss";
import {NavLink} from "react-router-dom";
import {AppStoreType} from "../../n1-main/m2-bll/store";

type FormikErrorType = {
    email: string
}

export const PasswordRecovery = () => {

    const dispatch = useDispatch();
    const errorFromServer = useSelector<AppStoreType, string | null>(state => state.recovery.error)

    const formik = useFormik({

        initialValues: {
            email: '',
        },

        validate: (values) => {
            const errors: Partial<FormikErrorType> = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },

        onSubmit: values => {
            // alert(JSON.stringify(values))
            formik.resetForm()
            dispatch(sendPassRecoveryTC(values.email))
        },
    })

    return (
        <div className={s.form}>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.border}>
                    <div className={s.text}>Forgot password?</div>
                    <div><SuperInputText
                        id="email"
                        placeholder={'email'}
                        {...formik.getFieldProps('email')}
                    />
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                        <div className={s.error}>{formik.errors.email}</div>) : null}
                    {errorFromServer ? <span className={s.error}>{errorFromServer}</span> : null}
                    <SuperButton type={'submit'}>Send instruction</SuperButton>
                    <div style={{textAlign: 'center'}}><NavLink to={'/login'}>Try logging in</NavLink></div>
                </div>
            </form>
        </div>
    );
}
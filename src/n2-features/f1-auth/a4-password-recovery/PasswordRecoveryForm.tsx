import s from "./PasswordRecoveryForm.module.scss";
import {NavLink} from "react-router-dom";
import Title from "../../../assets/components/common/title/Title.jsx";
import Subtitle from "../../../assets/components/common/subtitle/Subtitle.jsx";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {useFormik} from "formik";
import {sendPassRecoveryTC} from "../../../n1-main/m2-bll/passwordRecoveryReducer";
import React from "react";
import {Input} from "../../../assets/components/common/input/Input";
import Button from "../../../assets/components/common/button/Button";

// данные для input email
const inputData1:inputDataType = {
    id: "email",
    type: "email",
    name: "email",
    for: "email",
    label: "Email",
    style: {
        display: "none"
    }
}

export default function PasswordRecoveryForm() {

    const dispatch = useDispatch()
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
        <form onSubmit={formik.handleSubmit}>
            <div className={s.contentWrap}>
                <Title/>
                <Subtitle subtitle="Forgot your password?"/>
                <Input inputData={inputData1}
                       {...formik.getFieldProps('email')}/>
                {formik.touched.email && formik.errors.email ? (
                    <div className={s.error}>{formik.errors.email}</div>) : null}
                {errorFromServer ? <span className={s.error}>{errorFromServer}</span> : null}
                <span className={s.text}>Enter your email address and we will send you further instructions </span>
                <Button label="Send Instructions"/>
                <span className={s.question}>Did you remember your password?</span>
                <NavLink className={s.link} to={'/login'}>Try logging in</NavLink>
            </div>
        </form>
    );
}

type FormikErrorType = {
    email: string
}
export type inputDataType = {
    id?: string
    type?: string
    name?: string
    for?: string
    label?: string
    style: {
        display: string
    }
}




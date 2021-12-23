import s from "./PasswordNewForm.module.scss";
import Title from "../../../assets/components/common/title/Title.jsx";
import Subtitle from "../../../assets/components/common/subtitle/Subtitle.jsx";
import {Input} from "../../../assets/components/common/input/Input";
import Button from "../../../assets/components/common/button/Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import {Navigate,useParams} from "react-router-dom";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {useFormik} from "formik";
import {setNewPassTC} from "../../../n1-main/m2-bll/passwordRecoveryReducer";
import React from "react";

// данные для input password
const inputData2:inputDataType = {
    id: "password",
    type: "password",
    name: "password",
    for: "password",
    label: "Password",
    style: {
        display: "inlineBlock"
    }
}

export default function PasswordNewForm() {
    const dispatch = useDispatch()
    const {token} = useParams<'token'>();

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
                errors.password = 'Must be 7 characters or more';
            }
            return errors
        },
    },);

    if (infoFromServer) {
        return <Navigate to={"/login"}/>
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={s.contentWrap}>
                <Title/>
                <Subtitle subtitle="Create new password"/>
                <Input inputData={inputData2}
                       {...formik.getFieldProps('password')}/>
                {formik.touched.password && formik.errors.password ? (
                    <div className={s.error}>{formik.errors.password}</div>
                ) : null}
                {errorFromServer ? <span className={s.error}>{errorFromServer}</span> : null}
                <span className={s.text}>Create new password and we will send you further instructions to email</span>
                <div className={s.btn}>
                    <Button label="Create new password"/>
                </div>
            </div>
        </form>
    );
}

type FormikErrorType = {
    password: string
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


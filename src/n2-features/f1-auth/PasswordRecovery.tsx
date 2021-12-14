import {useFormik} from 'formik';
import React from 'react';
import SuperInputText from "../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from '../../n1-main/m1-ui/common/c2-SuperButton/SuperButton';
import {useDispatch} from "react-redux";
import {sendPassRecoveryTC} from "../../n1-main/m2-bll/passwordRecoveryReducer";

type FormikErrorType = {
    email: string
}

export const PasswordRecovery = () => {

    const dispatch = useDispatch();

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
        },
        onSubmit: values => {
            // alert(JSON.stringify(values))
            formik.resetForm()
            dispatch(sendPassRecoveryTC(values.email))
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <div>
                    <div><input {...formik.getFieldProps('email')}/></div>
                    {/*<div><SuperInputText {...formik.getFieldProps}/></div>*/}
                    {/*<div><SuperButton type='submit'>Submin</SuperButton></div>*/}
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </div>
        </form>
    );
}
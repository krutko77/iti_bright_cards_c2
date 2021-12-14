import React, {ChangeEvent, useState} from 'react';
import {Field, FormikProvider, useFormik} from 'formik';
import * as yup from 'yup'
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../../n1-main/m2-bll/store";
import {RequestStatusType} from "../../../../n1-main/m2-bll/registrationReducer";
import SuperCheckbox from "../../../../n1-main/m1-ui/common/c3-SuperCheckbox/SuperCheckbox";

type TitleFormPropsType = {
    callBack: (email: string, password: string) => void
}


export const RegistrationForm = (props: TitleFormPropsType) => {

    const schemeCreator = () => {
        return yup.object().shape({
            email: yup.string().email('Invalid email').required('Required').trim(),
            password: yup.string()
                .matches(/^[a-zA-Z0-9]+/, 'Password can only contain Latin letters and numbers.')
                .required('Required')
                .min(7,'Password must be more than 7 characters...'),
            checkPassword: yup.string()
                .required('Required'),
        })
    }

    const [error, setError] = useState<string | null>(null)
    const [showPas, setShowPass] = useState(false)

    const showPasswordHandler = (value: ChangeEvent<HTMLInputElement>) => {
        setShowPass(value.currentTarget.checked)
    }


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            checkPassword: '',
        },
        onSubmit: (values) => {
            if (values.email.trim() !== "" && values.password === values.checkPassword) {
                formik.resetForm()
                props.callBack(values.email, values.password)
            } else {
                if (values.password !== values.checkPassword) {
                    setError('password dont equal')
                    setTimeout(()=>{
                        setError(null)
                    },2000)
                }
            }
        },
        validationSchema: schemeCreator()
    });

    const onKeypressHandler = () => {
        setError(null)
    }
    const status = useSelector<AppStoreType, RequestStatusType>(state => state.registration.status)
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <FormikProvider value={formik}>
                    <div>
                        <Field
                            id="email"
                            name="email"
                            placeholder={'example@gmail.com'}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onKeyPress={onKeypressHandler}
                        />
                        <span>{formik.touched.email ? formik.errors.email : ''}</span>
                    </div>
                    <div>
                        <Field
                            id="password"
                            name="password"
                            type={showPas ? 'text' : 'password'}
                            placeholder={'enter password'}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onKeyPress={onKeypressHandler}
                        />
                        <span>{formik.touched.password && formik.errors.password ? formik.errors.password : ''}</span>
                    </div>
                    <div>
                        <Field
                            id="checkPassword"
                            name="checkPassword"
                            type={showPas ? 'text' : 'password'}
                            placeholder={'repeat your password'}
                            value={formik.values.checkPassword}
                            onChange={formik.handleChange}
                            onKeyPress={onKeypressHandler}
                        />
                        <span>{formik.touched.checkPassword && formik.errors.checkPassword ? formik.errors.checkPassword : ''}</span>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={!!formik.errors.email || !!formik.errors.password || !!formik.errors.checkPassword || !!error || status === 'loading'}
                        >registration
                        </button>
                    </div>
                    <div>
                        <SuperCheckbox onChange={showPasswordHandler}/>
                        <span>show password</span>
                    </div>
                    <div>
                        {error}
                    </div>
                </FormikProvider>
            </form>
        </div>
    );
};


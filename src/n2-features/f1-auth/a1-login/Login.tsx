import React, {ChangeEvent, FormEvent, useState} from 'react';
import SuperInputText from "../../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import SuperCheckbox from "../../../n1-main/m1-ui/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import {Navigate, NavLink} from "react-router-dom";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {useDispatch, useSelector} from "react-redux";
import s from './Login.module.scss'
import {LoginTC} from "../../../n1-main/m2-bll/authReducer";

export const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const dispatch = useDispatch()

    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.auth.isLoggedIn)
    const error = useSelector<AppStoreType, string | null>(state => state.auth.error)

    if (isLoggedIn) {
        return <Navigate to="/profile"/>
    }

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(LoginTC(email, password, rememberMe));
        setEmail('');
        setPassword('');
    }
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const onChangeRemember = (e: ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.currentTarget.checked)
    }

    return (
        <div className={s.form}>
            <form onSubmit={onSubmitHandler}>
                <div className={s.border}>
                    <div className={s.text}>Sign In</div>
                    <div><SuperInputText value={email} onChange={onChangeEmail}/></div>
                    <div><SuperInputText type={"password"} value={password} onChange={onChangePassword}/></div>
                    {error ? <span>{error}</span> : null}
                    <div><SuperCheckbox checked={rememberMe} onChange={onChangeRemember} className={s.checkbox}>Remember
                        Me</SuperCheckbox></div>
                    <div><SuperButton>Login</SuperButton></div>
                    <NavLink to={'/passwordrecovery'}>Forgot password</NavLink>
                </div>
            </form>
        </div>
    );
}
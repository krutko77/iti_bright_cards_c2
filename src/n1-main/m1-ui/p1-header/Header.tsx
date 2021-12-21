import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Header.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {LogoutTC} from "../../m2-bll/authReducer";
import {AppStoreType} from "../../m2-bll/store";

export const Header = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.auth.isLoggedIn)

    const onLogout = () => {
        dispatch(LogoutTC())
    }

    return (
        <div className={s.header}>
            <div className={s.logo}>BrightCards</div>
            <div className={s.links}>
                {isLoggedIn
                    ? <>
                        <NavLink className={s.item} to={'/temptable'}>TestTable</NavLink>
                        <NavLink className={s.item} to={'/profile'}>Profile</NavLink>
                        <a className={s.link} onClick={onLogout}>Log out</a>
                    </>
                    : <>
                        <NavLink className={s.item} to={'/login'}>Login</NavLink>
                        <NavLink className={s.item} to={'/registration'}>Registration</NavLink>
                        <NavLink className={s.item} to={'/passwordrecovery'}>Recovery Password</NavLink>
                        <NavLink className={s.item} to={'/packs'}>Packs</NavLink>
                        <NavLink className={s.item} to={'/cards'}>Cards</NavLink>
                    </>
                }
                <NavLink className={s.item} to={'/tests'}>Tests</NavLink>
            </div>

        </div>
    );
}
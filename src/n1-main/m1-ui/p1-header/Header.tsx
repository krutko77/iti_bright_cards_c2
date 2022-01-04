import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Header.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {LogoutTC} from "../../m2-bll/authReducer";
import {AppStoreType} from "../../m2-bll/store";
import {LinearProgress} from "@mui/material";

export const Header = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.auth.isLoggedIn)

    const onLogout = () => {
        dispatch(LogoutTC())
    }

    return (
        <div className={s.header}>
            <div className={s.logo}>BrightCards</div>
            <nav className={s.navigation}>
                <ul className={s.list}>
                    {isLoggedIn
                        ? <>
                            <li>
                                <NavLink className={s.item} to={'/profile'}>Profile</NavLink>
                            </li>
                            <li>
                                <a className={s.link} onClick={onLogout}>Log out</a>
                            </li>
                        </>
                        : <>
                            <li>
                                <NavLink className={s.item} to={'/login'}>Login</NavLink>
                            </li>
                            <li>
                                <NavLink className={s.item} to={'/registration'}>Registration</NavLink>
                            </li>
                            <li>
                                <NavLink className={s.item} to={'/passwordrecovery'}>Recovery Password</NavLink>
                            </li>
                        </>
                    }
                    <li>
                        <NavLink className={s.item} to={'/packs'}>Packs</NavLink>
                    </li>
                    <li>
                        <NavLink className={`${s.item} ${s.notDone}`} to={'/packsdesigned'}>PacksDesigned</NavLink>
                    </li>
                    <li>
                        <NavLink className={`${s.item} ${s.notDone}`} to={'/cardsdesigned'}>CardsDesigned</NavLink>
                    </li>
                    {/*<NavLink className={s.item} to={'/cards'}>Cards</NavLink>*/}
                    {/*<NavLink className={s.item} to={'/tests'}>Tests</NavLink>*/} {/*type /test to see*/}
                </ul>
                </nav>
</div>
);
}
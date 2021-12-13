import React from 'react';
import s from './Profile.module.scss'
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {AuthResponseType} from "../../../n1-main/m2-bll/api/api";
import {Navigate} from "react-router-dom";

export const Profile = () => {
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.auth.isLoggedIn)

    const { name, publicCardPacksCount} = useSelector<AppStoreType, AuthResponseType>(state => state.profile)

    if (!isLoggedIn) {
        return <Navigate to="/login"/>
    }

    return (
        <>

            <div className={s.profileContainer}>
                <div className={s.profile}>
                    <span>{name}</span>
                    <span>Cards packs count: {publicCardPacksCount}</span>
                </div>
            </div>
        </>

    );
}
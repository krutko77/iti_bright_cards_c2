import React from 'react';
import "../App.scss"
import {Header} from "../p1-header/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import {Page404} from "../../../n2-features/f1-auth/Page404";
import {Examples} from "../../../n2-features/f0-test/Examples/Examples";
import LoginForm from "../../../n2-features/f1-auth/a1-login/LoginForm";
import RegistrationForm from "../../../n2-features/f1-auth/a2-register/RegistrationForm";
import {Packs} from '../../../n2-features/f3-packs/Packs';
import {Cards} from '../../../n2-features/f4-cards/Cards';
import ProfileForm from "../../../n2-features/f1-auth/a3-profile/ProfileForm";
import PasswordRecoveryForm from "../../../n2-features/f1-auth/a4-password-recovery/PasswordRecoveryForm";
import PasswordNewForm from "../../../n2-features/f1-auth/a4-password-recovery/PasswordNewForm";
import PacksList from "../../../assets/components/packs-list/UsePacksList";
import ModalUp from "../../../n2-features/f5-modal/ModalUp/ModalUp";
import {LinearProgress} from "@mui/material";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../m2-bll/store";
import {RequestStatusType} from "../../m2-bll/appReducer";
import LearnQuestionAnswer from "../../../n2-features/f6-learn/LearnQuestionAnswer";
import CardsTable from "../../../assets/components/cards-table/CardsTable";

export const Main = () => {
    const status = useSelector<AppStoreType, RequestStatusType>((state) => state.app.status)
    const user_id = useSelector<AppStoreType, string>(state => state.profile._id)

    return (
        <div className='main'>
            <ModalUp/>
            <Header/>
            {status === 'loading' && <LinearProgress/>}
            <div className='content'>
                <Routes>
                    <Route path={'/registration'} element={<RegistrationForm/>}/>
                    <Route path={'/login'} element={<LoginForm/>}/>
                    <Route path={'/profile'} element={<ProfileForm/>}/>
                    <Route path={'/404'} element={<Page404/>}/>
                    <Route path={'/passwordrecovery'} element={<PasswordRecoveryForm/>}/>
                    <Route path={'/passwordnew/:token'} element={<PasswordNewForm/>}/>
                    <Route path={'/tests'} element={<Examples/>}/>
                    <Route path="/" element={<Navigate to="/login"/>}/>
                    <Route path="*" element={<Navigate to="/404"/>}/>
                    <Route path={'/packs'} element={<Packs/>}/>
                    <Route path={'/cards/:id'} element={<Cards/>}/>
                    <Route path={'/packsdesigned'} element={<PacksList/>}/>
                    <Route path={'/cardsdesigned/:id'} element={<CardsTable/>}/>
                    <Route path={'/learn/:packid'} element={<LearnQuestionAnswer/>}/>
                    <Route/>
                </Routes>
            </div>
        </div>
    );
}
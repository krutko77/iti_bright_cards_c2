import React from 'react';
import {Header} from "../p1-header/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "../../../n2-features/f1-auth/a1-login/Login";
import {Registration} from "../../../n2-features/f1-auth/a2-register/Registration";
import {Profile} from "../../../n2-features/f1-auth/a3-profile/Profile";
import {Page404} from "../../../n2-features/f1-auth/Page404";
import {PasswordRecovery} from "../../../n2-features/f1-auth/PasswordRecovery";
import {PasswordNew} from "../../../n2-features/f1-auth/PasswordNew";
import {Examples} from "../../../n2-features/f0-test/Examples/Examples";

import LoginForm from "../../../assets/components/common/login-form/LoginForm.jsx";

export const Main = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'/loginform'} element={<LoginForm/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/404'} element={<Page404/>}/>
                <Route path={'/passwordrecovery'} element={<PasswordRecovery/>}/>
                <Route path={'/passwordnew/:token'} element={<PasswordNew/>}/>
                <Route path={'/tests/:token'} element={<Examples/>}/>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </div>
    );
}
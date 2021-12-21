import React from 'react';
import "./../App.css"
import { Header } from "../p1-header/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import { Page404 } from "../../../n2-features/f1-auth/Page404";
import { PasswordRecovery } from "../../../n2-features/f1-auth/PasswordRecovery";
import { PasswordNew } from "../../../n2-features/f1-auth/PasswordNew";
import { Examples } from "../../../n2-features/f0-test/Examples/Examples";

import PasswordRecoveryForm from "../../../assets/components/password-recovery-form/PasswordRecoveryForm.jsx";
import SendingInstructionsForm from "../../../assets/components/sending-instructions-form/SendingInstructionsForm.jsx";
import PasswordNewForm from "../../../assets/components/password-new-form/PasswordNewForm.jsx";
import LoginForm from "../../../n2-features/f1-auth/a1-login/LoginForm";
import RegistrationForm from "../../../n2-features/f1-auth/a2-register/RegistrationForm";
import PacksList from '../../../assets/components/packs-list/PacksList';
import {Packs} from '../../../n2-features/f3-packs/Packs';
import {Cards} from '../../../n2-features/f4-cards/Cards';
import ProfileForm from "../../../n2-features/f1-auth/a3-profile/ProfileForm";

export const Main = () => {
   return (
      <div className='main'>
         <Header />
         <div className='content'>
            <Routes>
               <Route path={'/registration'} element={<RegistrationForm />} />
               <Route path={'/login'} element={<LoginForm/>} />
               <Route path={'/profile'} element={<ProfileForm />} />
               <Route path={'/404'} element={<Page404 />} />
               <Route path={'/passwordrecovery'} element={<PasswordRecovery />} />
               <Route path={'/passwordnew/:token'} element={<PasswordNew />} />
               <Route path={'/tests'} element={<Examples />} />
               <Route path="/" element={<Navigate to="/login" />} />
               <Route path="*" element={<Navigate to="/404" />} />
               <Route path={'/packs'} element={<Packs/>}/>
               <Route path={'/cards/:id'} element={<Cards/>}/>
               <Route />
            </Routes>
         </div>
      </div>
   );
}
import React from 'react';
import "./../App.css"
import { Header } from "../p1-header/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import { Registration } from "../../../n2-features/f1-auth/a2-register/Registration";
import { Profile } from "../../../n2-features/f1-auth/a3-profile/Profile";
import { Page404 } from "../../../n2-features/f1-auth/Page404";
import { PasswordRecovery } from "../../../n2-features/f1-auth/PasswordRecovery";
import { PasswordNew } from "../../../n2-features/f1-auth/PasswordNew";
import { Examples } from "../../../n2-features/f0-test/Examples/Examples";

// import LoginForm from "../../../assets/components/login-form/LoginForm.tsx";
import RegistrationForm from "../../../assets/components/registration-form/RegistrationForm.jsx";
import PasswordRecoveryForm from "../../../assets/components/password-recovery-form/PasswordRecoveryForm.jsx";
import SendingInstructionsForm from "../../../assets/components/sending-instructions-form/SendingInstructionsForm.jsx";
import PasswordNewForm from "../../../assets/components/password-new-form/PasswordNewForm.jsx";
import LoginForm from "../../../assets/components/login-form/LoginForm";

export const Main = () => {
   return (
      <div className='main'>
         <Header />
         <div className='content'>
            <Routes>
               <Route path={'/registration'} element={<Registration />} />
               <Route path={'/login'} element={<LoginForm onSubmit={() => {}}/>} />
               <Route path={'/profile'} element={<Profile />} />
               <Route path={'/404'} element={<Page404 />} />
               <Route path={'/passwordrecovery'} element={<PasswordRecovery />} />
               <Route path={'/passwordnew/:token'} element={<PasswordNew />} />
               <Route path={'/tests/:token'} element={<Examples />} />
               <Route path="/" element={<Navigate to="/login" />} />
               <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
         </div>
      </div>
   );
}
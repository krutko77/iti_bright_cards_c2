import React from 'react';
import "./../App.css"
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
import {Learn} from "../../../n2-features/f6-learn/Learn";

import MyPacksList from "../../../assets/components/my-packs-list/MyPacksList.jsx";
import CardsTable from "./../../../assets/components/cards-table/CardsTable.jsx";
import Row from "./../../../assets/components/row/Row.jsx";



export const Main = () => {
   return (
      <div className='main'>
         <ModalUp />
         <Header />
         <div className='content'>
            <Routes>
               <Route path={'/registration'} element={<RegistrationForm />} />
               <Route path={'/login'} element={<Row/>} />
               <Route path={'/profile'} element={<ProfileForm />} />
               <Route path={'/404'} element={<Page404 />} />
               <Route path={'/passwordrecovery'} element={<PasswordRecoveryForm/>} />
               <Route path={'/passwordnew/:token'} element={<PasswordNewForm />} />
               <Route path={'/tests'} element={<Examples />} />
               <Route path="/" element={<Navigate to="/login" />} />
               <Route path="*" element={<Navigate to="/404" />} />
               <Route path={'/packs'} element={<Packs/>}/>
               <Route path={'/cards/:id'} element={<Cards/>}/>
               <Route path={'/packsdesigned'} element={<PacksList/>}/>
               <Route path={'/learn/:packid'} element={<Learn/>}/>
               <Route />
            </Routes>
         </div>
      </div>
   );
}
import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Header.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { LogoutTC } from "../../m2-bll/authReducer";
import { AppStoreType } from "../../m2-bll/store";
import MenuItem from '../common/Pvl/menu-item/MenuItem';

import paksIcon from "./../../../assets/img/menu/paks-icon.png";
import profileIcon from "./../../../assets/img/menu/profile-icon.png";
import loginIcon from "./../../../assets/img/menu/login-icon.png";
import forgotPsswordIcon from "./../../../assets/img/menu/forgot-password-icon.png";
import registrationIcon from "./../../../assets/img/menu/registration-icon.png";
import logOutIcon from "./../../../assets/img/menu/logout-icon.png";

export const Header = () => {
   const dispatch = useDispatch()
   const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.auth.isLoggedIn)

   const onLogout = () => {
      dispatch(LogoutTC())
   }

   // в каждый NavLink и a нужно добавить класс activeClassName={s.active}
   return (
      <div className={s.header}>
         <div className={s.logo}>BrightCards</div>
         <nav className={s.navigation}>
            <ul className={s.list}>
               {isLoggedIn
                  ? <>
                     <li>
                        <NavLink className={s.link} to={'/profile'}><MenuItem label="Profile" icon={profileIcon} /></NavLink>
                     </li>
                     <li>
                        <a className={s.link} onClick={onLogout}><MenuItem label="Log out" icon={logOutIcon} /></a>
                     </li>
                  </>
                  : <>
                     <li>
                        <NavLink className={s.link} to={'/login'}><MenuItem label="Login" icon={loginIcon} /></NavLink>                       
                     </li>
                     <li>
                        <NavLink className={s.link} to={'/registration'}><MenuItem label="Registration" icon={registrationIcon} /></NavLink>
                     </li>
                     <li>
                        <NavLink className={s.link} to={'/passwordrecovery'}><MenuItem label="Recovery Password" icon={forgotPsswordIcon} /></NavLink>
                     </li>
                  </>
               }
               <li>
                  <NavLink className={s.link} to={'/packs'}><MenuItem label="Packs" icon={paksIcon} /></NavLink>
               </li>
            </ul>
         </nav>
      </div>
   );
}
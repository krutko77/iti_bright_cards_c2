import { NavLink } from "react-router-dom";
import s from "./LoginForm.module.scss";

import icon from './../../../img/shape.svg';

function LoginForm() {
   return (
      <div className={s.loginForm}>
         <form action="">
            <div className={s.contentWrap}>
               <h1 className={s.title}>It-incubator</h1>
               <h2 className={s.subtitle}>Sign In</h2>
               <div className={s.customField}>
                  <input id="email" type="email" name="email" />
                  <label className={s.placeholder} htmlFor="email">Email</label>
               </div>
               <div className={s.customField}>
                  <input id="password" type="password" name="password" />
                  <label className={s.placeholder} htmlFor="password">Password</label>
                  <img className={s.icon} src={icon} alt="image" />
               </div>
               <NavLink className={s.linkForgotPass} to={'/'}>Forgot password</NavLink>
               <button className={s.btn} type="submit">Login</button>
               <span className={s.question}>Don’t have an account?</span>
               <NavLink className={s.linkSignUp} to={'/'}>Sign Up</NavLink>
            </div>
         </form>
      </div>
   );
}

export default LoginForm;

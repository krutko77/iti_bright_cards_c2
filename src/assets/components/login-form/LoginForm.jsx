import s from "./LoginForm.module.scss";
import { NavLink } from "react-router-dom";
import Title from "./../common/title/Title.jsx";
import Subtitle from "./../common/subtitle/Subtitle.jsx";
import Input from "./../common/input/Input.jsx";
import Button from "./../common/button/Button.jsx";
import CheckboxLabel from "./../common/checkbox/CheckboxLabel.jsx";

// данные для input email
const inputData1 = {
   id: "email",
   type: "email",
   name: "email",
   for: "email",
   label: "Email",
   style: {
      display: "none"
   }
}

// данные для input password
const inputData2 = {
   id: "password",
   type: "password",
   name: "password",
   for: "password",
   label: "Password",
   style: {
      display: "inlineBlock"
   }
}

export default function LoginForm() {
   return (
      <form action="">
         <div className={s.contentWrap}>
            <Title />
            <Subtitle subtitle="Sign In" />
            <Input inputData={inputData1} />
            <Input inputData={inputData2} />
            <div className={s.block}>
               <CheckboxLabel label="Remember Me"/>
               <NavLink className={s.linkForgotPass} to={'/'}>Forgot password</NavLink>
            </div>
            <Button label="Login" />
            <span className={s.question}>Don’t have an account?</span>
            <NavLink className={s.linkSignUp} to={'/'}>Sign Up</NavLink>
         </div>
      </form>
   );
}



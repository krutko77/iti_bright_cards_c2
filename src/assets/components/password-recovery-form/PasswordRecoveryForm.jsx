import s from "./PasswordRecoveryForm.module.scss";
import { NavLink } from "react-router-dom";
import Title from "../common/title/Title.jsx";
import Subtitle from "../common/subtitle/Subtitle.jsx";
import Input from "../common/input/Input.jsx";
import Button from "../common/button/Button.jsx";


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

export default function PasswordRecoveryForm() {
   return (
      <form action="">
         <div className={s.contentWrap}>
            <Title />
            <Subtitle subtitle="Forgot your password?" />
            <Input inputData={inputData1} />
           <span className={s.text}>Enter your email address and we will send you further instructions </span>
            <Button label="Send Instructions" />
            <span className={s.question}>Did you remember your password?</span>
            <NavLink className={s.link} to={'/'}>Try logging in</NavLink>
         </div>
      </form>
   );
}



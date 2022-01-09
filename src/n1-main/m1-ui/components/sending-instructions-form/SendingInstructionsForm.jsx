import s from "./SendingInstructionsForm.module.scss";
import { NavLink } from "react-router-dom";
import Title from "../../common/Pvl/title/Title.jsx";

import icon from "../../../../assets/img/check-email.svg"

export default function SendingInstructionsForm() {
   return (
      <form action="">
         <div className={s.contentWrap}>
            <Title />
            <img className={s.icon} src={icon} alt="icon" />
            <NavLink className={s.link} to={'/'}>Check Email</NavLink>
           <span className={s.text}>We’ve sent an Email with instructions to example@mail.com</span>            
         </div>
      </form>
   );
}



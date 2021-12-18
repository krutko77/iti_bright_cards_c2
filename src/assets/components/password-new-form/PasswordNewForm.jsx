import s from "./PasswordNewForm.module.scss";
import Title from "../common/title/Title.jsx";
import Subtitle from "../common/subtitle/Subtitle.jsx";
import Input from "../common/input/Input.jsx";
import Button from "../common/button/Button.jsx";


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

export default function PasswordNewForm() {
   return (
      <form action="">
         <div className={s.contentWrap}>
            <Title />
            <Subtitle subtitle="Create new password" />
            <Input inputData={inputData2} />
            <span className={s.text}>Create new password and we will send you further instructions to email</span>
            <div className={s.btn}>
               <Button label="Create new password" />
            </div>
         </div>
      </form>
   );
}



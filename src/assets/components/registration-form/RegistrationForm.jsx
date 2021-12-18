import s from "./RegistrationForm.module.scss";
import Title from "../common/title/Title.jsx";
import Subtitle from "../common/subtitle/Subtitle.jsx";
import Input from "../common/input/Input.tsx";
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

// данные для input confirm password
const inputData3 = {
   id: "password",
   type: "password",
   name: "password",
   for: "password",
   label: "Confirm password",
   style: {
      display: "inlineBlock"
   }
}

// стилизация кнопок
const styleButton1 = {
   backgroundColor: "#D7D8EF",
   color: "#21268F",
   width: "124px",
   boxShadow: "none"
}

const styleButton2 = {
   width: "187px"
}

export default function RegistrationForm() {
   return (
      <form action="">
         <div className={s.contentWrap}>
            <Title />
            <Subtitle subtitle="Sign Up" />
            <Input inputData={inputData1} />
            <Input inputData={inputData2} />
            <Input inputData={inputData3} />
            <div className={s.block}>
               <Button label="Cancel" style={styleButton1} />
               <Button label="Register" style={styleButton2} />
            </div>
         </div>
      </form>
   );
}



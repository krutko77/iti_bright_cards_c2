import s from "./ProfileForm.module.scss";
import Subtitle from "../common/subtitle/Subtitle.jsx";
import Button from "../common/button/Button.jsx";
import { Input } from "../common/input/Input";

import img from "../../../assets/img/photo-profile.png";
import icon from "../../../assets/img/photo-icon.svg";

// данные для input nickname
const inputData1 = {
   id: "nickname",
   type: "text",
   name: "nickname",
   for: "nickname",
   label: "Nickname",
   style: {
      display: "none"
   }
}

// данные для input email
const inputData2 = {
   id: "email",
   type: "email",
   name: "email",
   for: "email",
   label: "Email",
   style: {
      display: "none"
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
   width: "124px"
}

export default function ProfileForm() {
   return (
      <form action="">
         <div className={s.contentWrap}>
            <Subtitle subtitle="Personal Information" />
            <div className={s.img}>
               <img src={img} alt="img" />
               <div className={s.icon}>
                  <img src={icon} alt="icon" />
               </div>
            </div>
            <Input inputData={inputData1} />
            <Input inputData={inputData2} />
            <div className={s.block}>
               <Button label="Cancel" style={styleButton1} />
               <Button label="Save" style={styleButton2} />
            </div>
         </div>
      </form >
   );
}



import s from "./LearnQuestion.module.scss";
import Subtitle from "../common/subtitle/Subtitle.jsx";
import Button from "./../common/button/Button.tsx";

// стилизация кнопок
const buttonStyle1 = {
   backgroundColor: "#D7D8EF",
   color: "#21268F",
   width: "124px",
   boxShadow: "none"
}

const buttonStyle2 = {
   width: "187px"
}

export default function LearnQuestion() {
   return (
      <div className={s.contentWrap}> 
         <div className={s.title}>
            <Subtitle subtitle="Learn “Pack Name”" />
         </div>        
         <span className={s.text}><strong>Question</strong>: “How "This" works in JavaScript?”</span>
         <div className={s.buttonBlock}>
            <Button label="Cancel" style={buttonStyle1} />
            <Button label="Register" style={buttonStyle2} />
         </div>

      </div>
   )
}




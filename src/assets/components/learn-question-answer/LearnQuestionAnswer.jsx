import s from "./LearnQuestionAnswer.module.scss";
import Subtitle from "../common/subtitle/Subtitle.jsx";
import Button from "./../common/button/Button.tsx";
import TableButton from "../table/table-button/TableButton";

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

const tableButtonStyle = {
   '.active': {
      border: "2px solid #21268F"
   },
   textAligne: "center",
   fontWeight: "400",
   fontSize: "16px",
   width: "150px",
   marginBottom: "12px"
}

export default function LearnQuestionAnswer() {
   return (
      <div className={s.contentWrap}> 
         <div className={s.title}>
            <Subtitle subtitle="Learn “Pack Name”" />
         </div>        
         <span className={s.textTop}><strong>Question</strong>: “How "This" works in JavaScript?”</span>
         <span className={s.textBottom}><strong>Answer</strong>: “This is how "This" works in JavaScript”</span>
         <span className={s.label}>Rate yourself:</span>
         <div className={s.topButtonBlock}>
            <TableButton label="Did not know" style={tableButtonStyle} />
            <TableButton label="Forgot" style={tableButtonStyle} />
            <TableButton label="A lot of thought" style={tableButtonStyle} />
            <TableButton label="Сonfused" style={tableButtonStyle} />
            <TableButton label="Knew the answer" style={tableButtonStyle} />
         </div>        
         <div className={s.buttonBlock}>
            <Button label="Cancel" style={buttonStyle1} />
            <Button label="Register" style={buttonStyle2} />
         </div>
      </div>
   )
}




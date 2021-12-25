import s from "./ModalButtonBlock.module.scss";
import Button from "./../../common/button/Button.jsx";


export default function ModalButtonBlock (props) {
   return (
      <div className={s.modalButtonBlock}>
            <Button label={props.label1} style={props.style1} />
            <Button label={props.label2} style={props.style2} />
         </div>
   )
}



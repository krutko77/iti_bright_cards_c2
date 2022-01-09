import s from "./ModalButtonBlock.module.scss";
import {StyleType} from "../../../../../types/types";
import Button from "../button/Button";


export default function ModalButtonBlock (props: PropsType) {
   return (
      <div className={s.modalButtonBlock}>
            <Button label={props.label1} style={props.style1} onClick={props.callback1}/>
            <Button label={props.label2} style={props.style2} onClick={props.callback2}/>
         </div>
   )
}

type PropsType = {
    label1: string
    label2: string
    style1: StyleType
    style2: StyleType
    callback1: () => void
    callback2: () => void
}



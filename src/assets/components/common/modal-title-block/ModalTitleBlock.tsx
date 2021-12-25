import s from "./ModalTitleBlock.module.scss";

import icon from "./../../../img/close-icon.svg";

export default function ModalTitleBlock(props: PropsType) {
   return (
      <div className={s.modalTitleBlock}>
         <h2 className={s.title}>{props.title}</h2>
         <img className={s.icon} src={icon} alt="icon" onClick={props.onClose}/>
      </div>
   )
}

type PropsType = {
    title: string
    onClose: () => void
}




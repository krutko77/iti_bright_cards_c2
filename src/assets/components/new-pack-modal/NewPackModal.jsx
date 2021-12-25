import s from "./NewPackModal.module.scss";
import ModalTitleBlock from "../common/modal-title-block/ModalTitleBlock.jsx";
import ModalButtonBlock from "../common/modal-button-block/ModalButtonBlock.jsx";
import { Input } from "../../../assets/components/common/input/Input";



// стилизация кнопок
const styleButton1 = {
   width: "127px",
   backgroundColor: "#D7D8EF",
   color: "#454AA2",
   boxShadow: "none"
}

const styleButton2 = {
   width: "127px"
}

// данные для инпута
const inputData = {
   id: "text",
   type: "text",
   name: "text",
   for: "text",
   label: "Name pack",
   style: {
      display: "none"
   }
}


export default function NewPackModal() {
   return (
      <div className={s.newPackModal}>
         <div className={s.titleBlock}>
            <ModalTitleBlock title="Add new pack" />
         </div>
         <div className={s.content}>
            <div className={s.input}>
               <Input inputData={inputData} />
            </div>
            <ModalButtonBlock label1="Cancel" style1={styleButton1} label2="Save" style2={styleButton2} />
         </div>
      </div>
   )
}


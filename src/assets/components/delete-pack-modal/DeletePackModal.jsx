import s from "./DeletePackModal.module.scss";
import ModalTitleBlock from "../common/modal-title-block/ModalTitleBlock.tsx";
import ModalButtonBlock from "../common/modal-button-block/ModalButtonBlock.tsx";



// стилизация кнопок
const styleButton1 = {
   width: "127px",
   backgroundColor: "#D7D8EF",
   color: "#454AA2",
   boxShadow: "none"
}

const styleButton2 = {
   width: "127px",
   backgroundColor: "#F1453D",
   color: "#ECECF9",
   boxShadow: "0px 4px 18px rgba(241, 69, 61, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3)"
}


export default function DeletePackModal() {
   return (
      <div className={s.deletePackModal}>
         <div className={s.titleBlock}>
            <ModalTitleBlock title="Delete Pack" />
         </div>
         <div className={s.content}>
            <p className={s.text}>Do you really want to remove <strong>Pack Name - Name Pack?</strong> All cards will be excluded from this course.</p>
            <ModalButtonBlock label1="Cancel" style1={styleButton1} label2="Delete" style2={styleButton2} />
         </div>
      </div>
   )
}


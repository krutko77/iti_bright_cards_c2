import React from 'react';
import s from "./CommonDel.module.scss";
import ModalTitleBlock from "../../../assets/components/common/modal-title-block/ModalTitleBlock";
import ModalButtonBlock from "../../../assets/components/common/modal-button-block/ModalButtonBlock";
import ReactHtmlParser from 'react-html-parser';
import { buttonShadowColorThree } from "./../../../n1-main/m1-ui/common/components/styles/inlineVariables";
import { buttonColorTwo } from "./../../../n1-main/m1-ui/common/components/styles/inlineVariables";
import { buttonFontColorTwo } from "./../../../n1-main/m1-ui/common/components/styles/inlineVariables";
import { buttonColorThree } from "./../../../n1-main/m1-ui/common/components/styles/inlineVariables";
import { buttonFontColorThree } from "./../../../n1-main/m1-ui/common/components/styles/inlineVariables";

// стилизация кнопок
const styleDPButton1 = {
   width: "127px",
   backgroundColor: buttonColorTwo,
   color: buttonFontColorTwo,
   boxShadow: "none"
}

const styleDPButton2 = {
   width: "127px",
   backgroundColor: buttonColorThree,
   color: buttonFontColorThree,
   boxShadow: buttonShadowColorThree
}

export const CommonDel: React.FC<PropsType> = (props) => {
   return <div className={s.deletePackModal}>
      <div className={s.titleBlock}>
         <ModalTitleBlock title={props.title} onClose={props.closeHandler} />
      </div>
      <div className={s.content}>
         <p className={s.text}>{ReactHtmlParser(props.text)}</p>
         <ModalButtonBlock
            label1="Cancel"
            style1={styleDPButton1}
            label2="Delete"
            style2={styleDPButton2}
            callback1={props.closeHandler}
            callback2={props.delHandler}
         />
      </div>
   </div>
}

type PropsType = {
   title: string
   text: string
   closeHandler: () => void
   delHandler: () => void
}
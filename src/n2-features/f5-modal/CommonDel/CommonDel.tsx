import React from 'react';
import s from "./CommonDel.module.scss";
import ModalTitleBlock from "../../../assets/components/common/modal-title-block/ModalTitleBlock";
import ModalButtonBlock from "../../../assets/components/common/modal-button-block/ModalButtonBlock";
import ReactHtmlParser from 'react-html-parser';

// стилизация кнопок
const styleDPButton1 = {
    width: "127px",
    backgroundColor: "#D7D8EF",
    color: "#454AA2",
    boxShadow: "none"
}

const styleDPButton2 = {
    width: "127px",
    backgroundColor: "#F1453D",
    color: "#ECECF9",
    boxShadow: "0px 4px 18px rgba(241, 69, 61, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3)"
}

export const CommonDel: React.FC<PropsType> = (props) => {
    return <div className={s.deletePackModal}>
        <div className={s.titleBlock}>
            <ModalTitleBlock title={props.title} onClose={props.closeHandler}/>
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
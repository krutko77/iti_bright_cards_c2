import {Input} from "../../../assets/components/common/input/Input";
import {CommonBackground} from "../CommonBackground/CommonBackground";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";
import ModalButtonBlock from "../../../assets/components/common/modal-button-block/ModalButtonBlock";
import ModalTitleBlock from "../../../assets/components/common/modal-title-block/ModalTitleBlock";
import {styleNPButton1, styleNPButton2} from "../ModalAddPack/NewPackModal";
import s from '../ModalAddPack/NewPackModal.module.scss'

// data for inputs
export const inputNCData1 = {
    id: "text",
    type: "text",
    name: "text",
    for: "text",
    label: "Name question",
    style: {
        display: "none"
    }
}
export const inputNCData2 = {
    id: "text",
    type: "text",
    name: "text",
    for: "text",
    label: "Name answer",
    style: {
        display: "none"
    }
}

export const ModalAddCard: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch()
    const modalAddCardShowHide = useSelector<AppStoreType, boolean>(state => state.modal.modalAddCardShowHide)

    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    const buttonHandler = () => {
        props.addCard(question, answer)
        dispatch(closeAllModalsAC())
    }

    const onCloseHandler = () => {
        dispatch(closeAllModalsAC())
    }

    return (
        <CommonBackground modalShowHide={modalAddCardShowHide}>
            <div className={s.newPackModal}>
                <div className={s.titleBlock}>
                    <ModalTitleBlock title="Add new card" onClose={onCloseHandler}/>
                </div>
                <div className={s.content}>
                    <div className={s.input}>
                        <Input inputData={inputNCData1}
                               value={question}
                               onChangeText={setQuestion}
                        />
                        <Input inputData={inputNCData2}
                               value={answer}
                               onChangeText={setAnswer}
                        />
                    </div>
                    <ModalButtonBlock
                        label1="Cancel"
                        style1={styleNPButton1}
                        label2="Add"
                        style2={styleNPButton2}
                        callback1={onCloseHandler}
                        callback2={buttonHandler}
                    />
                </div>
            </div>
        </CommonBackground>
    )
}

type PropsType = {
    addCard: (question: string, answer: string) => void
}

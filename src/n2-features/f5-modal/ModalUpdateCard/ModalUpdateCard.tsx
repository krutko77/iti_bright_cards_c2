import React, {useEffect, useState} from "react";
import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";
import {Modal} from "../Modal/Modal";
import SuperInputText from "../../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {CardType, updateCardTC} from "../../../n1-main/m2-bll/cardsReducer";
import {useParams} from "react-router-dom";
import s from "../ModalAddPack/NewPackModal.module.scss";
import ModalTitleBlock from "../../../assets/components/common/modal-title-block/ModalTitleBlock";
import {Input} from "../../../assets/components/common/input/Input";
import ModalButtonBlock from "../../../assets/components/common/modal-button-block/ModalButtonBlock";
import {styleNPButton1, styleNPButton2} from "../ModalAddPack/NewPackModal";
import {inputNCData1, inputNCData2} from "../ModalAddCard/ModalAddCard";

export const ModalUpdateCard = () => {
    const dispatch = useDispatch()

    let {id} = useParams()

    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    const modalUpdateCardShowHide = useSelector<AppStoreType, boolean>(state =>
        state.modal.modalUpdateCardShowHide)
    const clickedCardId = useSelector<AppStoreType, string>(state => state.modal.clickedCardId)
    const cards = useSelector<AppStoreType, Array<CardType>>(state => state.cards.cards)

    const card = cards.find(e => e._id === clickedCardId)

    let oldCardQuestion = ''
    let oldCardAnswer = ''
    if (card) {
        oldCardQuestion = card.question
        oldCardAnswer = card.answer
    }

    useEffect(() => {
        setQuestion(oldCardQuestion)
        setAnswer(oldCardAnswer)
    },[oldCardQuestion, oldCardAnswer])

    const buttonHandler = () => {
        dispatch(closeAllModalsAC())
        if (id)
        dispatch(updateCardTC(clickedCardId,id,question,answer))
    }

    const onCloseHandler = () => {
        dispatch(closeAllModalsAC())
    }

    return <Modal modalShowHide={modalUpdateCardShowHide} version={'Pavel'}>
        <div className={s.newPackModal}>
            <div className={s.titleBlock}>
                <ModalTitleBlock title="Update card" onClose={onCloseHandler}/>
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
                    label2="Update"
                    style2={styleNPButton2}
                    callback1={onCloseHandler}
                    callback2={buttonHandler}
                />
            </div>
        </div>
    </Modal>
}
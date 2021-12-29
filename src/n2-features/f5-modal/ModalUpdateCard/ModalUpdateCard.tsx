import React, {useEffect, useState} from "react";
import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";
import {CommonBackground} from "../CommonBackground/CommonBackground";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {CardType, updateCardTC} from "../../../n1-main/m2-bll/cardsReducer";
import {useParams} from "react-router-dom";
import s from "../CommonAddUpdate/CommonAddUpdate.module.scss";
import ModalTitleBlock from "../../../assets/components/common/modal-title-block/ModalTitleBlock";
import {Input} from "../../../assets/components/common/input/Input";
import ModalButtonBlock from "../../../assets/components/common/modal-button-block/ModalButtonBlock";
import {inputNPData, styleNPButton1, styleNPButton2} from "../ModalAddPack/ModalAddPack";
import {inputNCData1, inputNCData2} from "../ModalAddCard/ModalAddCard";
import {CommonAddUpdate} from "../CommonAddUpdate/CommonAddUpdate";

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

    return <CommonBackground modalShowHide={modalUpdateCardShowHide}>
        <CommonAddUpdate
            title={'Update card'}
            closeHandler={onCloseHandler}
            yesButtonText={'Update'}
            yesButtonHandler={buttonHandler}
            inputs={[
                {inputData: inputNCData1, value: question, onChangeText: setQuestion},
                {inputData: inputNCData2, value: answer, onChangeText: setAnswer},
            ]}
            style1={styleNPButton1}
            style2={styleNPButton2}
        />
    </CommonBackground>
}
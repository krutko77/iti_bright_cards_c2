import React, {useEffect, useState} from "react";
import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";
import {Modal} from "../Modal/Modal";
import SuperInputText from "../../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {CardType, updateCardTC} from "../../../n1-main/m2-bll/cardsReducer";
import {useParams} from "react-router-dom";

export const ModalUpdateCard = () => {
    const dispatch = useDispatch()

    let {id} = useParams()

    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    const modalUpdateCardShowHide = useSelector<AppStoreType, boolean>(state =>
        state.modal.modalUpdateCardShowHide)
    const clickedCardId = useSelector<AppStoreType, string>(state => state.modal.clickedCardId)
    const cards = useSelector<AppStoreType, Array<CardType>>(state => state.cards)

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

    return <Modal modalShowHide={modalUpdateCardShowHide} version={"Briws"}>
        <div>Enter new Card question:</div>
        <SuperInputText value={question} onChangeText={setQuestion}/>
        <div>Enter new Card answer:</div>
        <SuperInputText value={answer} onChangeText={setAnswer}/>
        <SuperButton onClick={buttonHandler}>Change Card</SuperButton>
    </Modal>
}
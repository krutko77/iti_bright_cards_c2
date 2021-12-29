import {CommonBackground} from "../CommonBackground/CommonBackground";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";
import {styleNPButton1, styleNPButton2} from "../ModalAddPack/ModalAddPack";
import {CommonAddUpdate} from "../CommonAddUpdate/CommonAddUpdate";

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
            <CommonAddUpdate
                title={"Add new carddd"}
                closeHandler={onCloseHandler}
                yesButtonText={'Add'}
                yesButtonHandler={buttonHandler}
                inputs={[
                    {inputData: inputNCData1, value: question, onChangeText: setQuestion},
                    {inputData: inputNCData2, value: answer, onChangeText: setAnswer}
                ]}
                style1={styleNPButton1}
                style2={styleNPButton2}
            />
        </CommonBackground>
    )
}

type PropsType = {
    addCard: (question: string, answer: string) => void
}

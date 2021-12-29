import {CommonBackground} from "../CommonBackground/CommonBackground";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {addPacksTC} from "../../../n1-main/m2-bll/packsReducer";
import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";
import {StyleType} from "../../../types/types";
import {customColor} from "../../../n1-main/m1-ui/common/components/styles/inlineVariables";
import {CommonAddUpdate} from "../CommonAddUpdate/CommonAddUpdate";

// стилизация кнопок
export const styleNPButton1: StyleType = {
    width: "127px",
    backgroundColor: "#D7D8EF",
    color: customColor,
    boxShadow: "none"
}

export const styleNPButton2: StyleType = {
    width: "127px"
}

// данные для инпута
export const inputNPData = {
    id: "text",
    type: "text",
    name: "text",
    for: "text",
    label: "Name pack",
    style: {
        display: "none"
    }
}

export default function ModalAddPack() {
    const dispatch = useDispatch()
    const [cardPackNameInModal, setCardPackNameInModal] = useState('')

    const modalAddCardPackShowHide = useSelector<AppStoreType, boolean>(state => state.modal.modalAddCardsPackShowHide)

    const addCardPackInModalButtonHandler = () => {
        dispatch(addPacksTC(cardPackNameInModal))
        dispatch(closeAllModalsAC())
    }

    const onCloseHandler = () => {
        dispatch(closeAllModalsAC())
    }

    return (
        <CommonBackground modalShowHide={modalAddCardPackShowHide}>
            <CommonAddUpdate
                title={"Add new packd"}
                closeHandler={onCloseHandler}
                yesButtonText={'Add'}
                yesButtonHandler={addCardPackInModalButtonHandler}
                inputs={[
                    {inputData: inputNPData, value: cardPackNameInModal, onChangeText: setCardPackNameInModal},
                ]}
                style1={styleNPButton1}
                style2={styleNPButton2}
            />
        </CommonBackground>
    )
}


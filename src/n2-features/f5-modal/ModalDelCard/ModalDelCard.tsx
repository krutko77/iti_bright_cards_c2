import React from "react";
import {Modal} from "../Modal/Modal";
import SuperButton from "../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";

export const ModalDelCard = () => {

    const dispatch = useDispatch()
    const modalDelCardShowHide = useSelector<AppStoreType, boolean>(state => state.modal.modalDelCardShowHide)
    const clickedCardId = useSelector<AppStoreType, string>(state => state.modal.clickedCardId)

    const modalYesDelCardPackHandler = () => {
        alert(`I will delete card with id:\n${clickedCardId}`)
        dispatch(closeAllModalsAC())
    }
    const modalNoDelCardPackHandler = () => {
        dispatch(closeAllModalsAC())
    }

    return <Modal modalShowHide={modalDelCardShowHide}>
        Are you sure you want to delete the Card?
        <div>
            <SuperButton onClick={modalYesDelCardPackHandler}>Yes</SuperButton>
            <SuperButton onClick={modalNoDelCardPackHandler}>No</SuperButton>
        </div>
    </Modal>
}
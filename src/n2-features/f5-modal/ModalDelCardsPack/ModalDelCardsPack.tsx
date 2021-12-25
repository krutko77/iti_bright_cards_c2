import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";
import {Modal} from "../Modal/Modal";
import SuperButton from "../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";

export const ModalDelCardsPack = () => {
    const dispatch = useDispatch()

    const modalDelCardPackShowHide = useSelector<AppStoreType, boolean>(state => state.modal.modalDelCardsPackShowHide)
    const clickedCardPackId = useSelector<AppStoreType, string>(state => state.modal.clickedCardsPackId)

    const modalYesDelCardPackHandler = (id: string) => {
        dispatch(closeAllModalsAC())
        alert(`I will delete card pack with id:\n${id}`)
    }
    const modalNoDelCardPackHandler = () => {
        dispatch(closeAllModalsAC())

    }

    return <Modal modalShowHide={modalDelCardPackShowHide}>
        Are you sure you want to delete the Card Pack?
        <div>
            <SuperButton onClick={() => modalYesDelCardPackHandler(clickedCardPackId)}>Yes</SuperButton>
            <SuperButton onClick={modalNoDelCardPackHandler}>No</SuperButton>
        </div>
    </Modal>
}
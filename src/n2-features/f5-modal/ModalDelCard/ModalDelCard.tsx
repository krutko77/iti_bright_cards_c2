import React from "react";
import {Modal} from "../Modal/Modal";
import SuperButton from "../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";
import {delCardTC} from "../../../n1-main/m2-bll/cardsReducer";
import {useParams} from "react-router-dom";

export const ModalDelCard = () => {

    let {id} = useParams()

    const dispatch = useDispatch()
    const modalDelCardShowHide = useSelector<AppStoreType, boolean>(state => state.modal.modalDelCardShowHide)
    const clickedCardId = useSelector<AppStoreType, string>(state => state.modal.clickedCardId)

    const modalYesDelCardPackHandler = () => {
        if (id)
        dispatch(delCardTC(clickedCardId,id))
        dispatch(closeAllModalsAC())
    }
    const modalNoDelCardPackHandler = () => {
        dispatch(closeAllModalsAC())
    }

    return <Modal modalShowHide={modalDelCardShowHide} version={"Briws"}>
        Are you sure you want to delete the Card?
        <div>
            <SuperButton onClick={modalYesDelCardPackHandler}>Yes</SuperButton>
            <SuperButton onClick={modalNoDelCardPackHandler}>No</SuperButton>
        </div>
    </Modal>
}
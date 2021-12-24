import React, {useState} from "react";
import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";
import {Modal} from "../Modal/Modal";
import SuperInputText from "../../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {addPacksTC} from "../../../n1-main/m2-bll/packsReducer";

export const ModalAddCardsPack = () => {
    const dispatch = useDispatch()
    const [cardPackNameInModal, setCardPackNameInModal] = useState('')

    const modalAddCardPackShowHide = useSelector<AppStoreType, boolean>(state => state.modal.modalAddCardsPackShowHide)

    const addCardPackInModalButtonHandler = () => {
        dispatch(addPacksTC(cardPackNameInModal))
        dispatch(closeAllModalsAC())
    }

    return <Modal modalShowHide={modalAddCardPackShowHide}>
        Enter Card Pack name.
        <div>
            <SuperInputText value={cardPackNameInModal}
                            onChangeText={setCardPackNameInModal}/>
        </div>
        <SuperButton onClick={addCardPackInModalButtonHandler}>Add Card Pack</SuperButton>
    </Modal>
}
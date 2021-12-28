import s from "../ModalAddPack/NewPackModal.module.scss";
import {Input} from "../../../assets/components/common/input/Input";
import {Modal} from "../Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {addPacksTC} from "../../../n1-main/m2-bll/packsReducer";
import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";
import ModalButtonBlock from "../../../assets/components/common/modal-button-block/ModalButtonBlock";
import {StyleType} from "../../../types/types";
import ModalTitleBlock from "../../../assets/components/common/modal-title-block/ModalTitleBlock";
import {customColor} from "../../../n1-main/m1-ui/common/components/styles/inlineVariables";



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

export default function NewPackModal() {
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
        <Modal modalShowHide={modalAddCardPackShowHide} version={'Pavel'}>
            <div className={s.newPackModal}>
                <div className={s.titleBlock}>
                    <ModalTitleBlock title="Add new pack" onClose={onCloseHandler}/>
                </div>
                <div className={s.content}>
                    <div className={s.input}>
                        <Input inputData={inputNPData}
                               value={cardPackNameInModal}
                               onChangeText={setCardPackNameInModal}
                        />
                    </div>
                    <ModalButtonBlock
                        label1="Cancel"
                        style1={styleNPButton1}
                        label2="Save" 
                        style2={styleNPButton2}
                        callback1={onCloseHandler}
                        callback2={addCardPackInModalButtonHandler}
                    />
                </div>
            </div>
        </Modal>
    )
}


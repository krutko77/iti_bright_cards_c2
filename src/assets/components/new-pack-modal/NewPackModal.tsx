import s from "./NewPackModal.module.scss";
import {Input} from "../../../assets/components/common/input/Input";
import {Modal} from "../../../n2-features/f5-modal/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {addPacksTC} from "../../../n1-main/m2-bll/packsReducer";
import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";
import ModalButtonBlock from "../common/modal-button-block/ModalButtonBlock";
import {StyleType} from "../../../types/types";
import ModalTitleBlock from "../common/modal-title-block/ModalTitleBlock";

// стилизация кнопок
const styleButton1: StyleType = {
    width: "127px",
    backgroundColor: "#D7D8EF",
    color: "#454AA2",
    boxShadow: "none"
}

const styleButton2: StyleType = {
    width: "127px"
}

// данные для инпута
const inputData = {
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
                        <Input inputData={inputData}
                               value={cardPackNameInModal}
                               onChangeText={setCardPackNameInModal}
                        />
                    </div>
                    <ModalButtonBlock
                        label1="Cancel"
                        style1={styleButton1}
                        label2="Save" 
                        style2={styleButton2}
                        callback1={onCloseHandler}
                        callback2={addCardPackInModalButtonHandler}
                    />
                </div>
            </div>
        </Modal>
    )
}


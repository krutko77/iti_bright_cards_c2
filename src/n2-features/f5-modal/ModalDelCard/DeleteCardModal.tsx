import s from '../ModalDelPack/DeletePackModal.module.scss'
import ModalTitleBlock from "../../../assets/components/common/modal-title-block/ModalTitleBlock";
import ModalButtonBlock from "../../../assets/components/common/modal-button-block/ModalButtonBlock";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";

import {Modal} from "../Modal/Modal";
import {styleDPButton1, styleDPButton2} from "../ModalDelPack/DeletePackModal";
import {useParams} from "react-router-dom";
import {CardType, delCardTC} from "../../../n1-main/m2-bll/cardsReducer";

export default function DeleteCardModal() {
    let {id} = useParams()

    const dispatch = useDispatch()
    const modalDelCardShowHide = useSelector<AppStoreType, boolean>(state => state.modal.modalDelCardShowHide)
    const clickedCardId = useSelector<AppStoreType, string>(state => state.modal.clickedCardId)
    const cards = useSelector<AppStoreType, Array<CardType>>(state => state.cards.cards)

    const card = cards.find(e => e._id === clickedCardId)

    const modalYesDelCardPackHandler = () => {
        if (id)
            dispatch(delCardTC(clickedCardId,id))
        dispatch(closeAllModalsAC())
    }

    const onCloseHandler = () => {
        dispatch(closeAllModalsAC())
    }

    return (
        <Modal modalShowHide={modalDelCardShowHide} version={'Pavel'}>
            <div className={s.deletePackModal}>
                <div className={s.titleBlock}>
                    <ModalTitleBlock title="Delete Card" onClose={onCloseHandler}/>
                </div>
                <div className={s.content}>
                    <p className={s.text}>Do you really want to remove card <strong>{card && card.question}</strong>?</p>
                    <ModalButtonBlock
                        label1="Cancel"
                        style1={styleDPButton1}
                        label2="Delete"
                        style2={styleDPButton2}
                        callback1={onCloseHandler}
                        callback2={modalYesDelCardPackHandler}
                    />
                </div>
            </div>
        </Modal>
    )
}


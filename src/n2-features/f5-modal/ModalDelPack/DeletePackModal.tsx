import s from "./DeletePackModal.module.scss";
import ModalTitleBlock from "../../../assets/components/common/modal-title-block/ModalTitleBlock";
import ModalButtonBlock from "../../../assets/components/common/modal-button-block/ModalButtonBlock";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";
import {Modal} from "../Modal/Modal";
import {delPacksTC, PackType} from "../../../n1-main/m2-bll/packsReducer";

// стилизация кнопок
export const styleDPButton1 = {
    width: "127px",
    backgroundColor: "#D7D8EF",
    color: "#454AA2",
    boxShadow: "none"
}

export const styleDPButton2 = {
    width: "127px",
    backgroundColor: "#F1453D",
    color: "#ECECF9",
    boxShadow: "0px 4px 18px rgba(241, 69, 61, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3)"
}

export default function DeletePackModal() {
    const dispatch = useDispatch()

    const modalDelCardPackShowHide = useSelector<AppStoreType, boolean>(state => state.modal.modalDelCardsPackShowHide)
    const clickedCardPackId = useSelector<AppStoreType, string>(state => state.modal.clickedCardsPackId)
    const cards = useSelector<AppStoreType, PackType[]>(state => state.packs.cardPacks)
    const pack = cards.find(e => e._id === clickedCardPackId)

    const modalYesDelCardPackHandler = (id: string) => {
        dispatch(closeAllModalsAC())
        dispatch(delPacksTC(id))
        alert(pack && pack.name + " Removed ")
    }

    const onCloseHandler = () => {
        dispatch(closeAllModalsAC())
    }

    return (
        <Modal modalShowHide={modalDelCardPackShowHide} version={'Pavel'}>
            <div className={s.deletePackModal}>
                <div className={s.titleBlock}>
                    <ModalTitleBlock title="Delete Pack" onClose={onCloseHandler}/>
                </div>
                <div className={s.content}>
                    <p className={s.text}>Do you really want to remove pack <strong>{pack && pack.name}?</strong> All cards
                        will be excluded from this course.</p>
                    <ModalButtonBlock
                        label1="Cancel"
                        style1={styleDPButton1}
                        label2="Delete"
                        style2={styleDPButton2}
                        callback1={onCloseHandler}
                        callback2={() => modalYesDelCardPackHandler(clickedCardPackId)}
                    />
                </div>
            </div>
        </Modal>
    )
}


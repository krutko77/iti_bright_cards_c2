import ModalTitleBlock from "../common/modal-title-block/ModalTitleBlock";
import ModalButtonBlock from "../common/modal-button-block/ModalButtonBlock";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";
import {Modal} from "../../../n2-features/f5-modal/Modal/Modal";
import {delPacksTC, PackType, updatePacksTC} from "../../../n1-main/m2-bll/packsReducer";
import s from '../new-pack-modal/NewPackModal.module.scss'
import {inputNPData, styleNPButton1, styleNPButton2} from "../new-pack-modal/NewPackModal";
import {useEffect, useState} from "react";
import {Input} from "../common/input/Input";


export default function UpdatePackModal() {
    const dispatch = useDispatch()

    const [cardsPackName, setCardPackName] = useState('')

    const modalUpdateCardsPackShowHide = useSelector<AppStoreType, boolean>(state =>
        state.modal.modalUpdateCardsPackShowHide)
    const clickedCardPackId = useSelector<AppStoreType, string>(state => state.modal.clickedCardsPackId)

    const cardsPacks = useSelector<AppStoreType, Array<PackType>>(state => state.packs.cardPacks)
    const cardsPack = cardsPacks.find(e => e._id === clickedCardPackId)
    let oldCardsPackName = ''
    if (cardsPack) oldCardsPackName = cardsPack.name

    useEffect(() => {
        setCardPackName(oldCardsPackName)
    }, [oldCardsPackName])


    const buttonHandler = (id: string) => {
        dispatch(updatePacksTC(id,cardsPackName))
        dispatch(closeAllModalsAC())
    }

    const onCloseHandler = () => {
        dispatch(closeAllModalsAC())
    }

    return (
        <Modal modalShowHide={modalUpdateCardsPackShowHide} version={'Pavel'}>
            <div className={s.newPackModal}>
                <div className={s.titleBlock}>
                    <ModalTitleBlock title="Add new pack" onClose={onCloseHandler}/>
                </div>
                <div className={s.content}>
                    <div className={s.input}>
                        <Input inputData={inputNPData}
                               value={cardsPackName}
                               onChangeText={setCardPackName}
                        />
                    </div>
                    <ModalButtonBlock
                        label1="Cancel"
                        style1={styleNPButton1}
                        label2="Save"
                        style2={styleNPButton2}
                        callback1={onCloseHandler}
                        callback2={() => {buttonHandler(clickedCardPackId)}}
                    />
                </div>
            </div>
        </Modal>
    )
}


import React, {useEffect, useState} from "react";
import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";
import {Modal} from "../Modal/Modal";
import SuperInputText from "../../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import s from './ModalUpdateCardsPack.module.scss'
import {packType} from "../../../n1-main/m2-bll/packsReducer";

export const ModalUpdateCardsPack = () => {
    const dispatch = useDispatch()

    const [cardsPackName, setCardPackName] = useState('')

    const modalUpdateCardsPackShowHide = useSelector<AppStoreType, boolean>(state =>
        state.modal.modalUpdateCardsPackShowHide)
    const clickedCardPackId = useSelector<AppStoreType, string>(state => state.modal.clickedCardsPackId)

    const cardsPacks = useSelector<AppStoreType, Array<packType>>(state => state.packs.cardPacks)
    const cardsPack = cardsPacks.find(e => e._id === clickedCardPackId)
    let oldCardsPackName = ''
    if (cardsPack) oldCardsPackName = cardsPack.name

    useEffect(() => {
        setCardPackName(oldCardsPackName)
    }, [oldCardsPackName])


    const buttonHandler = (id: string) => {
        alert(`I will update card pack with id and new name:\n${id}\n${cardsPackName}`)
        dispatch(closeAllModalsAC())
    }

    return <Modal modalShowHide={modalUpdateCardsPackShowHide}>
        Enter new Cards Pack name.
        <div>
            <SuperInputText value={cardsPackName}
                            onChangeText={setCardPackName}/>
        </div>
        <SuperButton onClick={() => buttonHandler(clickedCardPackId)} className={s.button}>Change Cards Pack name</SuperButton>
    </Modal>
}
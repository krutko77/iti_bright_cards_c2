import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";
import {CommonBackground} from "../CommonBackground/CommonBackground";
import {PackType, updatePacksTC} from "../../../n1-main/m2-bll/packsReducer";
import {inputNPData, styleNPButton1, styleNPButton2} from "../ModalAddPack/NewPackModal";
import {useEffect, useState} from "react";
import {CommonAddUpdate} from "../CommonAddUpdate/CommonAddUpdate";


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
        <CommonBackground modalShowHide={modalUpdateCardsPackShowHide}>
            <CommonAddUpdate
                title={'Update Cards pack'}
                closeHandler={onCloseHandler}
                yesButtonText={'Save'}
                yesButtonHandler={() => {buttonHandler(clickedCardPackId)}}
                inputs={[
                    {inputData: inputNPData, value: cardsPackName, onChangeText: setCardPackName},
                ]}
                style1={styleNPButton1}
                style2={styleNPButton2}
            />
        </CommonBackground>
    )
}


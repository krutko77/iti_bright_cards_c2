import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";

import {CommonBackground} from "../CommonBackground/CommonBackground";
import {useParams} from "react-router-dom";
import {CardType, delCardTC} from "../../../n1-main/m2-bll/cardsReducer";
import {CommonDel} from "../CommonDel/CommonDel";

export default function ModalDelCard() {
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
        <CommonBackground modalShowHide={modalDelCardShowHide}>
            <CommonDel
                title={"Delete Card"}
                text={`Do you really want to remove card <strong>${card && card.question}</strong>?`}
                closeHandler={onCloseHandler}
                delHandler={modalYesDelCardPackHandler}
            />
        </CommonBackground>
    )
}


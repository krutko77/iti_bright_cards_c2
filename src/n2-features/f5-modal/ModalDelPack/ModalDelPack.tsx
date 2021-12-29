import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {closeAllModalsAC} from "../../../n1-main/m2-bll/modalReducer";
import {CommonBackground} from "../CommonBackground/CommonBackground";
import {delPacksTC, PackType} from "../../../n1-main/m2-bll/packsReducer";
import {CommonDel} from "../CommonDel/CommonDel";

export default function ModalDelPack() {
    const dispatch = useDispatch()

    const modalDelCardPackShowHide = useSelector<AppStoreType, boolean>(state => state.modal.modalDelCardsPackShowHide)
    const clickedCardPackId = useSelector<AppStoreType, string>(state => state.modal.clickedCardsPackId)
    const cards = useSelector<AppStoreType, PackType[]>(state => state.packs.cardPacks)
    const pack = cards.find(e => e._id === clickedCardPackId)

    const modalYesDelCardPackHandler = (id: string) => {
        dispatch(closeAllModalsAC())
        dispatch(delPacksTC(id))
        // alert(pack && pack.name + " Removed ")
    }

    const onCloseHandler = () => {
        dispatch(closeAllModalsAC())
    }

    return (
        <CommonBackground modalShowHide={modalDelCardPackShowHide}>
            <CommonDel
                title={'Delete Pack'}
                text={`Do you really want to remove pack <Strong>${pack && pack.name}</strong>? All cards
                        will be excluded from this course.`}
                closeHandler={onCloseHandler}
                delHandler={() => modalYesDelCardPackHandler(clickedCardPackId)}
            />
        </CommonBackground>
    )
}


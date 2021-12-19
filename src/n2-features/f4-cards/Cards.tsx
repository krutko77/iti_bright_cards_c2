import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../n1-main/m2-bll/store";

export const Cards = () => {

    const cards = useSelector<AppStoreType>(state => state.cards)
    const dispatch = useDispatch();
    return (
        <div>
            Cards
        </div>
    )
}

export type CardsType = {
    [key: string]: Array<{}>
}
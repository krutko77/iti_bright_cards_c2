import {useDispatch, useSelector} from "react-redux";
import {CardsType} from "../f4-cards/Cards";
import {AppStoreType} from "../../n1-main/m2-bll/store";

export const Packs = () => {
    const packs = useSelector<AppStoreType, Array<CardsType>>(state => state.packs)
    const dispatch = useDispatch();

    return (
        <div>
            Packs
        </div>
    )
}
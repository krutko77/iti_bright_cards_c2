import React from 'react';
import {useDispatch} from "react-redux";
import {
    setSortCardsAC,
    setSortPacksAC,
    SortCardsType,
    SortPackType
} from "../../../../n1-main/m2-bll/findAndPaginationReducer";
import {Sort} from "../SortMain/Sort";

export const SortCardsContainer: React.FC<PropsType> = (props) => {

    const dispatch = useDispatch()

    const upperSortHandler = () => {
        dispatch(setSortCardsAC(props.upperSort))
    }
    const lowerSortHandler = () => {
        dispatch(setSortCardsAC(props.lowerCount))

    }

    return <Sort upperSortHandler={upperSortHandler} lowerSortHandler={lowerSortHandler}/>
}

type PropsType = {
    upperSort: SortCardsType
    lowerCount: SortCardsType
}

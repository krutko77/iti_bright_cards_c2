import React from 'react';
import {useDispatch} from "react-redux";
import {setSortPacksAC, SortPackType} from "../../../../n1-main/m2-bll/findAndPaginationReducer";
import {Sort} from "../SortMain/Sort";

export const SortCardPacksContainer: React.FC<PropsType> = (props) => {

    const dispatch = useDispatch()

    const upperSortHandler = () => {
        dispatch(setSortPacksAC(props.upperSort))
    }
    const lowerSortHandler = () => {
        dispatch(setSortPacksAC(props.lowerCount))

    }

    return <Sort upperSortHandler={upperSortHandler} lowerSortHandler={lowerSortHandler}/>
}

type PropsType = {
    upperSort: SortPackType
    lowerCount: SortPackType
}

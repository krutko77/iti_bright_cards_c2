import * as React from 'react';
import s from './SortCardPacks.module.scss'
import SuperButton from "../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import {useDispatch} from "react-redux";
import {setSortPacksAC, SortPackType} from "../../../n1-main/m2-bll/findAndPaginationReducer";

export const SortCardPacks: React.FC<PropsType> = (props) => {

    const dispatch = useDispatch()

    const upperSortHandler = () => {
        dispatch(setSortPacksAC(props.upperSort))
    }
    const lowerSortHandler = () => {
        dispatch(setSortPacksAC(props.lowerCount))

    }

    return <div className={s.container}>
        <SuperButton className={s.btn} onClick={upperSortHandler}>^</SuperButton>
        <SuperButton className={s.btn} onClick={lowerSortHandler}>v</SuperButton>
    </div>
}

type PropsType = {
    upperSort: SortPackType
    lowerCount: SortPackType
}

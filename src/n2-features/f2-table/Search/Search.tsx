import React, {ChangeEvent, useState} from 'react';
import SuperInputText from "../../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import s from './Search.module.scss'
import SuperButton from "../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {setSearchPackNameAC} from "../../../n1-main/m2-bll/findAndPaginationReducer";
import {getPacksTC} from "../../../n1-main/m2-bll/packsReducer";

export const Search = () => {
    const dispatch = useDispatch()
    const value = useSelector<AppStoreType, string>(state => state.findAndPagination.cardPacks.packName)

    const setValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchPackNameAC(e.currentTarget.value))
    }

    const findHandler = () => {
        dispatch(getPacksTC())
    }

    return (
        <div className={s.search}>
            <SuperInputText
                value={value}
                onChange={setValueHandler}
                placeholder={'Find Cards Pack'}
            />
            <SuperButton onClick={findHandler}>Find Cards Pack</SuperButton>
        </div>
    )
}
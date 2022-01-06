import React, {ChangeEvent, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../n1-main/m2-bll/store";
import {setSearchPackNameAC} from "../../../../n1-main/m2-bll/findAndPaginationReducer";
import {getPacksTC} from "../../../../n1-main/m2-bll/packsReducer";
import Search from "../SearchMain/Search";

export const SearchCardsPacksContainer = () => {
    const dispatch = useDispatch()
    const value = useSelector<AppStoreType, string>(state => state.findAndPagination.cardPacks.packName)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch(getPacksTC())
        }, 1000);
        return () => clearTimeout(timeoutId)
    }, [value])
    const setInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchPackNameAC(e.currentTarget.value))
    }

    const buttonFindHandler = () => {
        dispatch(getPacksTC())
    }

    return <Search
        inputValue={value}
        inputPlaceholder={'Enter Cards Pack name'}
        setInputValueHandler={setInputValueHandler}
        buttonFindHandler={buttonFindHandler}
        buttonText={'Find Cards Packs'}
    />
}
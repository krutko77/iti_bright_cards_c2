import React, {ChangeEvent, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../n1-main/m2-bll/store";
import {setSearchPackNameAC} from "../../../../n1-main/m2-bll/findAndPaginationReducer";
import {getPacksTC} from "../../../../n1-main/m2-bll/packsReducer";
import Search from "../SearchMain/Search";
import useDebounce from "../../../../hooks/useDebounce";

export const SearchCardsPacksContainer = () => {
    const dispatch = useDispatch()
    const value = useSelector<AppStoreType, string>(state => state.findAndPagination.cardPacks.packName)

    const debouncedSearch = useDebounce(() => dispatch(getPacksTC()), 1000)

    const setInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchPackNameAC(e.currentTarget.value))
    }

    const onKeyUpHandler = () => {
        debouncedSearch()
    }

    return <Search
        inputValue={value}
        inputPlaceholder={'Enter OldCards Pack name'}
        setInputValueHandler={setInputValueHandler}
        buttonText={'Find OldCards OldPacks'}
        onKeyUp={onKeyUpHandler}
    />
}
import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../n1-main/m2-bll/store";
import {setSearchQuestionAC} from "../../../../n1-main/m2-bll/findAndPaginationReducer";
import {getCardsTC} from "../../../../n1-main/m2-bll/cardsReducer";
import Search from "../SearchMain/Search";
import useDebounce from "../../../../hooks/useDebounce";

export const SearchCardsContainer = () => {
    const dispatch = useDispatch()
    const value = useSelector<AppStoreType, string>(state => state.findAndPagination.cards.questionText)
    const cardId = useSelector<AppStoreType, string>(state => state.findAndPagination.cards.selectedCardId)

    const debouncedSearch = useDebounce(() => dispatch(getCardsTC(cardId)), 1000)

    const setInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuestionAC(e.currentTarget.value))
    }

    const onKeyUpHandler = () => {
        debouncedSearch()
    }

    return <Search
        inputValue={value}
        inputPlaceholder={'Enter question text'}
        setInputValueHandler={setInputValueHandler}
        buttonText={'Find OldCards'}
        onKeyUp={onKeyUpHandler}
    />
}
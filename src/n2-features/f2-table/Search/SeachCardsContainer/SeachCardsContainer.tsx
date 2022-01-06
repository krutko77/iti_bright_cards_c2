import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../n1-main/m2-bll/store";
import {setSearchQuestionAC} from "../../../../n1-main/m2-bll/findAndPaginationReducer";
import {getCardsTC} from "../../../../n1-main/m2-bll/cardsReducer";
import Search from "../SearchMain/Search";

export const SearchCardsContainer = () => {
    const dispatch = useDispatch()
    const value = useSelector<AppStoreType, string>(state => state.findAndPagination.cards.questionText)
    const cardId = useSelector<AppStoreType, string>(state => state.findAndPagination.cards.selectedCardId)

    const setInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuestionAC(e.currentTarget.value))
    }

    const buttonFindHandler = () => {
        dispatch(getCardsTC(cardId))
    }

    return <Search
        inputValue={value}
        inputPlaceholder={'Enter question text'}
        setInputValueHandler={setInputValueHandler}
        buttonFindHandler={buttonFindHandler}
        buttonText={'Find Cards'}
    />
}
import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../n1-main/m2-bll/store";
import {setSearchPackNameAC} from "../../../../n1-main/m2-bll/findAndPaginationReducer";
import {getPacksTC} from "../../../../n1-main/m2-bll/packsReducer";
import Search from "../../../../assets/components/common/search/Search";
// import {Search} from "../SearchMain/Search";

export const SearchCardsPacksContainer = () => {
    const dispatch = useDispatch()
    const value = useSelector<AppStoreType, string>(state => state.findAndPagination.cardPacks.packName)

    let intervalID: NodeJS.Timeout;

    const setInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchPackNameAC(e.currentTarget.value))
        if (intervalID) {
            console.log('intervalID cleared: ', intervalID)
            clearInterval(intervalID)
        }
        /*intervalID = setTimeout(() => {
            dispatch(getPacksTC())
        }, 3000);*/
    }

    const buttonFindHandler = () => {
        dispatch(getPacksTC())
    }

    const onKeyUpHandler = () => {
        /*if (intervalID) clearInterval(intervalID) */
        intervalID = setTimeout(() => {
            dispatch(getPacksTC())
            console.log('server request')
        }, 3000);


    }


    return <Search
        inputValue={value}
        inputPlaceholder={'Enter Cards Pack name'}
        setInputValueHandler={setInputValueHandler}
        buttonFindHandler={buttonFindHandler}
        buttonText={'Find Cards Packs'}
        showRange={false}
        onKeyUp={onKeyUpHandler}
    />
}
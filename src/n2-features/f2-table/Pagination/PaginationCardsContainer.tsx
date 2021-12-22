import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {setCardsPageCountAC, setCarsCurrentPageAC} from "../../../n1-main/m2-bll/findAndPaginationReducer";
import {Pagination} from "./Pagination";

export const PaginationCardsContainer = () => {
    const dispatch = useDispatch()

    // count of elements at one page
    let pageCount = useSelector<AppStoreType, number>(state => state.findAndPagination.cards.pageCount)
    // count of Cards
    let cardPacksTotalCount = useSelector<AppStoreType, number>(state => state.findAndPagination.cards.totalCount)
    // selected page
    let page = useSelector<AppStoreType, number>(state => state.findAndPagination.cards.page)

    const currentPageHandler = (page: number) => {
        dispatch(setCarsCurrentPageAC(page))
    }

    const arr = ['5', '10', '20', '50', '100'] // for SuperSelect

    const [valueForSsSr, onChangeOption] = useState(arr[1]) // for SuperSelect

    const onClickSelectHandler = () => {
        dispatch(setCardsPageCountAC(+valueForSsSr))
    }

    return <Pagination
        cardPacksTotalCount={cardPacksTotalCount}
        pageCount={pageCount}
        onClickSelectHandler={onClickSelectHandler}
        superSelect={{
            valueForSsSr,
            onChangeOption,
            arr
        }}
        page = {page}
        currentPageHandler={currentPageHandler}
    />
}
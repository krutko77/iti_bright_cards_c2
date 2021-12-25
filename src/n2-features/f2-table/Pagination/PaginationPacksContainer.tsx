import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {setCardPacksCurrentPageAC, setCardPacksPageCountAC} from "../../../n1-main/m2-bll/findAndPaginationReducer";
import {Pagination} from "./Pagination";

export const PaginationPacksContainer = () => {
    const dispatch = useDispatch()

    // count of elements at one page
    let pageCount = useSelector<AppStoreType, number>(state => state.findAndPagination.cardPacks.pageCount)
    // count of Card Packs
    let cardPacksTotalCount = useSelector<AppStoreType, number>(state => state.findAndPagination.cardPacks.totalCount)
    // selected page
    let page = useSelector<AppStoreType, number>(state => state.findAndPagination.cardPacks.page)

    const currentPageHandler = (page: number) => {
        dispatch(setCardPacksCurrentPageAC(page))
    }

    const arr = ['5', '10', '20', '50', '100'] // for SuperSelect

    const [valueForSsSr, onChangeOption] = useState(arr[1]) // for SuperSelect

    const onClickSelectHandler = () => {
        dispatch(setCardPacksPageCountAC(+valueForSsSr))
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
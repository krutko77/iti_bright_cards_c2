import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {setCurrentPageAC} from "../../../n1-main/m2-bll/findAndPaginationReducer";
import s from './Paginations.module.scss'
import SuperButton from "../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";

export const Pagination = () => {
    const dispatch = useDispatch()
    
    // count of elements at one page 
    let pageCount = useSelector<AppStoreType, number>(state => state.findAndPagination.pageCount)
    // count of Card Packs
    let cardPacksTotalCount = useSelector<AppStoreType, number>(state => state.findAndPagination.cardPacksTotalCount)
    // selected page
    let page = useSelector<AppStoreType, number>(state => state.findAndPagination.page)
    
    const currentPageHandler = (page: number) => {
        dispatch(setCurrentPageAC(page))
    }

    let pagesCount = Math.ceil(cardPacksTotalCount / pageCount); // count of ALL pages, before the paginator
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionSize = 5; // portion that is seeing in pagination
    const portionCount = Math.ceil(pagesCount / portionSize) // count of portions per portionSize pages

    const [portion, setPortion] = useState(1)
    const leftNumber = (portion - 1) * portionSize + 1
    const rightNumber = portion * portionSize

    return (
        <div className={s.pagination}>
            {portion > 1 &&
              <SuperButton className={s.btn} onClick={() => {
                  setPortion(portion - 1)
              }}>&lt;</SuperButton>}

            {pages
                .filter(p => p ? p >= leftNumber && p <= rightNumber : '')
                .map(q => {
                    return <div
                                key={q}
                                className={`${s.item} ${page === q ? s.select : s.item}`}
                                onClick={() => {currentPageHandler(q)}}>{q}
                           </div>
                })}
            {portionCount > portion &&
              <SuperButton className={s.btn}  onClick={() => {
                  setPortion(portion + 1)
              }}>&gt;</SuperButton>}
        </div>
    )
}
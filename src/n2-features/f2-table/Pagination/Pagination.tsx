import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {setCurrentPageAC} from "../../../n1-main/m2-bll/findAndPaginationReducer";
import s from './Paginations.module.scss'

export const Pagination = () => {
    const dispatch = useDispatch()


    const portionSize = 10; // порция которая видна в пагинации

    // кол-во элементов на одной стр
    let pageCount = useSelector<AppStoreType, number>(state => state.findAndPagination.pageCount)
    // кол-во колод
    let cardPacksTotalCount = useSelector<AppStoreType, number>(state => state.findAndPagination.cardPacksTotalCount)
    // выбранная страница
    let page = useSelector<AppStoreType, number>(state => state.findAndPagination.page)

    const currentPageHandler = (page: number) => {
        dispatch(setCurrentPageAC(page))
    }

    let portionCount = Math.ceil(cardPacksTotalCount / pageCount); //количество страниц всех!!! до пагинатора
    let pages = [];
    for (let i = 1; i <= portionCount; i++) {
        pages.push(i)
    }

    const [portionNumber, setPortionNumber] = useState(1)

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return (
        <div>
            {portionNumber > 1 &&
              <button onClick={() => {
                  setPortionNumber(portionNumber - 1)
              }}>PREV </button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <div key={p} className={`${s.item} ${page === p ? s.select : s.item}`}
                                onClick={() => {currentPageHandler(p)}}>{p}</div>
                })}
            {portionCount > portionNumber &&
              <button onClick={() => {
                  setPortionNumber(portionNumber + 1)
              }}>NEXT</button>}
        </div>
    )
}
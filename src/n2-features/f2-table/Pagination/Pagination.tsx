import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {setCurrentPageAC, setPageCountAC} from "../../../n1-main/m2-bll/findAndPaginationReducer";
import s from './Paginations.module.scss'
import SuperButton from "../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import SuperSelect from "../../../n1-main/m1-ui/common/c5-SuperSelect/SuperSelect";
import selectStyle from '../../../n1-main/m1-ui/common/c5-SuperSelect/SuperSelect.module.scss'

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
    const portionSize = 10; // Hom much pagination buttons to show
    const portionCount = Math.ceil(pagesCount / portionSize) // how much total pagination buttons

    const [portion, setPortion] = useState(1)
    const leftNumber = (portion - 1) * portionSize + 1
    const rightNumber = portion * portionSize

    const arr = ['5', '10', '20', '50', '100'] // for SuperSelect
    const [valueForSsSr, onChangeOption] = useState(arr[1]) // for SuperSelect

    const onClickSelectHandler = () => {
        dispatch(setPageCountAC(+valueForSsSr))
    }

    return (
        <div className={s.pagination}>
            <SuperSelect
                options={arr}
                value={valueForSsSr}
                onChangeOption={onChangeOption}
                onClick={onClickSelectHandler}
                className={`${selectStyle.select} ${s.superSelect}`}
            />
            {portion > 1 &&
              <SuperButton className={s.btn} onClick={() => {
                  setPortion(portion - 1)
              }}>&lt;</SuperButton>}

            {pages
                .filter((p) => p ? p >= leftNumber && p <= rightNumber : '')
                .map(q => {
                    return <div
                        key={q}
                        className={`${s.item} ${page === q ? s.select : s.item}`}
                        onClick={() => {
                            currentPageHandler(q)
                        }}>
                        {q}
                    </div>
                })}
                <div className={s.points}>...</div>
                <div className={`${s.item} ${s.lastPaginationPage}`}>{pagesCount}</div>

            {portionCount > portion &&
              <SuperButton className={s.btn} onClick={() => {
                  setPortion(portion + 1)
              }}>&gt;</SuperButton>}

        </div>
    )
}
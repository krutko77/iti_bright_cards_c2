import React from 'react';
import {testData} from "./testInputData";
import s from './TempTable.module.scss'
import {Pagination} from "../Pagination/Pagination";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";

export const TempTable = () => {

    const page = useSelector<AppStoreType, number>(state => state.findAndPagination.page)
    const pageCount = useSelector<AppStoreType, number>(state => state.findAndPagination.pageCount)

    return <div>
        <h1>This is table of Card Packs with hardcoded values.</h1>
        {testData.map(e => <div key={e._id} className={s.tempTable}>
            <div>{e.name}</div>
            <div>{e.cardsCount}</div>
            <div>{e.updated}</div>
        </div>)}
        <Pagination/>
    </div>
}
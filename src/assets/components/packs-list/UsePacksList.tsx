import s from "./PacksList.module.scss";
import Subtitle from "./../common/subtitle/Subtitle.jsx";
import Button from "../common/button/Button";
import Search from "./../common/search/Search.jsx";
import Table from "../table/Table";
import UseSlider from "../common/slider/UseSlider.jsx";
import BottomBlock from "./../common/bottom-block/BottomBlock";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {ChangeEvent, useEffect, useState} from "react";
import {getPacksTC, getUserIdAC} from "../../../n1-main/m2-bll/packsReducer";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {SortPackType} from "../../../n1-main/m2-bll/findAndPaginationReducer";
import {RequestStatusType} from "../../../n1-main/m2-bll/appReducer";
import {showModalAddCardsPackAC} from "../../../n1-main/m2-bll/modalReducer";
import * as React from "react";
import ModalAddPack from "../../../n2-features/f5-modal/ModalAddPack/ModalAddPack";


// стилизация синей кнопки
const buttonStyle = {
    width: "184px",
    marginLeft: "24px"
}
// стилизация ширины столбцов таблицы
const tableStyle = {
    th1: {
        width: "185px",
    },
    th2: {
        width: "77px",
    },
    th3: {
        width: "135px",
    },
    th4: {
        width: "112px",
    },
    th5: {
        width: "160px",
    }
}
// данные для таблицы
const tableData = {
    title1: "Name",
    title2: "Cards",
    title3: "Last Updated",
    title4: "Created by",
    title5: "Actions",

}

export default function PacksList() {

    const pageCount = useSelector<AppStoreType, number>(state => state.findAndPagination.cardPacks.pageCount).toString()
    const page = useSelector<AppStoreType, number>(state => state.findAndPagination.cardPacks.page)
    const sortPacks = useSelector<AppStoreType, SortPackType>(state => state.findAndPagination.cardPacks.sortPacks)
    const user_id = useSelector<AppStoreType, string>(state => state.profile._id)



    const dispatch = useDispatch()
    let navigate = useNavigate();

    useEffect(() => {
        dispatch(getPacksTC())
    }, [dispatch, pageCount, page, sortPacks])

    const addPacksHandler = () => {
        dispatch(showModalAddCardsPackAC())
    }

    const onMyHandler = () => {
        dispatch(getUserIdAC(user_id))
        dispatch(getPacksTC())
    }
    const onAllHandler = () => {
        dispatch(getUserIdAC(''))
        dispatch(getPacksTC())
    }

    return (
        <>
            <ModalAddPack/>
            <div className={s.packsList}>
                <aside className={s.sidebar}>
                    <span className={s.label}>Show packs cards</span>
                    <div className={s.btnBlock}>
                        <button onClick={onMyHandler} className={`${s.btn} ${s.active}`}>My</button>
                        <button onClick={onAllHandler} className={s.btn}>All</button>
                    </div>
                    <UseSlider/>
                </aside>
                <main className={s.main}>
                    <div className={s.title}>
                        <Subtitle subtitle="Packs list"/>
                    </div>
                    <div className={s.searchBlock}>
                        <div className={s.search}>
                            <Search/>
                        </div>
                        <Button onClick={addPacksHandler} label="Add new pack" style={buttonStyle}/>
                    </div>
                    <Table tableData={tableData} style={tableStyle}/>
                    <BottomBlock/>
                </main>
            </div>
        </>
    );
}



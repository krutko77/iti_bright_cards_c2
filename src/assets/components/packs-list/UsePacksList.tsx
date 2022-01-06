import s from "./PacksList.module.scss";
import Subtitle from "./../common/subtitle/Subtitle.jsx";
import Button from "../common/button/Button";
import Table from "../table/Table";
import UseSlider from "../common/slider/UseSlider.jsx";
import BottomBlock from "../common/bottom-block/BottomBlock";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import * as React from "react";
import {useEffect} from "react";
import {getPacksTC, getUserIdAC} from "../../../n1-main/m2-bll/packsReducer";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {setSortPacksAC, SortPackType} from "../../../n1-main/m2-bll/findAndPaginationReducer";
import {showModalAddCardsPackAC} from "../../../n1-main/m2-bll/modalReducer";
import ModalAddPack from "../../../n2-features/f5-modal/ModalAddPack/ModalAddPack";
import Search from "../../../n2-features/f2-table/Search/SearchMain/Search";
import {
    SearchCardsPacksContainer
} from "../../../n2-features/f2-table/Search/SearchCardsPacksContainer/SearchCardsPacksContainer";

// стилизация синей кнопки
const buttonStyle = {
    width: "184px",
    marginLeft: "24px"
}
// стилизация ширины столбцов таблицы
const tableStyle: TableStyleType = {
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


export default function PacksList() {

    const tableData: TableDataType = {
        title1: "Name",
        title2: "Cards",
        title3: {
            value: "Last Updated",
            upperSortHandler: () => {dispatch(setSortPacksAC('0updated'))},
            lowerSortHandler: () => {dispatch(setSortPacksAC('1updated'))}
        },
        title4: "Created by",
        title5: "Actions",

    }

    const pageCount = useSelector<AppStoreType, number>(state => state.findAndPagination.cardPacks.pageCount).toString()
    const page = useSelector<AppStoreType, number>(state => state.findAndPagination.cardPacks.page)
    const sortPacks = useSelector<AppStoreType, SortPackType>(state => state.findAndPagination.cardPacks.sortPacks)
    const user_id = useSelector<AppStoreType, string>(state => state.profile._id)

    const current_id =  useSelector<AppStoreType, string>(state => state.packs.packUser_id)

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
                            <button onClick={onMyHandler}
                                    className={`${s.btn} ${current_id === user_id ? s.active : ''}`}>My
                            </button>
                            <button onClick={onAllHandler} className={`${s.btn} ${!current_id ? s.active : ''}`}>All
                            </button>
                    </div>
                    <UseSlider/>
                </aside>
                <main className={s.main}>
                    <div className={s.title}>
                        <Subtitle subtitle="Packs list"/>
                    </div>
                    <div className={s.searchBlock}>
                        <div className={s.search}>
                            <SearchCardsPacksContainer/>
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

export type TableDataType = {
    title1: string
    title2: string
    title3: {
        value: string
        upperSortHandler: () => void
        lowerSortHandler: () => void
    }
    title4: string
    title5: string
}

export type TableStyleType = {
    th1: {
        width: string
    },
    th2: {
        width: string
    },
    th3: {
        width: string
    },
    th4: {
        width: string
    },
    th5: {
        width: string
    }
}
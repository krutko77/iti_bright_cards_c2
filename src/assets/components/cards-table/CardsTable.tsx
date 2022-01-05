import TitleBlock from "../common/title-block/TitleBlock";
import Button from "../common/button/Button";

import s from "./CardsTable.module.scss";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {addCardsTC, CardType, getCardsTC} from "../../../n1-main/m2-bll/cardsReducer";
import {SortCardsType} from "../../../n1-main/m2-bll/findAndPaginationReducer";
import {RequestStatusType} from "../../../n1-main/m2-bll/appReducer";
import {useEffect} from "react";
import {
    setClickedCardId,
    showModalAddCardAC,
    showModalDelCardAC,
    showModalUpdateCardAC
} from "../../../n1-main/m2-bll/modalReducer";
import {ModalUpdateCard} from "../../../n2-features/f5-modal/ModalUpdateCard/ModalUpdateCard";
import ModalDelCard from "../../../n2-features/f5-modal/ModalDelCard/ModalDelCard";
import {ModalAddCard} from "../../../n2-features/f5-modal/ModalAddCard/ModalAddCard";
import * as React from "react";
import HeadCell from "../table/head-cell/HeadCell";
import HeadButtonCell from "../table/head-button-cell/HeadButtonCell";
import CellCommon from "../table/cell-common/CellCommon";
import RatingCell from "../table/rating-cell/RatingCell";
import TableButton from "../table/table-button/TableButton";
import Search from "../common/search/Search";

// стилизация синей кнопки
const styleButton = {
    width: "184px",
    marginLeft: "24px"
}


const tableData = {
    title1: "Question",
    title2: "Answer",
    title3: "Last Updated",
    title4: "Grade",
    title5: "Actions",
}

const tableStyle = {
    th1: {
        width: "251px",
    },
    th2: {
        width: "307px",
    },
    th3: {
        width: "133px",
    },
    th4: {
        width: "156px",
    },
    th5: {
        width: "113px",
    }
}

export default function CardsTable() {

    let {id} = useParams()

    const cards = useSelector<AppStoreType, CardType[]>(state => state.cards.cards)
    const pageCount = useSelector<AppStoreType, number>(state => state.findAndPagination.cards.pageCount).toString()
    const page = useSelector<AppStoreType, number>(state => state.findAndPagination.cards.page)
    const sortCards = useSelector<AppStoreType, SortCardsType>(state => state.findAndPagination.cards.sortCards)
    const appStatus = useSelector<AppStoreType, RequestStatusType>(state => state.app.status)
    const user_id = useSelector<AppStoreType, string>(state => state.profile._id)

    const dispatch = useDispatch();

    useEffect(() => {
        if (id)
            dispatch(getCardsTC(id))
    }, [dispatch, id, pageCount, page, sortCards])

    const addCardHandler = (question: string, answer: string) => {
        if (id) dispatch(addCardsTC(id, question, answer))
    }

    const showAddCardModalHandler = () => {
        dispatch(showModalAddCardAC())
    }

    const showDelCardModalHandler = (id: string) => {
        dispatch(showModalDelCardAC())
        dispatch(setClickedCardId(id))
    }

    const showUpdateCardModalHandler = (id: string) => {
        dispatch(showModalUpdateCardAC())
        dispatch(setClickedCardId(id))
    }



    return (
        <>
            <ModalUpdateCard/>
            <ModalDelCard/>
            <ModalAddCard addCard={addCardHandler}/>
            <div className={s.cardsTable}>
                <TitleBlock/>
                <div className={s.searchBlock}>
                    <div className={s.search}>
                        {/*<Search/>*/}
                    </div>
                    <Button onClick={showAddCardModalHandler} label="Add new pack" style={styleButton}/>
                </div>
                <div className={s.tableWrap}>
                    <table className={s.table}>
                        <thead className={s.thead}>
                        <tr className={s.tr}>
                            <HeadCell cellStyle={tableStyle.th1} cellData={tableData.title1}/>
                            <HeadCell cellStyle={tableStyle.th2} cellData={tableData.title2}/>
                            <HeadButtonCell cellStyle={tableStyle.th3} cellData={tableData.title3}/>
                            <HeadCell cellStyle={tableStyle.th4} cellData={tableData.title4}/>
                            <HeadCell cellStyle={tableStyle.th5} cellData={tableData.title5}/>
                        </tr>
                        </thead>
                        <tbody>
                        {cards.map((mp:CardType) => (
                        <tr key={mp._id} className={s.tr}>
                            <CellCommon cellData={mp.question} />
                            <CellCommon cellData={mp.answer} />
                            <CellCommon cellData={mp.updated} />
                            <RatingCell cellData={mp.rating}/>
                            <td className={s.td}>
                                <div className={s.btnBlock}>
                                    <TableButton onClick={() => showDelCardModalHandler(mp._id)} label="Delete" />
                                    <TableButton onClick={() => showUpdateCardModalHandler(mp._id)} label="Edit" />
                                </div>
                            </td>
                        </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}



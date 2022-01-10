import TitleBlock from "../../common/Pvl/title-block/TitleBlock";
import Button from "../../common/Pvl/button/Button";

import s from "./CardsTable.module.scss";
import tableStyles from "./../table/Table.module.scss";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../m2-bll/store";
import {addCardsTC, CardType, getCardsTC} from "../../../m2-bll/cardsReducer";
import {setSortCardsAC, SortCardsType} from "../../../m2-bll/findAndPaginationReducer";
import * as React from "react";
import {useEffect} from "react";
import {
    setClickedCardId,
    showModalAddCardAC,
    showModalDelCardAC,
    showModalUpdateCardAC
} from "../../../m2-bll/modalReducer";
import {ModalUpdateCard} from "../../../../n2-features/f5-modal/ModalUpdateCard/ModalUpdateCard";
import ModalDelCard from "../../../../n2-features/f5-modal/ModalDelCard/ModalDelCard";
import {ModalAddCard} from "../../../../n2-features/f5-modal/ModalAddCard/ModalAddCard";
import HeadCell from "../table/head-cell/HeadCell";
import CellCommon from "../table/cell-common/CellCommon";
import RatingCell from "../table/rating-cell/RatingCell";
import TableButton from "../table/table-button/TableButton";
import {PackType} from "../../../m2-bll/packsReducer";
import BottomBlock from "../../common/Pvl/bottom-block/BottomBlock";
import {SearchCardsContainer} from "../../../../n2-features/f2-table/Search/SeachCardsContainer/SeachCardsContainer";
import {TableDataType, TableStyleType} from "../../../../types/types";
import HeadButtonCell from "../table/head-button-cell/HeadButtonCell";
import {RequestStatusType} from "../../../m2-bll/appReducer";

// стилизация синей кнопки
const styleButton = {
    width: "184px",
    marginLeft: "24px"
}

const tableStyle: TableStyleType = {
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

    const tableData: TableDataType = {
        title1: {
            value: "Question",
            upperSortHandler: () => {
                dispatch(setSortCardsAC('0question'))
            },
            lowerSortHandler: () => {
                dispatch(setSortCardsAC('1question'))
            },
        },
        title2: {
            value: "Answer",
            upperSortHandler: () => {
                dispatch(setSortCardsAC('0answer'))
            },
            lowerSortHandler: () => {
                dispatch(setSortCardsAC('1answer'))
            },
        },
        title3: {
            value: "Last Updated",
            upperSortHandler: () => {
                dispatch(setSortCardsAC('0updated'))
            },
            lowerSortHandler: () => {
                dispatch(setSortCardsAC('1updated'))
            },
        },
        title4: {
            value: "Grade",
            upperSortHandler: () => {
                dispatch(setSortCardsAC('0grade'))
            },
            lowerSortHandler: () => {
                dispatch(setSortCardsAC('1grade'))
            },
        },
        title5: "Actions",
    }

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

    const cardsPacksFromLS = localStorage.getItem('cardsPacks')  // get CardPacks from LS to save it while F5
    let cardsPacksFromLSParsed = []
    if (cardsPacksFromLS) cardsPacksFromLSParsed = JSON.parse(cardsPacksFromLS)
    let selectedCardPack: PackType
    selectedCardPack = cardsPacksFromLSParsed.find((e: PackType) => e._id === id)

    return (
        <>
            <ModalUpdateCard/>
            <ModalDelCard/>
            <ModalAddCard addCard={addCardHandler}/>
            <div className={s.cardsTable}>
                <TitleBlock title={selectedCardPack.name}/>
                <div className={s.searchBlock}>
                    <div className={s.search}>
                        {/*<Search/>*/}
                        <SearchCardsContainer/>
                    </div>
                    <Button onClick={showAddCardModalHandler} label="Add new card" style={styleButton}
                            disabled={appStatus === "loading"}/>
                </div>
                <div className={tableStyles.tableWrap}>
                    <table className={tableStyles.table}>
                        <thead className={tableStyles.thead}>
                        <tr className={tableStyles.tr}>
                            <HeadButtonCell cellStyle={tableStyle.th1}
                                            cellData={tableData.title1.value}
                                            upCallback={tableData.title1.upperSortHandler}
                                            downCallback={tableData.title1.lowerSortHandler}
                            />
                            <HeadButtonCell cellStyle={tableStyle.th2}
                                            cellData={tableData.title2.value}
                                            upCallback={tableData.title2.upperSortHandler}
                                            downCallback={tableData.title2.lowerSortHandler}
                            />
                            <HeadButtonCell cellStyle={tableStyle.th3}
                                            cellData={tableData.title3.value}
                                            upCallback={tableData.title3.upperSortHandler}
                                            downCallback={tableData.title3.lowerSortHandler}
                            />
                            <HeadButtonCell cellStyle={tableStyle.th4}
                                            cellData={tableData.title4.value}
                                            upCallback={tableData.title4.upperSortHandler}
                                            downCallback={tableData.title4.lowerSortHandler}
                            />
                            <HeadCell cellStyle={tableStyle.th5} cellData={tableData.title5}/>
                        </tr>
                        </thead>
                        <tbody>
                        {cards.map((mp: CardType) => (
                            <tr key={mp._id} className={tableStyles.tr}>
                                <CellCommon cellData={mp.question}/>
                                <CellCommon cellData={mp.answer}/>
                                <CellCommon cellData={mp.updated}/>
                                <RatingCell cellData={mp.grade}/>
                                <td className={tableStyles.td}>
                                    <div className={s.btnBlock}>
                                        <TableButton onClick={() => showDelCardModalHandler(mp._id)} label="Delete"
                                                     disabled={user_id !== mp.user_id}/>
                                        <TableButton onClick={() => showUpdateCardModalHandler(mp._id)} label="Edit"
                                                     disabled={user_id !== mp.user_id}/>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <BottomBlock type={"cards"}/>
            </div>
        </>
    )
}



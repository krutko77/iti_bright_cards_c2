import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../m2-bll/store";
import * as React from 'react';
import {useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {addCardsTC, CardType, getCardsTC} from "../../../m2-bll/cardsReducer";
import {useParams} from "react-router-dom";
import {PaginationCardsContainer} from "../../../../n2-features/f2-table/Pagination/PaginationCardsContainer";
import {SearchCardsContainer} from "../../../../n2-features/f2-table/Search/SeachCardsContainer/SeachCardsContainer";
import s from './OldCards.module.scss'
import {SortCardsContainer} from "../../../../n2-features/f2-table/Sort/SortCardsContainer/SortCardsContainer";
import {SortCardsType} from "../../../m2-bll/findAndPaginationReducer";
import {
    setClickedCardId,
    showModalAddCardAC,
    showModalDelCardAC,
    showModalUpdateCardAC
} from "../../../m2-bll/modalReducer";
import ModalDelCard from "../../../../n2-features/f5-modal/ModalDelCard/ModalDelCard";
import {ModalAddCard} from "../../../../n2-features/f5-modal/ModalAddCard/ModalAddCard";
import {ModalUpdateCard} from "../../../../n2-features/f5-modal/ModalUpdateCard/ModalUpdateCard";
import {RequestStatusType} from "../../../m2-bll/appReducer";

// data for inputs
const inputNPData1 = {
    id: "text",
    type: "text",
    name: "text",
    for: "text",
    label: "New question",
    style: {
        display: "none"
    }
}

// data for inputs
const inputNPData2 = {
    id: "text",
    type: "text",
    name: "text",
    for: "text",
    label: "Name answer",
    style: {
        display: "none"
    }
}

export const OldCards = () => {

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
            <TableContainer component={Paper}>
                <PaginationCardsContainer/>
                <SearchCardsContainer/>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <div className={s.cell}>Question<SortCardsContainer upperSort={'0question'}
                                                                                    lowerCount={'1question'}/>
                                </div>
                            </TableCell>
                            <TableCell align="center">
                                <div className={s.cell}>answer<SortCardsContainer upperSort={'0answer'}
                                                                                  lowerCount={'1answer'}/>
                                </div>
                            </TableCell>
                            <TableCell align="center">
                                <div className={s.cell}>Grade<SortCardsContainer upperSort={'0grade'}
                                                                                 lowerCount={'1grade'}/>
                                </div>
                            </TableCell>
                            <TableCell align="center">
                                <div className={s.cell}>updated<SortCardsContainer upperSort={'0updated'}
                                                                                   lowerCount={'1updated'}/>
                                </div>
                            </TableCell>
                            <TableCell align="center">url</TableCell>
                            <TableCell align="center">
                                <button onClick={showAddCardModalHandler} disabled={appStatus === "loading"}>add
                                </button>
                            </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cards.map((card: CardType) => (
                            <TableRow
                                key={card.cardsPack_id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {card.question}
                                </TableCell>
                                <TableCell align="center">{card.answer}</TableCell>
                                <TableCell align="center">{card.grade}</TableCell>
                                <TableCell align="center">{card.updated}</TableCell>
                                <TableCell align='center'>
                                    <button onClick={() => {
                                        showDelCardModalHandler(card._id)
                                    }} disabled={appStatus === "loading" || user_id !== card.user_id}>del
                                    </button>
                                </TableCell>
                                <TableCell align='center'>
                                    <button onClick={() => {
                                        showUpdateCardModalHandler(card._id)
                                    }} disabled={appStatus === "loading" || user_id !== card.user_id}>update
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}



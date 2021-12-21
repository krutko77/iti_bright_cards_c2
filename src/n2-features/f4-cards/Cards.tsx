import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../n1-main/m2-bll/store";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect} from "react";
import {addCardsTC, cardType, getCardsTC} from "../../n1-main/m2-bll/cardsReducer";
import {useParams} from "react-router-dom";

export const Cards = () => {

    let {id} = useParams()

    const cards = useSelector<AppStoreType, cardType[]>(state => state.cards)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCardsTC(id))
    }, [dispatch, id])

    const addCardHandler = ()=>{
        dispatch(addCardsTC(id))
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Question</TableCell>
                        <TableCell align="center">answer</TableCell>
                        <TableCell align="center">Grade</TableCell>
                        <TableCell align="center">updated</TableCell>
                        <TableCell align="center">url</TableCell>
                        <TableCell align="center"><button onClick={addCardHandler}>add</button></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cards.map((card: cardType) => (
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

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}



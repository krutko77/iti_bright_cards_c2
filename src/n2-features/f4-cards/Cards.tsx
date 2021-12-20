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
import {cardType, getCardsTC} from "../../n1-main/m2-bll/cardsReducer";
import {useParams} from "react-router-dom";

export const Cards = () => {

    const cards = useSelector<AppStoreType, cardType[]>(state => state.cards)
    const dispatch = useDispatch();
    const {id} = useParams<'id'>()

    useEffect(() => {
        dispatch(getCardsTC(id))
    }, [dispatch])

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Question</TableCell>
                        <TableCell align="right">answer</TableCell>
                        <TableCell align="right">Grade</TableCell>
                        <TableCell align="right">updated</TableCell>
                        <TableCell align="right">url</TableCell>
                        <TableCell align="right">add</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cards.map((cards) => (
                        <TableRow
                            key={cards.cardsPack_id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {cards.question}
                            </TableCell>
                            <TableCell align="right">{cards.answer}</TableCell>
                            <TableCell align="right">{cards.grade}</TableCell>
                            <TableCell align="right">{cards.updated}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}



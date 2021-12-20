import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../n1-main/m2-bll/store";
import {getPacksTC, packsStateType, packType} from "../../n1-main/m2-bll/packsReducer";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect} from "react";
import {NavLink} from "react-router-dom";

export const Packs = () => {
    const {cardPacks}= useSelector<AppStoreType,packsStateType>(state => state.packs)
    const pack_id= useSelector<AppStoreType,string>(state => state.packs.pack_id)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPacksTC())
    }, [dispatch])

    // function createData(
    //     name: string,
    //     cardsCount: number,
    //     updated: string,
    // ) {
    //     return {name, cardsCount, updated};
    // }

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Cards Count</TableCell>
                        <TableCell align="right">Updated</TableCell>
                        <TableCell align="right">url</TableCell>
                        <TableCell align="right">add</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cardPacks.map((mp) => (
                        <TableRow
                            key={mp.name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                            <TableCell component="th" scope="row">{mp.name}
                            </TableCell>
                            <TableCell align="right">{mp.cardsCount}</TableCell>
                            <TableCell align="right">{mp.updated}</TableCell>
                            <TableCell align="right"><NavLink to={'/cards/' + pack_id}>cards</NavLink></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

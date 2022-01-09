import s from "./Table.module.scss";
import TableRow from "./table-row/TableRow";
import HeadCell from "./head-cell/HeadCell.jsx";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../m2-bll/store";
import {packsStateType} from "../../../m2-bll/packsReducer";
import {CardType} from "../../../m2-bll/cardsReducer";
import HeadButtonCell from "./head-button-cell/HeadButtonCell";
import React from "react";
import {TableDataType, TableStyleType} from "../packs-list/UsePacksList";
import {useLocation} from "react-router-dom";


export default function Table(props: PropsType) {

    // let location = useLocation()
    // console.log(location.pathname)

    const {cardPacks} = useSelector<AppStoreType, packsStateType>(state => state.packs)
    const cards = useSelector<AppStoreType, CardType[]>(state => state.cards.cards)


    return (
        <div className={s.tableWrap}>
            <table className={s.table}>
                <thead className={s.thead}>
                <tr className={s.tr}>
                    {/*<HeadCell cellStyle={props.style.th1} cellData={props.tableData.title1.value}/>*/}
                    <HeadButtonCell cellStyle={props.style.th1}
                                    cellData={props.tableData.title1.value}
                                    upCallback={props.tableData.title1.upperSortHandler}
                                    downCallback={props.tableData.title1.lowerSortHandler}
                    />
                    {/*<HeadCell cellStyle={props.style.th2} cellData={props.tableData.title2.value}/>*/}
                    <HeadButtonCell cellStyle={props.style.th2}
                                    cellData={props.tableData.title2.value}
                                    upCallback={props.tableData.title2.upperSortHandler}
                                    downCallback={props.tableData.title2.lowerSortHandler}
                    />
                    <HeadButtonCell
                        cellStyle={props.style.th3}
                        cellData={props.tableData.title3.value}
                        upCallback={props.tableData.title3.upperSortHandler}
                        downCallback={props.tableData.title3.lowerSortHandler}
                    />
                    {/*<HeadCell cellStyle={props.style.th4} cellData={props.tableData.title4.value}/>*/}
                    <HeadButtonCell
                        cellStyle={props.style.th4}
                        cellData={props.tableData.title4.value}
                        upCallback={props.tableData.title4.upperSortHandler}
                        downCallback={props.tableData.title4.lowerSortHandler}
                    />
                    <HeadCell cellStyle={props.style.th5} cellData={props.tableData.title5}/>
                </tr>
                </thead>
                <tbody>
                {cardPacks.map((mp) => <TableRow key={mp._id} cellData={mp}/>)}
                {/*{location.pathname === 'packsdesigned' ? cardPacks.map((mp) => <TableRow key={mp._id} cellData={mp}/>):*/}
                {/*cards.map((mp) => <TableRow key={mp._id} cellData={mp}/>)*/}
                {/*}*/}

                </tbody>
            </table>
        </div>
    );
}

type PropsType = {
    style: TableStyleType
    tableData: TableDataType
}
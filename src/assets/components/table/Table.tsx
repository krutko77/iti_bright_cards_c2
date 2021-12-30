import s from "./Table.module.scss";
import TableRow from "./table-row/TableRow";
import HeadCell from "./head-cell/HeadCell.jsx";
import HeadButtonCell from "./head-button-cell/HeadButtonCell.jsx";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {packsStateType} from "../../../n1-main/m2-bll/packsReducer";


export default function Table(props: any) {
    const {cardPacks} = useSelector<AppStoreType, packsStateType>(state => state.packs)
    return (
        <div className={s.tableWrap}>
            <table className={s.table}>
                <thead className={s.thead}>
                <tr className={s.tr}>
                    <HeadCell cellStyle={props.style.th1} cellData={props.tableData.title1}/>
                    <HeadCell cellStyle={props.style.th2} cellData={props.tableData.title2}/>
                    <HeadButtonCell cellStyle={props.style.th3} cellData={props.tableData.title3}/>
                    <HeadCell cellStyle={props.style.th4} cellData={props.tableData.title4}/>
                    <HeadCell cellStyle={props.style.th5} cellData={props.tableData.title5}/>
                </tr>
                </thead>
                <tbody>
                {cardPacks.map((mp) => <TableRow key={mp._id} cellData={mp}/>
                )}
                </tbody>
            </table>
        </div>
    );
}

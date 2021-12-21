import s from "./Table.module.scss";
import TableRow from './table-row/TableRow.jsx';

// стилизация сроки таблицы
const styleRow = {
   backgroundColor: "#F5F4FA"
}


export default function Table(props) {
   return (
      <table className={s.table}>
         <thead>
            <tr>
               <th className={s.th1}>{props.tableData.title1}</th>
               <th className={s.th}>{props.tableData.title2}</th>
               <th className={s.th}>{props.tableData.title3}</th>
               <th className={s.th}>{props.tableData.title4}</th>
               <th className={s.th}>{props.tableData.title5}</th>
            </tr>
         </thead>
         <tbody>
            <TableRow cellData={props.tableData.dataRow1} />
            <TableRow cellData={props.tableData.dataRow2} style={styleRow} />
            <TableRow cellData={props.tableData.dataRow3} />
            <TableRow cellData={props.tableData.dataRow4} style={styleRow} />
            <TableRow cellData={props.tableData.dataRow5} />
            <TableRow cellData={props.tableData.dataRow6} style={styleRow} />
            <TableRow cellData={props.tableData.dataRow7} />
            <TableRow cellData={props.tableData.dataRow8} style={styleRow} />
         </tbody>
      </table>
   );
}

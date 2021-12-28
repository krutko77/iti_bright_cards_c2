import s from "./Table.module.scss";
import TableRow from "./table-row/TableRow.jsx";
import HeadCell from "./head-cell/HeadCell.jsx";
import HeadButtonCell from "./head-button-cell/HeadButtonCell.jsx";


export default function Table(props) {
   return (
      <div className={s.tableWrap}>
         <table className={s.table}>
            <thead className={s.thead}>
               <tr className={s.tr}>
                  <HeadCell cellStyle={props.style.th1} cellData={props.tableData.title1} />
                  <HeadCell cellStyle={props.style.th2} cellData={props.tableData.title2} />
                  <HeadButtonCell cellStyle={props.style.th3} cellData={props.tableData.title3} />
                  <HeadCell cellStyle={props.style.th4} cellData={props.tableData.title4} />
                  <HeadCell cellStyle={props.style.th5} cellData={props.tableData.title5} />
               </tr>
            </thead>
            <tbody>
               <TableRow cellData={props.tableData.dataRow1} />
               {/* <TableRow cellData={props.tableData.dataRow2} />
               <TableRow cellData={props.tableData.dataRow3} />
               <TableRow cellData={props.tableData.dataRow4} />
               <TableRow cellData={props.tableData.dataRow5} />
               <TableRow cellData={props.tableData.dataRow6} />
               <TableRow cellData={props.tableData.dataRow7} />
               <TableRow cellData={props.tableData.dataRow8} /> */}
               {/* <TableRow cellData={props.tableData.dataRow7} />
               <TableRow cellData={props.tableData.dataRow8} /> */}
            </tbody>           
         </table>
      </div>
   );
}

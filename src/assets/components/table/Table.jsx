import s from "./Table.module.scss";
import TableRow from './table-row/TableRow.jsx';
import icon from "./../../img/arrow-icon.svg";


export default function Table(props) {
   return (
      <div className={s.scrollTable}>
         <table>
            <thead >
               <tr>
                  <th>{props.tableData.title1}</th>
                  <th>{props.tableData.title2}</th>
                  <th>{props.tableData.title3}<button className={s.btn} ><img className={s.icon} src={icon} alt="icon" /></button></th>
                  <th>{props.tableData.title4}</th>
                  <th>{props.tableData.title5}</th>
               </tr>
            </thead>
            <tbody>
               <TableRow cellData={props.tableData.dataRow1} />
               <TableRow cellData={props.tableData.dataRow2} />
               <TableRow cellData={props.tableData.dataRow3} />
               <TableRow cellData={props.tableData.dataRow4} />
               <TableRow cellData={props.tableData.dataRow5} />
               <TableRow cellData={props.tableData.dataRow6} />
               <TableRow cellData={props.tableData.dataRow7} />
               <TableRow cellData={props.tableData.dataRow8} />
               {/* <TableRow cellData={props.tableData.dataRow7} />
               <TableRow cellData={props.tableData.dataRow8} /> */}
            </tbody>
         </table>
      </div>
   );
}

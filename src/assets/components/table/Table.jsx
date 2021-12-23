import s from "./Table.module.scss";
import TableRowFirstOption from './table-row/TableRowFirstOption.jsx';
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
            <tbody >
               <TableRowFirstOption cellData={props.tableData.dataRow1} />
               <TableRowFirstOption cellData={props.tableData.dataRow2} />
               <TableRowFirstOption cellData={props.tableData.dataRow3} />
               <TableRowFirstOption cellData={props.tableData.dataRow4} />
               <TableRowFirstOption cellData={props.tableData.dataRow5} />
               <TableRowFirstOption cellData={props.tableData.dataRow6} />
               <TableRowFirstOption cellData={props.tableData.dataRow7} />
               <TableRowFirstOption cellData={props.tableData.dataRow8} />
               {/* <TableRowFirstOption cellData={props.tableData.dataRow7} />
               <TableRowFirstOption cellData={props.tableData.dataRow8} /> */}
            </tbody>
         </table>
      </div>
   );
}

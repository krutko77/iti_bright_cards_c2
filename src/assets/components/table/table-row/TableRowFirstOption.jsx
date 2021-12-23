import s from "./TableRowFirstOption.module.scss";
import CellCommon from "../cell-common/CellCommon.jsx";
import TableButton from "../table-button/TableButton.jsx";


// стилизация кнопки
const styleButton = {
   backgroundColor: "#F1453D",
   color: "#FFFFFF",
   fontWeight: 500
}


export default function TableRow(props) {
   return (
      <tr>
         <td style={props.style}><CellCommon cellData={props.cellData.td1} /></td>
         <td style={props.style}><CellCommon cellData={props.cellData.td2} /></td>
         <td style={props.style}><CellCommon cellData={props.cellData.td3} /></td>
         <td style={props.style}><CellCommon cellData={props.cellData.td4} /></td>
         <td style={props.style}>
            <div className={s.btnBlock}>
               <TableButton label="Delete" style={styleButton}/>
               <TableButton label="Edit" />
               <TableButton label="Learn" />
            </div>
         </td>
      </tr>
   );
}

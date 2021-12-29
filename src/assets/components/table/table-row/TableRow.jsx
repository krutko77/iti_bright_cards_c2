import s from "./TableRow.module.scss";
import CellCommon from "../cell-common/CellCommon.jsx";
import TableButton from "../table-button/TableButton.tsx";
import RatingCell from "./../rating-cell/RatingCell.jsx";


// стилизация кнопки
const buttonStyle = {
   backgroundColor: "#F1453D",
   color: "#FFFFFF",
   fontWeight: 500
}


export default function TableRow(props) {
   return (
      <tr className={s.tr}>         
         <CellCommon cellData={props.cellData.td1} />
         <CellCommon cellData={props.cellData.td2} />
         <CellCommon cellData={props.cellData.td3} />
         {/* <CellCommon cellData={props.cellData.td4} /> */}
         <RatingCell cellData={props.cellData.rating}/>
         <td className={s.td}>
            <div className={s.btnBlock}>
               <TableButton label="Delete" style={buttonStyle}/>
               <TableButton label="Edit" />
               {/* <TableButton label="Learn" /> */}
            </div>
         </td>
      </tr>
   );
}

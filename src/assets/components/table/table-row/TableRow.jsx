import s from "./TableRow.module.scss";
import CellCommon from "../cell-common/CellCommon.jsx";
import TableButton from "../table-button/TableButton.tsx";
import RatingCell from "./../rating-cell/RatingCell.jsx";
import { buttonColorThree } from "./../../../../n1-main/m1-ui/common/components/styles/inlineVariables.ts";
import { buttonFontColorThree } from "./../../../../n1-main/m1-ui/common/components/styles/inlineVariables.ts";

// стилизация кнопки
const buttonStyle = {
   backgroundColor: buttonColorThree,
   color: buttonFontColorThree,
   fontWeight: 500
}


export default function TableRow(props) {
   return (
      <tr className={s.tr}>         
         <CellCommon cellData={props.cellData.td1} />
         <CellCommon cellData={props.cellData.td2} />
         <CellCommon cellData={props.cellData.td3} />
         <CellCommon cellData={props.cellData.td4} />
         {/* <RatingCell cellData={props.cellData.rating}/> */}
         <td className={s.td}>
            <div className={s.btnBlock}>
               <TableButton label="Delete" style={buttonStyle}/>
               <TableButton label="Edit" />
               <TableButton label="Learn" />
            </div>
         </td>
      </tr>
   );
}

import s from "./HeadButtonCell.module.scss";

import icon from "./../../../img/arrow-icon.svg";

export default function TheadCell(props) {
   return (
      <th className={s.th} style={props.cellStyle}>{props.cellData}<button className={s.btn} ><img className={s.icon} src={icon} alt="icon" /></button></th>
   );     
}
import s from "./HeadCell.module.scss";


export default function TheadCell(props) {
   return (
      <th className={s.th} style={props.cellStyle}>{props.cellData}</th>
   );     
}
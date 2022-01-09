import s from "./CellCommon.module.scss";


export default function CellCommon(props) {
   return (
      <td onDoubleClick={props.callback} className={s.td}>{props.cellData}</td>
    );
}


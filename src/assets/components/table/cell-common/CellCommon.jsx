import s from "./CellCommon.module.scss";


export default function CellCommon(props) {
   return (
      <td className={s.td}>{props.cellData}</td>        
    );
}


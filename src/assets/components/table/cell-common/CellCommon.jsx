import s from "./CellCommon.module.scss";


function CellCommon(props) {
   return (
      <div className={s.text}>
         <span>{props.cellData}</span>
      </div>
   );     
}

export default CellCommon;
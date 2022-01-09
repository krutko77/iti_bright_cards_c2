import s from "./HeadButtonCell.module.scss";
import React from "react";
import iconUp from "../../../../../assets/img/arrow-icon-up.svg";
import iconDown from "../../../../../assets/img/arrow-icon-down.svg";

export default function TheadCell(props: PropsType) {
    return (
        <th className={s.th} style={props.cellStyle}>{props.cellData}
            <button className={s.btn} onClick={props.upCallback}><img className={s.icon} src={iconUp} alt="icon"/>
            </button>
            <button className={s.btn} onClick={props.downCallback}><img className={s.icon} src={iconDown} alt="icon"/>
            </button>
        </th>
    );
}

type PropsType = {
    cellStyle: React.CSSProperties
    cellData: string
    upCallback: () => void
    downCallback: () => void

}
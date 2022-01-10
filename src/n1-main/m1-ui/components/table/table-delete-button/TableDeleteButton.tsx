import s from "./TableDeleteButton.module.scss";
import {CSSProperties} from "react";

// в месте, где используется кнопка, если нужно, стилизуем кнопку
// const styleButton = {
//    padding: "19px 61px",
//    fontSize: "14px",
//    letterSpacing: "0.8px"
// }

// style={styleButton}

export default function TableDeleteButton(props: PropsType) {
    return (
        <button className={s.btn} onClick={props.onClick} disabled={props.disabled}>{props.label}</button>
    );
}

type PropsType = {
    label: string
    onClick: () => void
    disabled?: boolean
    style?: CSSProperties | undefined
}


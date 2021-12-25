import s from "./Button.module.scss";
import {StyleType} from "../../../../types/types";

// в месте, где используется кнопка, если нужно, стилизуем кнопку
// const styleButton = {
//    padding: "19px 61px",
//    fontSize: "14px",
//    letterSpacing: "0.8px"
// }

// style={styleButton}

export default function Button(props: PropsType) {
    return (
        <button className={s.btn} style={props.style} type="submit" onClick={props.onClick}>{props.label}</button>
    );
}

type PropsType = {
    style?: StyleType
    type?: string
    label?: string
    onClick?: () => void
}




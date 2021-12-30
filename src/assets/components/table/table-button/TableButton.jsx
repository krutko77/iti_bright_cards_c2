import s from "./TableButton.module.scss";

// в месте, где используется кнопка, если нужно, стилизуем кнопку
// const styleButton = {
//    padding: "19px 61px",
//    fontSize: "14px",
//    letterSpacing: "0.8px"
// }

// style={styleButton}

export default function TableButton(props) {
   return (
      <button onClick={props.callback} className={s.btn} style={props.style}>{props.label}</button>
   );
}




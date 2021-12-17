import s from "./Button.module.scss";

// в месте, где используется кнопка, если нужно, стилизуем кнопку
// const styleButton = {
//    padding: "19px 61px",
//    fontSize: "14px",
//    letterSpacing: "0.8px"
// }

// style={styleButton}

export default function Button(props) {
   return (
      <button className={s.btn} style={props.style} type="submit">{props.label}</button>
   );
}




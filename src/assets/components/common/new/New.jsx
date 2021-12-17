import s from "./Button.module.scss";


export default function Button(props) {
   return (
      <button className={s.btn} style={props.style}>{props.label}</button>
   );
}


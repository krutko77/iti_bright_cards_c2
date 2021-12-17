import s from "./Button.module.scss";


function Button(props) {
   return (   
      <button className={s.btn} style={props.style}>{props.label}</button>
   );
}

export default Button;
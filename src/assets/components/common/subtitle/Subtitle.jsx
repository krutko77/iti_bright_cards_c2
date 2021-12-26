import s from "./Subtitle.module.scss";


export default function Subtitle(props) {
   return (
      <h2 className={s.subtitle} style={props.style}>{props.subtitle}</h2>
   );
}


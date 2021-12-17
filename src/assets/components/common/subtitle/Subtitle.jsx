import s from "./Subtitle.module.scss";


export default function Subtitle(props) {
   return (
      <h2 className={s.subtitle}>{props.subtitle}</h2>
   );
}


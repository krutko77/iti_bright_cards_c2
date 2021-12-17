import s from "./Subtitle.module.scss";


function Subtitle(props) {
   return (
      <h2 className={s.subtitle}>{props.subtitle}</h2>
   );
}

export default Subtitle;
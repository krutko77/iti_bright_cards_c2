import s from "./TitleBlock.module.scss";
import { NavLink } from "react-router-dom";
import Subtitle from "./../subtitle/Subtitle.jsx";

import icon from "./../../../img/arrow-title-icon.svg";

// стилизация Subtitle
const styleSubtile = {
   marginBottom: 0
}

export type PropsType = {
    title?:string
}

export default function TitleBlock(props:PropsType) {
   return (
      <div className={s.titleBlock}>
            <NavLink className={s.link} to="/packsdesigned"><img src={icon} alt="arrow" /></NavLink>
            <Subtitle subtitle={props.title} style={styleSubtile} />
         </div>

   )
}



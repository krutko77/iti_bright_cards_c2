import s from "./TitleBlock.module.scss";
import { NavLink } from "react-router-dom";
import Subtitle from "./../subtitle/Subtitle.jsx";

import icon from "./../../../img/arrow-title-icon.svg";

// стилизация Subtitle
const styleSubtile = {
   marginBottom: 0
}

export default function TitleBlock() {
   return (
      <div className={s.titleBlock}>
            <NavLink className={s.link} to="./."><img src={icon} alt="arrow" /></NavLink>
            <Subtitle subtitle="Pack Name" style={styleSubtile} />
         </div>

   )
}



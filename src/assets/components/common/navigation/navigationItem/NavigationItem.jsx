import s from "./NavigationItem.module.scss";
import { NavLink } from "react-router-dom";

function NavigationItem(props) {
  return (
    <li className={s.item} style={props.itemData.myStyle}>
      <NavLink style={props.styledNavItem} to={props.itemData.path} className={s.linkNavigationItem}>
        {props.itemData.title}
      </NavLink>
    </li>
  );
}

export default NavigationItem;

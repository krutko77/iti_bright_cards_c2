import s from "./MenuItem.module.scss";


export default function MenuItem(props) {
   return (
      <div className={s.menuItem}>
         <img className={s.icon} src={props.icon} alt="icon" />
         <span className={s.label}>{props.label}</span>
      </div>
   )
}



import s from "./ProfileBlock.module.scss";
import TableButton from "../../../components/table/table-button/TableButton.tsx";



export default function ProfileBlock(props) {
   return (
      <div className={s.profileBlock}>
         <img className={s.img} src={props.data.img} alt="photo" />
         <span className={s.nameLabel}>{props.data.name}</span>
         <span className={s.professionLabel}>Front-end developer</span>
         <TableButton style={props.styleButton} label="Edit profile" />
      </div>
   )
}



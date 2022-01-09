
import s from "./CheckboxLabel.module.scss";
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabel(props) {
   return (
      <div className={s.checkboxLabels}>
         <Checkbox />
         <span className={s.label}>{props.label}</span>
      </div>
   );
}
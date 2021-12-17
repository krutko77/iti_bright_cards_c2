import s from "./CheckBox.module.scss";


function CheckBox(props) {
   return (
      <label class="container">Один
      <input type="checkbox" checked="checked">
      <span className={s.checkMark}></span>
  </label>
  
   );
}

export default CheckBox;
import s from "./BottomBlock.module.scss";
import UsePagination from "../pagination/UsePagination.jsx";
import Select from "../select/Select.jsx";


export default function BottomBlock() {
   return (
      <div className={s.bottomBlock}>
               <UsePagination />
               <div className={s.selectBlock}>
                  <span className={s.label1}>Show</span>
                  <div className={s.selectWrap}>
                     <Select />
                  </div>
                  <span className={s.label2}>Cards per Page</span>
               </div>
            </div>
   )
}


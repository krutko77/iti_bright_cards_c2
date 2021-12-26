import TitleBlock from "../common/title-block/TitleBlock";
import Button from "../common/button/Button.tsx";
import Search from "./../common/search/Search.jsx";

import s from "./CardsTable.module.scss";

// стилизация синей кнопоки
const styleButton = {
   width: "184px",
   marginLeft: "24px"  
}


export default function CardsTable() {
   return (      
      <div className={s.cardsTable}>
            <TitleBlock />         
            <div className={s.searchBlock}>
               <div className={s.search}>
                  <Search />
               </div>               
               <Button label="Add new pack" style={styleButton} />
            </div>
            <div className={s.content}>
               <span className={s.label}>This pack is empty. Click add new card to fill this pack</span>
            </div>
      </div>
   )
}



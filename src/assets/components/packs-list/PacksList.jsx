import s from "./PacksList.module.scss";
import Subtitle from "../common/subtitle/Subtitle.jsx";
import Button from "../common/button/Button.jsx";
import Search from "../common/search/Search.jsx";


// стилизация кнопок Aside
const styleButton1 = {
   backgroundColor: "#FFFFFF",
   color: "#2D2E46",
   fontSize: "14px",
   width: "98px",
   boxShadow: "none",
   borderRadius: 0
}

const styleButton2 = {
   backgroundColor: "#9A91C8",
   color: "#FFFFFF",
   fontSize: "14px",
   width: "98px",
   boxShadow: "none",
   borderRadius: 0
}

const styleButton3 = {
   width: "184px"
}

export default function PacksList() {
   return (
      <div className={s.packsList}>
         <aside className={s.sidebar}>
            <span className={s.label}>Show packs cards</span>
            <div className={s.btnBlock}>
               <Button label="My" style={styleButton1} />
               <Button label="All" style={styleButton2} />
            </div>
            <span className={s.label}>Number of cards</span>
         </aside>
         <main className={s.main}>
            <div className={s.title}>
               <Subtitle subtitle="Packs list" />
            </div>
            <div className={s.searchBlock}>
               <Search />
               <Button label="Add new pack" style={styleButton3} />
            </div>


         </main>
      </div>
   );
}



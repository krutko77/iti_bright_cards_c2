import s from "./PacksList.module.scss";
import Subtitle from "./../common/subtitle/Subtitle.jsx";
import Button from "../common/button/Button.tsx";
import Search from "./../common/search/Search.jsx";
import Table from "./../table/Table.jsx";
import UsePagination from "./pagination/UsePagination.jsx";
import Select from "./select/Select.jsx";
import UseSlider from "./../packs-list/use-slider/UseSlider.jsx";


// стилизация синей кнопоки
const styleButton = {
   width: "184px"
}

// данные для таблицы
const tableData = {
   title1: "Name",
   title2: "Cards",
   title3: "Last Updated",
   title4: "Created by",
   title5: "Actions",
   dataRow1: {
      td1: "Pack Name",
      td2: "4",
      td3: "18.03.2021",
      td4: "Ivan Ivanov"
   },
   dataRow2: {
      td1: "Pack Name",
      td2: "4",
      td3: "18.03.2021",
      td4: "Ivan Ivanov"
   },
   dataRow3: {
      td1: "Pack Name",
      td2: "4",
      td3: "18.03.2021",
      td4: "Ivan Ivanov"
   },
   dataRow4: {
      td1: "Pack Name",
      td2: "4",
      td3: "18.03.2021",
      td4: "Ivan Ivanov"
   },
   dataRow5: {
      td1: "Pack Name",
      td2: "4",
      td3: "18.03.2021",
      td4: "Ivan Ivanov"
   },
   dataRow6: {
      td1: "Pack Name",
      td2: "4",
      td3: "18.03.2021",
      td4: "Ivan Ivanov"
   },
   dataRow7: {
      td1: "Pack Name",
      td2: "4",
      td3: "18.03.2021",
      td4: "Ivan Ivanov"
   },
   dataRow8: {
      td1: "Pack Name",
      td2: "4",
      td3: "18.03.2021",
      td4: "Ivan Ivanov"
   }
}

export default function PacksList() {
   return (
      <div className={s.packsList}>
         <aside className={s.sidebar}>
            <span className={s.label}>Show packs cards</span>
            <div className={s.btnBlock}>
               <button className={`${s.btn} ${s.active}`}>My</button>
               <button className={s.btn}>All</button>
            </div>
            <span className={`${s.label} ${s.labelSlider}`}>Number of cards</span>
            <UseSlider />
         </aside>
         <main className={s.main}>
            <div className={s.title}>
               <Subtitle subtitle="Packs list" />
            </div>
            <div className={s.searchBlock}>
               <Search />
               <Button label="Add new pack" style={styleButton} />
            </div>
            <Table tableData={tableData} />
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
         </main>
      </div>
   );
}



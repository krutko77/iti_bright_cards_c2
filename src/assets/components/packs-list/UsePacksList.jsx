import s from "./PacksList.module.scss";
import Subtitle from "./../common/subtitle/Subtitle.jsx";
import Button from "../common/button/Button.tsx";
import Search from "./../common/search/Search.jsx";
import Table from "./../table/Table.jsx";
import UseSlider from "../common/slider/UseSlider.jsx";
import BottomBlock from "./../common/bottom-block/BottomBlock";


// стилизация синей кнопоки
const buttonStyle = {
   width: "184px",
   marginLeft: "24px"
}

// стилизация ширины столбцов таблицы
const tableStyle = {
   th1: {
     width: "185px",
  },
  th2: {
     width: "77px",
  },
  th3: {
     width: "135px",
  },
  th4: {
     width: "112px",
  },
  th5: {
     width: "160px",
  }
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
            <UseSlider />
         </aside>
         <main className={s.main}>
            <div className={s.title}>
               <Subtitle subtitle="Packs list" />
            </div>
            <div className={s.searchBlock}>
               <div className={s.search}>
                  <Search />
               </div>
               <Button label="Add new pack" style={buttonStyle} />
            </div>
            <Table tableData={tableData} style={tableStyle} />
            <BottomBlock />
         </main>
      </div>
   );
}



import s from "./MyPacksList.module.scss";
import ProfileBlock from "../common/profile-block/ProfileBlock.jsx";
import Subtitle from "../common/subtitle/Subtitle.jsx";
import Search from "../common/search/Search.jsx";
import Table from "../table/Table.jsx";
import UseSlider from "../common/use-slider/UseSlider.jsx";
import BottomBlock from "../common/bottom-block/BottomBlock";

// данные для ProfileBlock
const ProfileData = {
   name: "Petr Ivanov"
}

// стилизация кнопки в ProfileBlock 
const styleButton = {
   padding: "5px 8px",
   border: "1px solid #9E9BB8",
   backgroundColor: "transparent"
}

// / данные для таблицы
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


export default function MyPacksList() {
   return (
      <div className={s.myPacksList}>
         <aside className={s.sidebar}>
            <div className={s.profileBlock}>
               <ProfileBlock styleButton={styleButton} data={ProfileData} />
            </div>
            <div className={s.useSlider}>
               <UseSlider />
            </div>
         </aside>
         <main className={s.main}>
            <Subtitle subtitle="My packs list" />
            <div className={s.search}>
               <Search />
            </div>
            <Table tableData={tableData} />
            <BottomBlock />
         </main>
      </div>
   );
}




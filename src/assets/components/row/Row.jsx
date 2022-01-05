import s from "./Row.module.scss";
import TitleBlock from "../common/title-block/TitleBlock";
import Search from "../common/search/Search.tsx";
import Table from "../table/Table";



// данные для таблицы
const tableData = {
   title1: "Question",
   title2: "Answer",
   title3: "Last Updated",
   title4: "Grade",
   title5: "Actions",
   dataRow1: {
      td1: 'How "This" works in JavaScript?',
      td2: 'This is how "This" works in JavaScript',
      td3: "18.03.2021",
      rating: 5
   }  
}

// стилизация ширины столбцов таблицы
const tableStyle = {
   th1: {
     width: "251px",
  },
  th2: {
     width: "307px",
  },
  th3: {
     width: "133px",
  },
  th4: {
     width: "156px",
  },
  th5: {
     width: "113px",
  }
}

export default function Row() {
   return (
      <div className={s.row}>
         <TitleBlock />
         <div className={s.search}>
            <Search />
         </div>
        <Table tableData={tableData} style={tableStyle} />
      </div>
   )
}



import s from "./MainPackName.module.scss";
import TitleBlock from "../../common/Pvl/title-block/TitleBlock";
import Table from "../table/Table";
import Search from "../../../../n2-features/f2-table/Search/SearchMain/Search";



// данные для таблицы
const tableData = {
   title1: "Question",
   title2: "Answer",
   title3: "Last Updated",
   title4: "Grade",   
   dataRow1: {
      td1: 'How "This" works in JavaScript?',
      td2: 'This is how "This" works in JavaScript',
      td3: "18.03.2021",
      rating: 5
   },
   dataRow2: {
      td1: 'How "This" works in JavaScript?',
      td2: 'This is how "This" works in JavaScript',
      td3: "18.03.2021",
      rating: 5
   },
   dataRow3: {
      td1: 'How "This" works in JavaScript?',
      td2: 'This is how "This" works in JavaScript',
      td3: "18.03.2021",
      rating: 4
   },
   dataRow4: {
      td1: 'How "This" works in JavaScript?',
      td2: 'This is how "This" works in JavaScript',
      td3: "18.03.2021",
      rating: 4
   },
   dataRow5: {
      td1: 'How "This" works in JavaScript?',
      td2: 'This is how "This" works in JavaScript',
      td3: "18.03.2021",
      rating: 3
   },
   dataRow6: {
      td1: 'How "This" works in JavaScript?',
      td2: 'This is how "This" works in JavaScript',
      td3: "18.03.2021",
      rating: 3
   },
   dataRow7: {
      td1: 'How "This" works in JavaScript?',
      td2: 'This is how "This" works in JavaScript',
      td3: "18.03.2021",
      rating: 2
   },
   dataRow8: {
      td1: 'How "This" works in JavaScript?',
      td2: 'This is how "This" works in JavaScript',
      td3: "18.03.2021",
      rating: 1
   } 
}

// стилизация ширины столбцов таблицы
const tableStyle = {
   th1: {
     width: "330px",
  },
  th2: {
     width: "347px",
  },
  th3: {
     width: "163px",
  },
  th4: {
     width: "120px",
  },
  th5: {
     display: "none",
  }
}

export default function MainPackName() {
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



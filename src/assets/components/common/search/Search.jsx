import s from "./Search.module.scss";


export default function Search(props) {
   return (
      <div className={s.search}>
         <input className={s.inputSearch}  name="name" type="text" placeholder="Search..." autofocus />
      </div>
   );
}

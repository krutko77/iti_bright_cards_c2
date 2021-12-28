import s from "./RatingCell.module.scss";
import UseRating from "./../../common/rating/UseRating.jsx";

export default function RatingCell(props) {
   return (
      <div className={s.ratingCell}>         
            <UseRating data={props.cellData} />         
      </div>
   )
}



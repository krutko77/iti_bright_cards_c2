import { Rating } from "@mui/material";
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import { iconRatingColor } from "../../styles/inlineVariables";
import { emptyIconRatingColor } from "../../styles/inlineVariables";

const StyledRating = styled(Rating)({
   '& .MuiRating-icon ': {
      marginRight: 3,
      marginTop: 17,
      fontSize: "13px"
   }   
});

export default function UseRating(props) {
   return (
      <StyledRating
         readOnly       
         precision={0.5}
         defaultValue={props.data}
         icon={<StarIcon style={{ color: iconRatingColor }} fontSize="13px" />}
         emptyIcon={<StarIcon style={{ color: emptyIconRatingColor }} fontSize="13px" />}
      />
   )
}



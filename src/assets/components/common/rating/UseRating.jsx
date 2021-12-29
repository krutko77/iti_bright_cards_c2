import { Rating } from "@mui/material";
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

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
         icon={<StarIcon style={{ color: "#21268F" }} fontSize="13px" />}
         emptyIcon={<StarIcon style={{ color: "#D7D8EF" }} fontSize="13px" />}
      />
   )
}



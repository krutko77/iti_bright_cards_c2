import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';
import { sliderColor } from "./../../../../n1-main/m1-ui/common/components/styles/inlineVariables";
import { sliderTextColor } from "./../../../../n1-main/m1-ui/common/components/styles/inlineVariables";

function ValueLabelComponent(props) {
   const { children, value } = props;

   return (
      <Tooltip enterTouchDelay={0} placement="top" title={value}>
         {children}
      </Tooltip>
   );
}

ValueLabelComponent.propTypes = {
   children: PropTypes.element.isRequired,
   value: PropTypes.number.isRequired,
};


const MySlider = styled(Slider)({
   color: sliderColor,
   height: 5,
   '& .MuiSlider-track': {
      border: 'none',
   },
   '& .MuiSlider-thumb': {
      height: 16,
      width: 16,
      backgroundColor: sliderTextColor,
      border: '4px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
         boxShadow: 'inherit',
      },
      '&:before': {
         display: 'none',
      },
   },
   '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 24,
      borderRadius: 3,
      backgroundColor: sliderColor,
      '&:before': { display: 'none' },
   },
});



function valuetext(value) {
   return `${value}number`;
}

export default function RangeSlider() {
   const [value, setValue] = React.useState([15, 112]);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (

      <Box sx={{ width: 195 }}>
         <MySlider
            max={150}
            getAriaLabel={() => 'Number of cards'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="on"
            getAriaValueText={valuetext}
         />
      </Box>
   );
}




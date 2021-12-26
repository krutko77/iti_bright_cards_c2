import * as React from 'react';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
   'label + &': {
      marginTop: theme.spacing(3),
   },
   '& .MuiInputBase-input': {
      borderRadius: 0,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #C0BECC',
      fontSize: "12px",
      padding: '0 0 0 6px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
         'Roboto',
      ].join(','),
      '&:focus': {
         // borderColor: '#80bdff',
         // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
   },
}));

export default function CustomizedSelects() {
   const [age, setAge] = React.useState(10);
   const handleChange = (event) => {
      setAge(event.target.value);
   };
   return (
      <div>
         <FormControl sx={{ m: 1 }} variant="standard">
            {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}
            <Select
               labelId="demo-customized-select-label"
               id="demo-customized-select"
               value={age}
               onChange={handleChange}
               input={<BootstrapInput />}
            >
               <MenuItem value={10}>10</MenuItem>
               <MenuItem value={20}>20</MenuItem>
               <MenuItem value={30}>30</MenuItem>
            </Select>
         </FormControl>
      </div>
   );
}
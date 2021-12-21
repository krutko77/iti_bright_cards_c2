import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function PaginationRounded() {
  return (
    <div>
       <Pagination count={10} shape="rounded"color="primary" size="small" />      
    </div>
  );
}
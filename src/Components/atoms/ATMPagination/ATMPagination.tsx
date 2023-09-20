// import React from 'react'

// type Props = {}

// const ATMPagination = (props: Props) => {
//   return (
//     <div>ATMPagination</div>
//   )
// }

// export default ATMPagination
import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

type PaginationTypes={
    page:number
    count:number
    onPageChange?:(value:any)=>void,
    onRowsPerPageChange?:(value:any)=>void
   rowsPerPage?:number
}
const ATMTransactionPagination = ({ page, count,onPageChange,onRowsPerPageChange,rowsPerPage }:PaginationTypes) => {


  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
      <Box>
        <Pagination
          page={page}
          count={count}
          onChange={onPageChange}
        //   rowsPerPage={rowsPerPage}
        //   onRowsPerPageChange={onRowsPerPageChange}
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              component="button"
             
              {...item}
            />
          )}
        />
      </Box>
      <Box>
        <FormControl variant="outlined">
          <InputLabel htmlFor="rows-per-page">Rows per page</InputLabel>
          <Select
            value={rowsPerPage}
            onChange={onPageChange}
            label="Rows per page"
            inputProps={{
              name: 'rowsPerPage',
              id: 'rows-per-page',
            }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default ATMTransactionPagination;
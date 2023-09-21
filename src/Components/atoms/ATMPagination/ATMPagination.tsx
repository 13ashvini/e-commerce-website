import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

type PaginationTypes = {
  page: number;
  count: number;
  onPageChange?: (value: number) => void;
  onRowsPerPageChange?: (value: number) => void;
  rowsPerPage?: number;
};

const ATMTransactionPagination = ({
  page,
  count,
  onPageChange,
  onRowsPerPageChange,
  rowsPerPage = 10, // Default rows per page
}: PaginationTypes) => {
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    
    if (onPageChange) {
      onPageChange(value);
    }
  };

  const handleRowsPerPageChange = (event:any) => {
    const newRowsPerPage = event.target.value as number;
    if (onRowsPerPageChange) {
      onRowsPerPageChange(newRowsPerPage);
    }
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
      <Box>
        <Pagination
          page={page}
          count={count}
          onChange={handlePageChange}
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem component="button" {...item} />
          )}
        />
      </Box>
      <Box>
        <FormControl variant="outlined">
          <InputLabel htmlFor="rows-per-page">Rows per page</InputLabel>
          <Select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
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
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductListResponse } from "../../model/Product.model";

type ProductProps = {
  items: ProductListResponse[] |[]
  totalItems: number;
  page: number;
  rowsPerPage:number;
  sortBy:string
  filterBy:string[]
  isLoading: boolean;
  isError: boolean;
};

const initialState: ProductProps = {
  items: [],
  totalItems: 0,
  page: 10,
  rowsPerPage:10,
  sortBy:"",
  filterBy:[""],
  isLoading: true,
  isError: false,
};

const categorProducts = createSlice({
  name: 'categoryProduct',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<any>) => {
      state.items = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
        window.scrollTo(0, 0);
        state.page = action.payload;
      },
      setRowsPerPage: (state, action: PayloadAction<number>) => {
        window.scrollTo(0, 0);
        state.rowsPerPage = action.payload;
        state.page=1
      },
      setSortBy: (state, action: PayloadAction<string>) => {
        state.sortBy = action.payload;
        state.page=1
      },
      setFilterBy: (state, action: PayloadAction<string[]>) => {
        state.filterBy = action.payload;
        state.page=1
      },
      setTotalItems: (state, action: PayloadAction<number>) => {
        state.totalItems = action.payload;
      },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
        state.isLoading= action.payload;
      },
      setIsError: (state, action: PayloadAction<boolean>) => {
        state.isError = action.payload;
      },
  },
});

export const { setItems,
    setIsLoading,
    setIsError,
    setPage,
    setSortBy,
     setFilterBy,
    setRowsPerPage,
    setTotalItems,
} = categorProducts.actions;
export default categorProducts.reducer;
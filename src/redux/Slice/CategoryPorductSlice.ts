import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductListResponse } from "../../model/Product.model";

type ProductProps = {
  items: ProductListResponse[] | [];
  totalItems: number;
  currentPage: number; // Added currentPage
  rowsPerPage: number;
  sortBy: string;
  filterBy: string[];
  isLoading: boolean;
  isError: boolean;
};

const initialState: ProductProps = {
  items: [],
  totalItems: 0,
  currentPage: 1,
  rowsPerPage: 10,
  sortBy: "",
  filterBy: [""],
  isLoading: true,
  isError: false,
};

const categoryProducts = createSlice({
  name: "categoryProduct",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<any>) => {
      state.items = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalItems: (state, action: PayloadAction<number>) => {
      state.totalItems = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
    setRowsPerPage: (state, action: PayloadAction<number>) => {
      state.rowsPerPage = action.payload;
    },
  },
});

export const {
  setItems,
  setCurrentPage,
  setTotalItems,
  setIsLoading,
  setIsError,
  setRowsPerPage
} = categoryProducts.actions;

export default categoryProducts.reducer;
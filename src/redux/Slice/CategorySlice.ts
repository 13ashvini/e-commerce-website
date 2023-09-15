import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CategoryStateProps = {
  items: any[] |[]
  totalItems: number;
  page: number;
  isLoading: boolean;
  isError: boolean;
};

const initialState: CategoryStateProps = {
  items: [],
  totalItems: 0,
  page: 1,
  isLoading: true,
  isError: false,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<any>) => {
      state.items = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
        state.isLoading= action.payload;
      },
      setIsError: (state, action: PayloadAction<boolean>) => {
        state.isError = action.payload;
      },
  },
});

export const { setItems,setIsLoading,setIsError } = categorySlice.actions;
export default categorySlice.reducer;
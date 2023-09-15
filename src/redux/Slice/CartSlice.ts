import { PayloadAction, createSlice } from "@reduxjs/toolkit";



type CartState = {
  cart: any[] ;
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const { payload } = action;
      const productToAdd: any = { ...payload, qnty: 1 };
      state.cart.push(productToAdd ||[]);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const idToRemove = action.payload;
      state.cart = state.cart.filter((item) => item.id !== idToRemove);
    },
    incQnty: (state, action: PayloadAction<number>) => {
      const idToIncrement = action.payload;
      const itemToIncrement = state.cart.find((item) => item.id === idToIncrement);
      if (itemToIncrement) {
        itemToIncrement.qnty += 1;
      }
    },
    decQnty: (state, action: PayloadAction<number>) => {
      const idToDecrement = action.payload;
      const itemToDecrement = state.cart.find((item) => item.id === idToDecrement);
      if (itemToDecrement && itemToDecrement.qnty > 1) {
        itemToDecrement.qnty -= 1;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, incQnty, decQnty } = cartSlice.actions;
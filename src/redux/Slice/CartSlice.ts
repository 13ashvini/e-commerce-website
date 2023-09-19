import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CartState = {
  cart: any[] ;
}

const getCartInitialValue =()=>{
  const cartData=  localStorage.getItem("cartItem")
    return {
      cart: cartData ? JSON.parse(cartData) : [],
    }
}
const initialState: CartState =getCartInitialValue()

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const { payload } = action;
      const productToAdd: any = { ...payload, qnty: 1 };
      state.cart.push(productToAdd ||[])
      localStorage.setItem("cartItem", JSON.stringify(state.cart));
    },
  
    removeFromCart: (state, action: PayloadAction<number>) => {
      const idToRemove = action.payload;
      state.cart = state.cart.filter((item) => item.id !== idToRemove);
      localStorage.setItem("cartItem", JSON.stringify(state.cart));
    },
    incQnty: (state, action: PayloadAction<number>) => {
      const idToIncrement = action.payload;
      const itemToIncrement = state.cart.find((item) => item.id === idToIncrement);
      if (itemToIncrement) {
        itemToIncrement.qnty += 1;
        itemToIncrement.totalPrice = itemToIncrement.price * itemToIncrement.qnty;
        localStorage.setItem("cartItem", JSON.stringify(state.cart));
      }
    },
    decQnty: (state, action: PayloadAction<number>) => {
      const idToDecrement = action.payload;
      const itemToDecrement = state.cart.find((item) => item.id === idToDecrement);
      if (itemToDecrement && itemToDecrement.qnty > 1) {
        itemToDecrement.qnty -= 1;
        itemToDecrement.totalPrice = itemToDecrement.price * itemToDecrement.qnty;
        localStorage.setItem("cartItem", JSON.stringify(state.cart));
      }
    },
  },
});
 

export default cartSlice.reducer;
export const { addToCart, removeFromCart, incQnty, decQnty } = cartSlice.actions;
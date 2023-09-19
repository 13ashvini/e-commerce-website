import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type WishlistState = {
  items: any[] ;
}

const getCartInitialValue =()=>{
  const wishListData=  localStorage.getItem("wishlistItem")
    return {
        items: wishListData ? JSON.parse(wishListData) : [],
    }
}
const initialState: WishlistState =getCartInitialValue()
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<any>) => {
      const productToAdd=action.payload;
      state.items.push(productToAdd ||[])
      localStorage.setItem("wishlistItem", JSON.stringify(state.items));
    },
  
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      const idToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== idToRemove);
      localStorage.setItem("wishlistItem", JSON.stringify(state.items));
    },
    
  },
});
 

export default wishlistSlice.reducer;
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
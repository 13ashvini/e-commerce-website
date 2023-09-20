import { configureStore } from '@reduxjs/toolkit'
import apiSlice from '../Service/ApiSlice'
import CategorySlice from './Slice/CategorySlice'
import CategoriesSlice from './Slice/CategoriesSlice'
import CartSlice from './Slice/CartSlice'
import WishlistSlice from './Slice/WishlistSlice'
import CategoryPorductSlice from './Slice/CategoryPorductSlice'
// ...
const store = configureStore({
  reducer:{
   category:CategorySlice,
   cart:CartSlice,
   wishlist:WishlistSlice,
   categories:CategoriesSlice,
   categoryProduct:CategoryPorductSlice,
    [apiSlice.reducerPath] : apiSlice.reducer
  },

  middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiSlice.middleware),

  


})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
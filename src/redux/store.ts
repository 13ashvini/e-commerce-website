import { configureStore } from '@reduxjs/toolkit'
import apiSlice from '../Service/ApiSlice'
import CategorySlice from './Slice/CategorySlice'
import CategoriesSlice from './Slice/CategoriesSlice'
import CartSlice from './Slice/CartSlice'
// ...
const store = configureStore({
  reducer:{
   category:CategorySlice,
   cart:CartSlice,
   categories:CategoriesSlice,
    [apiSlice.reducerPath] : apiSlice.reducer
  },

  middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiSlice.middleware),

  


})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
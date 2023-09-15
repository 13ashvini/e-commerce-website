import { LoginProps } from "../model/Login.model";
import apiSlice from "./ApiSlice";

const CategoryService= apiSlice.injectEndpoints({
    endpoints: (builder:any) => ({
      // all categories
      categories: builder.query({
        providesTag: ["category"],
        query: () => ({
           url:`/categories`,
           method:"GET",
           
        }),
      }),
// filter category
      filterCategory: builder.query({
        providesTag: ["category"],
        query: (categoryId:any) => ({
           url:`/products/?categoryId=${categoryId}`,
           method:"GET",
           
        }),
      }),
    }),
   
  });
  
  // Corrected export
export const {useFilterCategoryQuery,useCategoriesQuery} = CategoryService

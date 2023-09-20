import { LoginProps } from "../model/Login.model";
import apiSlice from "./ApiSlice";

const ProductService= apiSlice.injectEndpoints({
    endpoints: (builder:any) => ({
      // get Product by id
      getProductById: builder.query({
        providesTag: ["product"],
        query: (id:string) => ({
           url:`/products/${id}`,
           method:"GET",
           
        }),
      }),
      // get Product by Catgery wise With pagination
      getProductByCategory: builder.query({
        providesTag: ["product"],
        query: ({id,offset,limit}:{id:string,offset:number,limit:number}) => ({
           url:`/products/?categoryId=${id}&offset=${offset}&limit=${limit}`,
           method:"GET",
           
        }),
      }),
    }),
   
  });
  
  // Corrected export
export const {useGetProductByIdQuery,useGetProductByCategoryQuery} = ProductService

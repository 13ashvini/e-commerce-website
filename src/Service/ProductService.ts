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
    }),
   
  });
  
  // Corrected export
export const {useGetProductByIdQuery} = ProductService

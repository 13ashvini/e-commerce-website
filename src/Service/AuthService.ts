import { LoginProps } from "../model/Login.model";
import apiSlice from "./ApiSlice";

const authService= apiSlice.injectEndpoints({
    endpoints: (builder:any) => ({
      // Login
      login: builder.mutation({
        invalidatesTags: ["login"],
        query: (body:LoginProps) => ({
           url:"/auth/login",
           method:"POST",
           body
        })
      }),
    }),
   
  });
  
  // Corrected export
export const {useLoginMutation} = authService

// import React from 'react'

// const Login = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Login
import { FormikProps } from "formik";
import { Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import ATMTextField from "../../Components/atoms/ATMFormFields/ATMTextField/ATMTextField";
import { LoginProps } from "./LoginWrapper";
// import Register from "./Register";
// import { useLoginMutation } from "./authApi";
// import { toast } from "react-toastify";
type Props={
loginProps:FormikProps<LoginProps>
}


const Login = ({loginProps}:Props) => {
  const {values,setFieldValue}=loginProps
//   const [
//     loginUser,
//     {
//       data: loginData,
//       isSuccess: isLoginSuccess,
//       isError: isLoginErrror,
//       error: loginError,
//     },
//   ] = useLoginMutation();

//   useEffect(() => {
//     if (isLoginSuccess) {
//       toast.success("User Login successfully");
//     }
//   });

  return (
    <div className="p-5 shadow-lg ">
      <div className="flex flex-col gap-5">
       
          <div><h1 className="font-bold text-[24px] ">Login</h1></div>
          <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <ATMTextField
            value={values?.email}
            placeholder="Enter Your Email Address"
            className="border border-gray-500 rounded-none py-3"
            onChange={(e)=>{setFieldValue("email",e.target.value)}}
            name="email"
            label="Email Address"
            required
            />
             <ATMTextField
            value={values?.password}
            placeholder="Enter Your Password"
            className="border border-gray-500 rounded-none py-3"
            onChange={(e)=>{setFieldValue("password",e.target.value)}}
            name="password"
            label="Password"
            required
            />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <Checkbox
               
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              />
              <span className="text-[#363F4D]">Remember me</span>
            </div>
            <div className="text-[#363F4D]">Forgotten pasward?</div>
          </div>
          </div>
          <button className="bg-[#363F4D] hover:text-white hover:bg-yellow-500 p-5 py-2 w-fit  text-white rounded">
            Login
          </button>
      
      
      </div>
    </div>
  );
};

export default Login;

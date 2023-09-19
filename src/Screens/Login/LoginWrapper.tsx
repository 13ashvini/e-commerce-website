import React from 'react'
import Login from './Login'
import { Form, Formik, FormikHelpers } from 'formik'
import * as yup from 'yup';
import { useLoginMutation } from '../../Service/AuthService';
import { showToast } from '../../utils/showTaoster';
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
export type LoginProps={
    email:string,
    password:string
}
const initialValues:LoginProps={
    email:"",
    password:""
}
const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(3, 'Password must be at least 3 characters').required('Password is required'),
  });
 
const LoginWrapper = () => {
  const navigate=useNavigate()
  const [login]=useLoginMutation()
const handleSubmit = (
  values: LoginProps,
  { resetForm, setSubmitting }: FormikHelpers<LoginProps>
) => {
  const formattedValue: any = values;

  login(formattedValue).then((res: any) => {
    console.log("erRR2",res)

    if (res?.error) {
      toast.error(res?.error?.data?.message);
      setSubmitting(false);
    } else {
      if (res?.data) {
        console.log("message",res)
        localStorage.setItem("access_token", res?.data?.access_token);
        localStorage.setItem("refresh_token", res?.data?.refresh_token);
        toast.success("User Login Successfully");
        navigate("/")
        resetForm();
        setSubmitting(false);
      } else {
        console.log("erRR",res)
        showToast("error", res?.data?.message);
        setSubmitting(false);
      }
    }
  })
  .catch((error: any) => {
    console.error("API Request Error:", error);
    toast.error("An error occurred during the request.");
    setSubmitting(false);
  });
};
  return (
    <div>
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema
        }
        >
            {(loginProps)=>(
                <Form>
                <Login loginProps={loginProps}/>
                <Toaster/>
                </Form>
            )}

        </Formik>
   
    </div>
  )
}

export default LoginWrapper

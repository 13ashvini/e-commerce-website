
import React from 'react'
import { Form, Formik } from 'formik'
import * as yup from 'yup';
import Register from './Register';

export type RegisterProps={
    firstName:string,
    lastName:string,
    confirmPassword:string,
    email:string,
    password:string
}
const initialValues:RegisterProps={
    email:"",
    firstName:"",
    lastName:"",
    confirmPassword:"",
    password:""
}
const validationSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
  
    lastName: yup.string().required("Last name is required"),
  
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
  
    password: yup
      .string()
      .min(3, "Password must be at least 3 characters")
      .required("Password is required"),
  
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required") as yup.StringSchema<string>,
  });
const RegisterWrapper = () => {
  return (
    <div>
        <Formik
        initialValues={initialValues}
        onSubmit={(values)=>{console.log(values)}}
        validationSchema={validationSchema
        }
        >
            {(registerProps)=>(
                <Form>
                <Register registerProps={registerProps}/>
                </Form>
            )}

        </Formik>
   
    </div>
  )
}

export default RegisterWrapper

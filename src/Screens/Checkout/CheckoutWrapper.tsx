import { Form, Formik } from 'formik';
import React from 'react'
import * as yup from "yup"
import Checkout from './Checkout';
import { Toaster } from 'react-hot-toast';

export type CheckoutInitialValues = {
    country: string;
    firstName: string;
    lastName: string;
    companyName: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    email: string;
    phone: string;
  };
  const initialValues: CheckoutInitialValues = {
    country: "",
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    email: "",
    phone: "",
  };
  const validationSchema = yup.object().shape({
    country: yup.string().required("Country is required"),
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    companyName: yup.string().required("Company name is required"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    pincode: yup
      .string()
      .required("Pincode is required")
      .matches(/^\d{6}$/, "Pincode must be 6 digits"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup
      .string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
  });
const CheckoutWrapper = () => {
  return (
    <div>
        <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values,resetForm)=>{console.log(values) }}
        >
        {(formikProps)=>(
                <Form>
                <Checkout billingProps={formikProps}/>
                <Toaster/>
                </Form>
            )}


        </Formik>
    </div>
  )
}

export default CheckoutWrapper
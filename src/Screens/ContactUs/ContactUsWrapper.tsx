import React from "react";
import { Form, Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import { Toaster } from "react-hot-toast";
import ContactUs from "./ContactUs";
export type ContactInitialValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const initialValues: ContactInitialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});
const handleFormSubmit = (
  values: ContactInitialValues,
  { resetForm, setSubmitting }: FormikHelpers<ContactInitialValues>
) => {
  const formValuesWithCountry = { ...values };
  localStorage.setItem(
    "contact-us-form",
    JSON.stringify(formValuesWithCountry)
  );
  console.log("Form values:", values);
  setSubmitting(false);
  resetForm();
};
const ContactUsWrapper = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={validationSchema}
      >
        {(contactProps) => (
          <Form>
            <ContactUs contactProps={contactProps}/>
            <Toaster />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUsWrapper;

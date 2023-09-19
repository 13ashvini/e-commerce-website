import React, { useState } from "react";
import ATMOnClickAccordian from "../../Components/atoms/ATMOnClickAccordian/ATMOnClickAccordian";
import ATMTextField from "../../Components/atoms/ATMFormFields/ATMTextField/ATMTextField";
import Header from "../../Components/UI/Header";
import { useNavigate } from "react-router-dom";
import ATMSelect from "../../Components/atoms/ATMFormFields/ATMSelect/ATMSelect";
import OrderSummary from "./OrderSummary";
import { FormikProps } from "formik";
import { CheckoutInitialValues } from "./CheckoutWrapper";
import ATMCollapse from "../../Components/atoms/ATMCollapse/ATMCollapse";
import ATMTextArea from "../../Components/atoms/ATMFormFields/ATMTextArea/ATMTextArea";
import Footer from "../../Components/UI/Footer";

type Props = {
  billingProps: FormikProps<CheckoutInitialValues>;
};

const Checkout = ({ billingProps }: Props) => {
  const { values, setFieldValue } = billingProps;
  const [addCoupon,setAddCoupon]=useState("")
  const [addNotes,setAddNotes]=useState("")
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Header />
      </div>
      <h1 className="py-4 px-2 " onClick={() => navigate("/")}>
        Home<span className="text-gray-400 "> /checkout</span>
      </h1>
      <div className="flex flex-col gap-7 px-10 py-5">
        <div className="">
          <ATMCollapse title= " Have a coupon? Click here to enter your code"
          titleExtraClass="bg-gray-100 hover:text-yellow-500 w-full py-3 px-2 border-t-2 border-yellow-500"
          className="mt-3"
          >
            <div className="flex gap-5">
              <ATMTextField
                className="w-full h-full rounded-none"
                value={addCoupon}
                name=""
                onChange={(e) => {setAddCoupon(e.target.value)}}
              />
              <button className="bg-[#363F4D] w-fit  text-white hover:bg-yellow-500 px-3 py-[6px] w-fit rounded-none   hover:text-white rounded">
                Apply Coupon
              </button>
            </div>
          </ATMCollapse>
        </div>
        <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
          <div className="flex flex-col gap-3">
            <div className="border-b border-gray-300 py-3 text-[25px] font-bold">
              Billing Detail
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <div>
                  <ATMSelect
                    value={values?.country}
                    name="country"
                    onChange={(e) => {
                      setFieldValue("country", e.target.value);
                    }}
                    options={[{ label: "India", value: "India" }]}
                  />
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
                  <ATMTextField
                    value={values?.firstName}
                    className="border border-gray-300 rounded-none py-2"
                    name="firstName"
                    onChange={(e) => {
                      setFieldValue("firstName", e.target.value);
                    }}
                    label="First Name"
                    placeholder="Enter your first name"
                    required
                  />
                  <ATMTextField
                    value={values?.lastName}
                    className="border border-gray-300 rounded-none py-2"
                    name="lastName"
                    onChange={(e) => {
                      setFieldValue("lastName", e.target.value);
                    }}
                    label="Last Name"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
                <div>
                  <ATMTextField
                    value={values?.companyName}
                    className="border border-gray-300 rounded-none py-2"
                    name="companyName"
                    onChange={(e) => {
                      setFieldValue("companyName", e.target.value);
                    }}
                    label="Company"
                    placeholder="Enter your Company"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <ATMTextField
                    value={values?.address}
                    className="border border-gray-300 rounded-none py-2"
                    name="address"
                    onChange={(e) => {
                      setFieldValue("address", e.target.value);
                    }}
                    label="Address"
                    placeholder="Street Address"
                    required
                  />

                  <ATMTextField
                    value={values?.address}
                    className="border border-gray-300 rounded-none py-2"
                    name="address"
                    onChange={(e) => {
                      setFieldValue("address", e.target.value);
                    }}
                    placeholder="Enter your Appartment ,suite,unit,etc"
                  />
                </div>
                <div>
                  <ATMTextField
                    value={values?.city}
                    className="border border-gray-300 rounded-none py-2"
                    name="city"
                    onChange={(e) => {
                      setFieldValue("city", e.target.value);
                    }}
                    label="Town/City"
                    placeholder="Enter your Town/City"
                    required
                  />
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
                  <ATMTextField
                    value={values?.state}
                    className="border border-gray-300 rounded-none py-2"
                    name="state"
                    onChange={(e) => {
                      setFieldValue("state", e.target.value);
                    }}
                    label="State/Country"
                    placeholder="Enter your State/Country"
                    required
                  />
                  <ATMTextField
                    value={values?.pincode}
                    className="border border-gray-300 rounded-none py-2"
                    name="pincode"
                    onChange={(e) => {
                      setFieldValue("pincode", e.target.value);
                    }}
                    label="Postcode/Zip"
                    placeholder="Enter your Postcode/Zip"
                    required
                  />
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
                  <ATMTextField
                    value={values?.email}
                    className="border border-gray-300 rounded-none py-2"
                    name="email"
                    onChange={(e) => {
                      setFieldValue("email", e.target.value);
                    }}
                    label="email"
                    placeholder="Enter your Email"
                    required
                  />
                  <ATMTextField
                    value={values?.phone}
                    className="border border-gray-300 rounded-none py-2"
                    name="phone"
                    onChange={(e) => {
                      setFieldValue("phone", e.target.value);
                    }}
                    label="Phone"
                    placeholder="Enter your Phone"
                    required
                  />
                </div>
              </div>
              <div>
                <ATMCollapse
                  title="SHIP TO A DIFFERENT ADDRESS?"
                  titleExtraClass="text-[#363F4D]py-1 text-[20px] font-bold   hover:text-yellow-500"
                >
                  <div className="flex flex-col gap-5">
                    <div>
                      <ATMSelect
                        value={values?.country}
                        name="country"
                        onChange={(e) => {
                          setFieldValue("country", e.target.value);
                        }}
                        options={[{ label: "India", value: "India" }]}
                      />
                    </div>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
                      <ATMTextField
                        value={values?.firstName}
                        className="border border-gray-300 rounded-none py-2"
                        name="firstName"
                        onChange={(e) => {
                          setFieldValue("firstName", e.target.value);
                        }}
                        label="First Name"
                        placeholder="Enter your first name"
                        required
                      />
                      <ATMTextField
                        value={values?.lastName}
                        className="border border-gray-300 rounded-none py-2"
                        name="lastName"
                        onChange={(e) => {
                          setFieldValue("lastName", e.target.value);
                        }}
                        label="Last Name"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                    <div>
                      <ATMTextField
                        value={values?.companyName}
                        className="border border-gray-300 rounded-none py-2"
                        name="companyName"
                        onChange={(e) => {
                          setFieldValue("companyName", e.target.value);
                        }}
                        label="Company"
                        placeholder="Enter your Company"
                      />
                    </div>
                    <div className="flex flex-col gap-5">
                      <ATMTextField
                        value={values?.address}
                        className="border border-gray-300 rounded-none py-2"
                        name="address"
                        onChange={(e) => {
                          setFieldValue("address", e.target.value);
                        }}
                        label="Address"
                        placeholder="Street Address"
                        required
                      />

                      <ATMTextField
                        value={values?.address}
                        className="border border-gray-300 rounded-none py-2"
                        name="address"
                        onChange={(e) => {
                          setFieldValue("address", e.target.value);
                        }}
                        placeholder="Enter your Appartment ,suite,unit,etc"
                      />
                    </div>
                    <div>
                      <ATMTextField
                        value={values?.city}
                        className="border border-gray-300 rounded-none py-2"
                        name="city"
                        onChange={(e) => {
                          setFieldValue("city", e.target.value);
                        }}
                        label="Town/City"
                        placeholder="Enter your Town/City"
                        required
                      />
                    </div>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
                      <ATMTextField
                        value={values?.state}
                        className="border border-gray-300 rounded-none py-2"
                        name="state"
                        onChange={(e) => {
                          setFieldValue("state", e.target.value);
                        }}
                        label="State/Country"
                        placeholder="Enter your State/Country"
                        required
                      />
                      <ATMTextField
                        value={values?.pincode}
                        className="border border-gray-300 rounded-none py-2"
                        name="pincode"
                        onChange={(e) => {
                          setFieldValue("pincode", e.target.value);
                        }}
                        label="Postcode/Zip"
                        placeholder="Enter your Postcode/Zip"
                        required
                      />
                    </div>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
                      <ATMTextField
                        value={values?.email}
                        className="border border-gray-300 rounded-none py-2"
                        name="email"
                        onChange={(e) => {
                          setFieldValue("email", e.target.value);
                        }}
                        label="email"
                        placeholder="Enter your Email"
                        required
                      />
                      <ATMTextField
                        value={values?.phone}
                        className="border border-gray-300 rounded-none py-2"
                        name="phone"
                        onChange={(e) => {
                          setFieldValue("phone", e.target.value);
                        }}
                        label="Phone"
                        placeholder="Enter your Phone"
                        required
                      />
                    </div>
                  </div>
                </ATMCollapse>
              </div>
              <div>
            
            <ATMTextArea
            name=""
            value={addNotes}
            onChange={(e)=>{setAddNotes(e.target.value)}}
            label="Order Notes"
            placeholder="Notes about your order eg.special note for delivery"
            />
          </div>
            </div>
          </div>
         
          <div>
            <OrderSummary />
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Checkout;

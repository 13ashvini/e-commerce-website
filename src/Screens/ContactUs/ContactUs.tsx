import React from "react";
import ATMTextField from "../../Components/atoms/ATMFormFields/ATMTextField/ATMTextField";
import ATMTextArea from "../../Components/atoms/ATMFormFields/ATMTextArea/ATMTextArea";
import { FaAddressCard } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import {HiOutlineMail} from "react-icons/hi"
import Header from "../../Components/UI/Header";
import Footer from "../../Components/UI/Footer";
import { FormikProps } from "formik";
import { ContactInitialValues } from "./ContactUsWrapper";
type Props = {
  contactProps:FormikProps<ContactInitialValues>
};

const ContactUs = ({contactProps}: Props) => {
  const {values,setFieldValue}=contactProps
  return (
    <div className="flex flex-col gap-10">
      <div><Header/></div>
     <div className="flex flex-col gap-7 px-10">
     <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1544.569526629176!2d76.0453413014009!3d22.96399178020943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396317fbd4270045%3A0x8650fe6259ac12f7!2sDice%20Coder!5e0!3m2!1sen!2sin!4v1695108957905!5m2!1sen!2sin"
          width="100%"
          height="450"
          title="this is map"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="grid grid-cols-2  gap-10">
        <div className=" flex flex-col gap-4">
          <div className="text-[25px] font-bold">Tell Us Your Message</div>
          <div className="flex flex-col gap-5">
            <ATMTextField
              name="name"
              className="py-2"
              value={values?.name}
              required
              onChange={(e) => {setFieldValue("name",e.target.value)}}
              label="Your Name"
            />
            <ATMTextField
              name="email"
              className="py-2"
              required
              value={values?.email}
             onChange={(e) => {setFieldValue("email",e.target.value)}}
              label="Your Email"
            />
            <ATMTextField
              name="subject"
              className="py-2"
              value={values?.subject}
             onChange={(e) => {setFieldValue("subject",e.target.value)}}
              label="Subject"
            />
            <ATMTextArea
              name="message"
              className="py-2"
              value={values?.message}
             onChange={(e) => {setFieldValue("message",e.target.value)}}
              label="Message"
            />
            <button className="bg-[#363F4D] hover:text-white hover:bg-yellow-500 px-7 py-3 w-fit  text-white rounded"
            
                >
                  Save
                </button>
          </div>
        </div>
        <div className="bg-[#F2F2F2] px-10">
            <div className="flex flex-col gap-7 p-3">
                <div className="text-[27px] font-bold ">Contact Us</div>
                <p className="text-[16px] text-[#888888]">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-[27px] font-bold flex gap-3 items-center "><span><FaAddressCard/></span> Address</div>
                <p className="text-[16px] text-[#888888]">123 Main Street, Anytown, CA 12345 – USA</p>
            </div>
            <div className="flex flex-col gap-4 border-t border-gray-300 py-3">
                <div className="text-[27px] font-bold flex gap-3 items-center"><span><AiFillPhone/></span> Phone</div>
                <p className="text-[16px] text-[#888888]">
                    <div className="flex flex-col gap-5">
                    <span>Mobile: (08) 123 456 789</span>
                    <span>Hotline: 1009 678 456</span>
                    </div>
                </p>
            </div>
            <div className="flex flex-col gap-4 border-t border-gray-300 py-5">
                <div className="text-[27px] font-bold flex gap-3 items-center"><span><HiOutlineMail/></span> Email</div>
                <p className="text-[16px] text-[#888888]">
                    <div className="flex flex-col gap-5">
                    <span>yourmail@domain.com</span>
                    <span>support@hastech.company</span>
                    </div>
                </p>
            </div>
        </div>
      </div>
     </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;

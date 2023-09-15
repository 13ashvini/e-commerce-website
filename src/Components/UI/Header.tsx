import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ATMSelect from "../atoms/ATMFormFields/ATMSelect/ATMSelect";
import logo from "../../assests/Images/logo.jpg";
import { FaBitbucket, FaSearch } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import ATMInputAdormant from "../atoms/ATMFormFields/ATMInputAdormant/ATMInputAdormant";
import ATMAccordian from "../atoms/ATMAccordian/ATMAccordian";
import HomeCartComponent from "./HomeCartComponent";
import ATMOnClickAccordian from "../atoms/ATMOnClickAccordian/ATMOnClickAccordian";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [selectCurrency, setSelectCurrency] = useState("USD $");
  const [selectLanguage, setSelectLanguage] = useState("English");
  const [searchProduct, setSearchProduct] = useState("");
 const naviagte=useNavigate()
  const options = [
    {
      value: "USD $",
      label: "USD $",
    },
    {
      value: "EUR $",
      label: "EUR $",
    },
  ];
  const languageOption = [
    {
      value: "English",
      label: "🎌English",
    },
    {
      value: "Franch",
      label: "🎌 Franch",
    },
  ];
  return (
    <div className="">
      <div className="xl:flex xl:justify-between  md:flex md:justify-between  items-center px-10 py-1 border-b border-gray-200 bg-[#F8F9F9]">
        <div className="text-[#313554]">
          Telephone Enquiry:(+123) 123 321 345
        </div>
        <div className="flex lg:gap-5 sm:gap-1 md:gap-3 flex justify-center">
          {/* <div className="border-r border-gray-300 px-2 ">
            <Accordion
              style={{
                width: "100%",
                backgroundColor: "transparent",
                zIndex: 6,
                boxShadow: "none",
                padding: "0px 10px",
                maxHeight: 40,
                alignContent: "center",
              }}
            >
              <AccordionSummary
                expandIcon={<IoIosArrowDown />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h1>Setting</h1>
              </AccordionSummary>
              <AccordionDetails
                style={{ borderTop: "1px #FED700 solid", zIndex: 7 }}
              >
                <div className="flex flex-col gap-2">
                  <div className="hover:bg-[#FED700]  px-2 hover:text-[#FEE9BD]">
                    My Account
                  </div>
                  <div className="hover:bg-[#FED700]  px-2 hover:text-[#FEE9BD]">
                    Checkout{" "}
                  </div>

                  <div className="hover:bg-[#FED700]  px-2 hover:text-[#FEE9BD]">
                    Login
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div> */}
            <ATMOnClickAccordian title="setting"
            titleExtraClass=""
            className="flex gap-8 w-40 px-3 py-3"
            >
            <div className="flex flex-col gap-2 text-[#ADADAD] border-t border-yellow-500 ">
                  <div className="hover:bg-[#FED700]  px-2 hover:text-[#FEE9BD]"
                  onClick={()=>{naviagte("/login")}}
                  >
                    My Account
                  </div>
                  <div className="hover:bg-[#FED700]  px-2 hover:text-[#FEE9BD]">
                    Checkout
                  </div>

                  <div className="hover:bg-[#FED700]  px-2 hover:text-[#FEE9BD]">
                    Login
                  </div>
                </div>
            </ATMOnClickAccordian>
          <div className="border-r items-center  flex border-divider px-2">
            <span>Currency </span>:
            <ATMSelect
              className="bg-transparent focus:outline-0 focus:border-0"
              name=""
              value={selectCurrency}
              onChange={(e) => {
                setSelectCurrency(e.target.value);
              }}
              options={options}
            />
          </div>
          <div className="border-r items-center  flex">
            <span>Language </span>:
            <ATMSelect
              className="bg-transparent focus:outline-0 "
              name=""
              value={selectLanguage}
              onChange={(e) => {
                setSelectLanguage(e.target.value);
              }}
              options={languageOption}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-10 justify-between px-10 py-8">
        <div className="flex-1 flex gap-[100px] items-center">
          <div>
            <img src={logo} alt="logo"></img>
          </div>
          <div className="flex-1 flex border border-gray-300">
          <ATMSelect
              className="bg-transparent focus:outline-0 borde-0"
              name=""
              value={selectLanguage}
              onChange={(e) => {
                setSelectLanguage(e.target.value);
              }}
              options={languageOption}
            />
            <div className="flex-1 p-0 border-l border-divider">
            <ATMInputAdormant
              className="h-10 focus:outline-0 "
              placeholder="Enter Your Search Key........."
              adormant={<FaSearch />}
              adormantProps={{
                position: "end",
                extraClasses:
                  "bg-yellow-500 text-black hover:bg-black hover:text-white",
              }}
              name=""
              value={searchProduct}
              onChange={(e) => {
                setSearchProduct(e.target.value);
              }}
            />
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="border border-gray-300 items-center flex p-0 px-3 z-0 relative ">
            <span className="bg-yellow-500 text-[13px] rounded-full w-[18px] h-[18px] grid z-100 absolute top-[-3px] left-[-3px]  content-center px-1">
              0
            </span>
            <span>
              <AiOutlineHeart />
            </span>
          </div>
          <div className="border bg-[#E80F0F]  border-gray-300 items-center flex p-0 px-3 z-0 relative ">
            <span className="bg-yellow-500 text-[13px] rounded-full w-[18px] h-[18px] grid z-100 absolute top-[-3px] left-[-3px]  content-center px-1">
              0
            </span>
           
            <HomeCartComponent/>
          </div>
        </div>
      </div>
      {/* NAVIGATION BAR _________________________________________*/}
      <div className="bg-[#FED700] px-10 py-[18px] flex items-center">
        <ul className="flex gap-5  max-h-4 w-fit">
          {/* Home  */}
          <li>
            <ATMAccordian
              title="HOME"
              className="w-[300px] p-5"
              titleExtraClass="hover:text-white font-medium "
            >
              <ul className="flex  flex-col gap-3 ">
                <li className="hover:text-yellow-500 "> Home One</li>
                <li className="hover:text-yellow-500">Home Two</li>
                <li className="hover:text-yellow-500">Home Three</li>
                <li className="hover:text-yellow-500">Home Four</li>
              </ul>
            </ATMAccordian>
          </li>
          {/* SHOP  */}
          <li>
            <ATMAccordian
              title="SHOP"
              className="w-[800px]"
              titleExtraClass="hover:text-white font-medium "
            >
              <div className="flex gap-8 productMenu w-full h-full p-10">
                <div className="flex flex-col gap-3 border-r border-divider w-[300px] hover:text-yellow-500">
                  <div className="font-bold text-sm text-30px hover:text-yellow-500">
                    Shop Page Layout{" "}
                  </div>
                  <ul className="text-[#999999] flex flex-col gap-5 ">
                    <li>Shop 3 Column</li>
                    <li className="hover:text-yellow-500">Shop 4 Column</li>
                    <li className="hover:text-yellow-500">Shop Left Sidebar</li>
                    <li className="hover:text-yellow-500">
                      Shop Right Sidebar
                    </li>
                    <li className="hover:text-yellow-500">Shop List</li>
                    <li className="hover:text-yellow-500">
                      Shop List Left Sidebar
                    </li>
                    <li className="hover:text-yellow-500">
                      Shop List Right Sidebar
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3 border-r border-divider w-[300px] ">
                  <div className="font-bold text-sm text-30px hover:text-yellow-500">
                    Single Product Style{" "}
                  </div>
                  <ul className="text-[#999999] flex flex-col gap-5">
                    <li className="hover:text-yellow-500">
                      Single Product Carousel{" "}
                    </li>
                    <li className="hover:text-yellow-500">
                      Single Product Gallery Left{" "}
                    </li>
                    <li className="hover:text-yellow-500">
                      Single Product Gallery Right{" "}
                    </li>
                    <li className="hover:text-yellow-500">
                      Single Product Tab Style Top{" "}
                    </li>
                    <li className="hover:text-yellow-500">
                      Single Product Tab Style Left{" "}
                    </li>
                    <li className="hover:text-yellow-500">
                      Single Product Tab Style Right{" "}
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3 w-[300px] ">
                  <div className="font-bold text-sm text-30px hover:text-yellow-500">
                    single Product{" "}
                  </div>
                  <ul className="text-[#999999] flex flex-col gap-5 ">
                    <li className="hover:text-yellow-500">Single Product </li>
                    <li className="hover:text-yellow-500">
                      Single Product Sale{" "}
                    </li>
                    <li className="hover:text-yellow-500">
                      Single Product Group{" "}
                    </li>
                    <li className="hover:text-yellow-500">
                      Single Product Normal{" "}
                    </li>
                    <li className="hover:text-yellow-500">
                      Single Product Affiliate{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </ATMAccordian>
          </li>
          {/* Blog  */}
          <li>
            <ATMAccordian 
              title="BLOG"
              className="w-[300px] p-5"
              titleExtraClass="hover:text-white font-medium"
              
            >
              <ul className="flex  flex-col gap-3 ">
                <li className="hover:text-yellow-500 "> Blog Grid View</li>
                <li className="hover:text-yellow-500">Blog List View</li>
                <li className="hover:text-yellow-500">Blog Detail</li>
                <li className="hover:text-yellow-500">Blog Format</li>
              </ul>
            </ATMAccordian>
          </li>
          {/* PAGES */}
          <li>
            <ATMAccordian
              title="PAGES"
              className="w-[800px]"
              titleExtraClass="hover:text-white font-medium "
            >
              <div className="flex gap-8 productMenu w-full h-full p-10">
                <div className="flex flex-col gap-3 border-r border-divider w-[300px]">
                  <div className="font-bold text-sm text-30px hover:text-yellow-500">
                    Blog Layout
                  </div>
                  <ul className="text-[#999999] flex flex-col gap-5 ">
                    <li className="hover:text-yellow-500"> Blog 2 Column </li>
                    <li className="hover:text-yellow-500"> Blog 3 Column </li>
                    <li className="hover:text-yellow-500">
                      Grid Left Sidebar
                    </li>
                    <li className="hover:text-yellow-500">
                      Grid Right Sidebar
                    </li>
                    <li className="hover:text-yellow-500">Blog List</li>
                    <li className="hover:text-yellow-500">
                      List Left Sidebar
                    </li>
                    <li className="hover:text-yellow-500">
                      List Right Sidebar{" "}
                    </li>

                   
                  </ul>
                </div>
                <div className="flex flex-col gap-3 border-r border-divider w-[300px] ">
                  <div className="font-bold text-sm text-30px hover:text-yellow-500">
                    Blog Detail Pages
                  </div>
                  <ul className="text-[#999999] flex flex-col gap-5">
                    <li className="hover:text-yellow-500">Left Sidebar</li>
                    <li className="hover:text-yellow-500">Right Sidebar</li>
                    <li className="hover:text-yellow-500">Blog Audio Format</li>
                    <li className="hover:text-yellow-500">Blog Video Format</li>
                    <li className="hover:text-yellow-500">
                      Blog Gallery Format
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3 border-r border-divider w-[300px] ">
                  <div className="font-bold text-sm text-30px hover:text-yellow-500">
                    other Pages
                  </div>
                  <ul className="text-[#999999] flex flex-col gap-5 ">
                    <li className="hover:text-yellow-500">My Account</li>
                    <li className="hover:text-yellow-500">
                      Checkout
                    </li>
                    <li className="hover:text-yellow-500">
                      Compare
                    </li>
                    <li className="hover:text-yellow-500">
                      Wishlist
                    </li>
                    <li className="hover:text-yellow-500">
                      Shopping Cart
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3 w-[300px] ">
                  <div className="font-bold text-sm text-30px hover:text-yellow-500">
                    other Pages 2
                  </div>
                  <ul className="text-[#999999] flex flex-col gap-5 ">
                    <li className="hover:text-yellow-500">Contact</li>
                    <li className="hover:text-yellow-500">
                      About us
                    </li>
                    <li className="hover:text-yellow-500">
                      Faq
                    </li>
                    <li className="hover:text-yellow-500">
                      404 error
                    </li>
                    
                  </ul>
                </div>
              </div>
            </ATMAccordian>
          </li>
          <li className="hover:text-white font-medium">About US</li>
          <li className="hover:text-white font-medium">Contact</li>
          <li className="hover:text-white font-medium">SmartWatch</li>
          <li className="hover:text-white font-medium">Accessories</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

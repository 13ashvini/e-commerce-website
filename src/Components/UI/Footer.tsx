import React, { useState } from "react";
import shippingImage from "../../assests/Images/shipping.png";
import payment from "../../assests/Images/payment.png";
import confidenceImages from "../../assests/Images/confidence.png";
import helpcenterImage from "../../assests/Images/helpcenter.png";
import logoImage from "../../assests/Images/logo.jpg";
import { BiLogoGooglePlus } from "react-icons/bi";
import { TiSocialFacebook } from "react-icons/ti";
import { TfiYoutube } from "react-icons/tfi";
import { TbBrandInstagram } from "react-icons/tb";
import { LiaTwitter } from "react-icons/lia";
import { Tooltip } from "@mui/material";
import ATMInputAdormant from "../atoms/ATMFormFields/ATMInputAdormant/ATMInputAdormant";
import { MdOutlineRssFeed } from "react-icons/md";
import FooterPaymentImage from "../../assests/Images/footerPaymentImage.png";
const Footer = () => {
  const [AddNewsLetter, setNewsLetter] = useState("");
  return (
    <div className="p-10 w-full bg-[#F7F7F7] border-t border-gray-300">
      <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-2 border-b border-dashed border-gray-300 pt-6 pb-10 ">
        <div className=" flex flex-col gap-3 items-center">
          <img src={shippingImage} alt="Delivery" />
          <h1 className="font-medium">Free Dilvery</h1>
          <p className="text-[#888888] text-center">
            And free returns. See checkout for delivery dates.
          </p>
        </div>
        <div className=" flex flex-col gap-3 items-center">
          <img src={payment} alt="Delivery" />
          <h1 className="font-medium">Safe Payment</h1>
          <p className="text-[#888888] text-center">
            Pay with the world's most popular and secure payment methods.
          </p>
        </div>
        <div className=" flex flex-col gap-3 items-center">
          <img src={confidenceImages} alt="Delivery" />
          <h1 className="font-medium">Shop with Confidence</h1>
          <p className="text-[#888888] text-center">
            Our Buyer Protection covers your purchasefrom click to delivery.
          </p>
        </div>

        <div className=" flex flex-col gap-3 items-center">
          <img src={helpcenterImage} alt="Delivery" />
          <h1 className="font-medium">24/7 Help Center</h1>
          <p className="text-[#888888] text-center">
            Have a question? Call a Specialist or chat online.
          </p>
        </div>
      </div>
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 border-b border-dashed border-gray-300 py-12">
        <div className="text-[14px] flex flex-col gap-5">
          <div>
            <img src={logoImage} alt="logo " />
          </div>
          <p className="text-[#888888]">
            We are a team of designers and developers that create high quality
            HTML Template & Woocommerce, Shopify Theme.
          </p>
          <div className="text-[#888888] flex ">
            <span className="font-medium">ADDRESS</span>
            <span>:</span>
            <span className="hover:text-yellow-500">
              6688Princess Road, London, Greater London BAS 23JK, UK
            </span>
          </div>
          <div className="text-[#888888] flex gap-[3px]">
            <span className="font-medium">PHONE</span>
            <span>:</span>
            <span className="hover:text-yellow-500">(+123) 123 321 345</span>
          </div>
          <div className="text-[#888888] flex gap-[3px]">
            <span className="font-medium">EMAIL</span>
            <span>:</span>
            <span className="hover:text-yellow-500"> info@yourdomain.com</span>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className=" flex flex-col gap-4">
            <div className="text-[23px] font-bold">Product</div>
            <ul className="flex flex-col gap-3 text-[15px] text-[#888888]">
              <li>
                <a href="" className="hover:underline cursor-pointer">
                  Prices Drop
                </a>
              </li>
              <li>
                <a href="" className="hover:underline cursor-pointer">
                  New products
                </a>
              </li>
              <li>
                <a href="" className="hover:underline cursor-pointer">
                  Best sales
                </a>
              </li>
              <li>
                <a href="" className="hover:underline cursor-pointer">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className=" flex flex-col gap-4">
            <div className="text-[23px] font-bold">Our Company</div>
            <ul className="flex flex-col gap-3 text-[15px] text-[#888888]">
              <li>
                <a href="" className="hover:underline cursor-pointer">
                  Delivery
                </a>
              </li>
              <li>
                <a href="" className="hover:underline cursor-pointer">
                  Legal Notice
                </a>
              </li>
              <li>
                <a href="" className="hover:underline cursor-pointer">
                  About us
                </a>
              </li>
              <li>
                <a href="" className="hover:underline cursor-pointer">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="text-[23px] font-bold">Follows Up</div>
          <div className=" flex gap-3 text-[40px]">
            <Tooltip title="Twitter" placement="top-start" arrow>
              <span className="bg-[#40C1DF] text-white hover:bg-yellow-500">
                <a href="https://twitter.com/" className="cursor-pointer">
                  {" "}
                  <LiaTwitter />
                </a>
              </span>
            </Tooltip>
            <Tooltip title="Rss" placement="top-start" arrow>
              <span className="bg-[#F2A20C] text-white hover:bg-yellow-500">
                <a href="https://rss.com/" className="cursor-pointer">
                  {" "}
                  <MdOutlineRssFeed />
                </a>
              </span>
            </Tooltip>
            <Tooltip title="Google Plus" placement="top-start" arrow>
              <span className="bg-[#ED3C32] text-white hover:bg-yellow-500">
                <a
                  href="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html"
                  className="cursor-pointer"
                >
                  {" "}
                  <BiLogoGooglePlus />
                </a>
              </span>
            </Tooltip>
            <Tooltip title="Facebook" placement="top-start" arrow>
              <span className="bg-[#3C5B9B] text-white hover:bg-yellow-500">
                <a href="https://www.facebook.com/" className="cursor-pointer">
                  <TiSocialFacebook />{" "}
                </a>
              </span>
            </Tooltip>
            <Tooltip title="Youtube" placement="top-start" arrow>
              <span className="bg-[#C72982] text-white hover:bg-yellow-500">
                <a href="https://www.youtube.com/" className="cursor-pointer">
                  {" "}
                  <TfiYoutube />
                </a>
              </span>
            </Tooltip>
            <Tooltip title="Intagram" placement="top-start" arrow>
              <span className="bg-[#C619B8] text-white hover:bg-yellow-500">
                <a href="https://www.instagram.com/" className="cursor-pointer">
                  {" "}
                  <TbBrandInstagram />
                </a>
              </span>
            </Tooltip>
          </div>
          <div className="text-[23px] font-bold">Sign Up To Newsletter</div>
          <div>
            <ATMInputAdormant
              className="border border-gray-300 h-12 focus:border focus:border-gray-300"
              placeholder="Enter Your Email"
              adormant="Subscribe"
              adormantProps={{
                position: "end",
                extraClasses:
                  "bg-yellow-500 text-black hover:bg-black hover:text-white",
              }}
              name=""
              value={AddNewsLetter}
              onChange={(e) => {
                setNewsLetter(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="p-10 flex flex-col gap-5 items-center">
          <ul className="flex justify-center text-[#888888] 	flex-wrap">
            <li>
              <a
                href="file:///C:/Users/Hp/Downloads/limupa-digital-products-store-ecommerce%20(5)/limupa-digital-products-store-ecommerce/index.html"
                className="cursor-pointer hover:underline"
              >
                Online{" "}
              </a>
            </li>{" "}
            <span>/</span>
            <li>
              <a
                href="file:///C:/Users/Hp/Downloads/limupa-digital-products-store-ecommerce%20(5)/limupa-digital-products-store-ecommerce/index.html"
                className="cursor-pointer hover:underline"
              >
                {" "}
                Shopping{" "}
              </a>
            </li>
            <span>/</span>
            <li>
              <a
                href="file:///C:/Users/Hp/Downloads/limupa-digital-products-store-ecommerce%20(5)/limupa-digital-products-store-ecommerce/index.html"
                className="cursor-pointer hover:underline"
              >
                {" "}
                Promotions{" "}
              </a>
            </li>
            <span>/</span>
            <li>
              <a
                href="file:///C:/Users/Hp/Downloads/limupa-digital-products-store-ecommerce%20(5)/limupa-digital-products-store-ecommerce/index.html"
                className="cursor-pointer hover:underline"
              >
                {" "}
                My Orders{" "}
              </a>
            </li>
            <span>/</span>
            <li>
              <a
                href="file:///C:/Users/Hp/Downloads/limupa-digital-products-store-ecommerce%20(5)/limupa-digital-products-store-ecommerce/index.html"
                className="cursor-pointer hover:underline"
              >
                {" "}
                Help{" "}
              </a>
            </li>
            <span>/</span>
            <li>
              <a
                href="file:///C:/Users/Hp/Downloads/limupa-digital-products-store-ecommerce%20(5)/limupa-digital-products-store-ecommerce/index.html"
                className="cursor-pointer hover:underline"
              >
                {" "}
                Customer Service{" "}
              </a>
            </li>
            <span>/</span>
            <li>
              <a
                href="file:///C:/Users/Hp/Downloads/limupa-digital-products-store-ecommerce%20(5)/limupa-digital-products-store-ecommerce/index.html"
                className="cursor-pointer hover:underline"
              >
                Support{" "}
              </a>
            </li>
            <span>/</span>
            <li>
              <a
                href="file:///C:/Users/Hp/Downloads/limupa-digital-products-store-ecommerce%20(5)/limupa-digital-products-store-ecommerce/index.html"
                className="cursor-pointer hover:underline"
              >
                Most Popular{" "}
              </a>
            </li>{" "}
            <span>/</span>
            <li>
              <a
                href="file:///C:/Users/Hp/Downloads/limupa-digital-products-store-ecommerce%20(5)/limupa-digital-products-store-ecommerce/index.html"
                className="cursor-pointer hover:underline"
              >
                New Arrivals{" "}
              </a>
            </li>{" "}
            <span>/</span>
            <li>
              <a
                href="file:///C:/Users/Hp/Downloads/limupa-digital-products-store-ecommerce%20(5)/limupa-digital-products-store-ecommerce/index.html"
                className="cursor-pointer hover:underline"
              >
                Speaial Product{" "}
              </a>
            </li>{" "}
            <span>/</span>
            <li>
              <a
                href="file:///C:/Users/Hp/Downloads/limupa-digital-products-store-ecommerce%20(5)/limupa-digital-products-store-ecommerce/index.html"
                className="cursor-pointer hover:underline"
              >
                Manufacture{" "}
              </a>
            </li>{" "}
            <span>/</span>
            <li>
              <a
                href="file:///C:/Users/Hp/Downloads/limupa-digital-products-store-ecommerce%20(5)/limupa-digital-products-store-ecommerce/index.html"
                className="cursor-pointer hover:underline"
              >
                Our Store{" "}
              </a>
            </li>{" "}
            <span>/</span>
            <li>
              <a
                href="file:///C:/Users/Hp/Downloads/limupa-digital-products-store-ecommerce%20(5)/limupa-digital-products-store-ecommerce/index.html"
                className="cursor-pointer hover:underline"
              >
                Shipping{" "}
              </a>
            </li>{" "}
            <span>/</span>
            <li>
              <a
                href="file:///C:/Users/Hp/Downloads/limupa-digital-products-store-ecommerce%20(5)/limupa-digital-products-store-ecommerce/index.html"
                className="cursor-pointer hover:underline"
              >
                Payment{" "}
              </a>
            </li>{" "}
            <span>/</span>
            <li>
              <a
                href="file:///C:/Users/Hp/Downloads/limupa-digital-products-store-ecommerce%20(5)/limupa-digital-products-store-ecommerce/index.html"
                className="cursor-pointer hover:underline"
              >
                Warentee{" "}
              </a>
            </li>{" "}
            <span>/</span>
            <li>
              <a
                href="file:///C:/Users/Hp/Downloads/limupa-digital-products-store-ecommerce%20(5)/limupa-digital-products-store-ecommerce/index.html"
                className="cursor-pointer hover:underline"
              >
                Refunds{" "}
              </a>
            </li>{" "}
            <span>/</span>
            <li>
              <a
                href="file:///C:/Users/Hp/Downloads/limupa-digital-products-store-ecommerce%20(5)/limupa-digital-products-store-ecommerce/index.html"
                className="cursor-pointer hover:underline"
              >
                Checkout{" "}
              </a>
            </li>{" "}
            <span>/</span>
            <li>
              <a
                href="file:///C:/Users/Hp/Downloads/limupa-digital-products-store-ecommerce%20(5)/limupa-digital-products-store-ecommerce/index.html"
                className="cursor-pointer hover:underline"
              >
                Discount{" "}
              </a>
            </li>{" "}
            <span>/</span>
            <li>
              <a
                href="file:///C:/Users/Hp/Downloads/limupa-digital-products-store-ecommerce%20(5)/limupa-digital-products-store-ecommerce/index.html"
                className="cursor-pointer hover:underline"
              >
                Refunds{" "}
              </a>
            </li>{" "}
            <span>/</span>
            <li>
              <a
                href="file:///C:/Users/Hp/Downloads/limupa-digital-products-store-ecommerce%20(5)/limupa-digital-products-store-ecommerce/index.html"
                className="cursor-pointer hover:underline"
              >
                Policy Shipping{" "}
              </a>
            </li>{" "}
            <span>/</span>
          </ul>
          <div>
            <img src={FooterPaymentImage} alt="" />
          </div>
          <div className="text-[#888888] hover:text-yellow-500">
            Template Hub
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

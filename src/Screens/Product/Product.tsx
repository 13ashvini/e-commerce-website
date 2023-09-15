import React,{useState} from "react";
import product1 from "../../assests/Images/largerProduct1.jpg";
import Header from "../../Components/UI/Header";
import Footer from "../../Components/UI/Footer";
import ATMSelect from "../../Components/atoms/ATMFormFields/ATMSelect/ATMSelect";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiOutlineEdit, AiOutlineHeart } from "react-icons/ai";
import {LuArrowRightLeft, LuCheckSquare} from "react-icons/lu"
import {CiDeliveryTruck} from "react-icons/ci"
import { ProductListResponse } from "../../model/Product.model";
import ImageGallery from "react-image-gallery";
import { RootState } from "../../redux/store";
import { addToCart } from "../../redux/Slice/CartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import "react-image-gallery/styles/css/image-gallery.css";
type Props = {
  productDetail:ProductListResponse 
};

const Product = ({productDetail}: Props) => {
  const navigate=useNavigate()
    const [selectDimension,setSelectDimension]=useState("40x60cm")
  //  const {cart}=((state:RootState)=>(state.cart))
   const dispatch=useDispatch()
  return (
    <div>
      <Header />
      <div className="flex gap-8 px-10 py-3 w-full  h-full">
        <div className="">
          <img src={productDetail?.images[0] ||""} alt="" className="flex items-center w-full" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 border-b border-gray-300 py-5">
            <div className="text-blue-400 text-[20px] font-medium">
              
              {productDetail?.title ||""}
            </div>
            <div className="text-[14px] text-[#888888]">Reference: demo_15</div>
            <div className="text-[14px] text-[#888888] flex gap-1">
             <span className="flex gap-1 items-center"><AiOutlineEdit/></span> Read Review   <span className="flex gap-1 items-center"><span><AiOutlineEdit/></span>Write Review</span>
            </div>
            <div className="text-[20px] font-medium text-red-500">{productDetail?.price ||  ""}</div>
            <p className="text-[14px] text-[#888888]">
              {productDetail?.description ||""}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[14px] text-[#888888]">Dimesion</div>
            <ATMSelect
              className="flex w-fit"
              value={selectDimension}
              onChange={(e) => {setSelectDimension(e.target.value)}}
              options={[
                { label: "40x60cm", value: "40x60cm" },
                { label: "40x80cm", value: "40x80cm" },
                { label: "40x100cm", value: "40x100cm" },
              ]}
              name=""
            />
          </div>
          <div className="">
            <div>
              <div className="text-[18px] font-medium text-[#88888]">
                Quantity
              </div>
              <div className="flex gap-3">
                <div className="flex">
                  <span className="border border-gray-300 px-3 py-2 flex items-center">
                    1
                  </span>
                  <span className="flex-col flex">
                    <span className="border border-gray-300  flex p-[3px] items-center">
                      <MdKeyboardArrowUp />
                    </span>
                    <span className="border border-gray-300 p-[3px] flex items-center">
                      <MdKeyboardArrowDown />
                    </span>
                  </span>
                </div>

                <div>
                  <button className="hover:bg-[#363F4D] hover:text-white bg-yellow-500 px-7 py-3 w-fit  text-white rounded"
                  onClick={()=>{navigate("/cart") ;dispatch(addToCart(productDetail))}}
                  >
                    Add to Cart
                  </button>
                </div>
                <div>
                  <button className="bg-[#363F4D] text-white hover:bg-yellow-500 px-7 py-3 w-fit   hover:text-white rounded">
                   Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex text-[#888888] items-center gap-3 text-[14px]">
            <span>
              <AiOutlineHeart />
            </span>{" "}
            <span>Add To Wishlist</span>
          </div>
          <div className="flex flex-col gap-3 text-[#888888]">
          <div className="border-b border-gray-300 py-4 flex gap-3 items-center"><span><LuCheckSquare/></span>Security policy (edit with Customer reassurance module)</div>

          <div className="border-b border-gray-300 py-4 flex items-center gap-3"><span><CiDeliveryTruck/></span>Delivery policy (edit with Customer reassurance module)</div>

          <div  className="py-4 flex items-center gap-3"><span><LuArrowRightLeft/></span>Return policy (edit with Customer reassurance module)</div>
        </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Product;

// import React from 'react'

// const CategoryProductListCard = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default CategoryProductListCard
import { IoMdStarOutline } from "react-icons/io";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
type Props = {
  productImage: string;
  productRating?: string;
  productName: string;
  productPrice: string;
  isLoading?:boolean
  buttontitle:string
  buttonOnClick:(e:any)=>void
};

const CategoryProductListCard = ({
  productImage,
  productName,
  productPrice,
  productRating,
  isLoading,
  buttontitle,
  buttonOnClick
}: Props) => {
  return (
    <div className="w-full   hover:shadow-lg hover:rounded-lg h-full p-3 group flex flex-col gap-5 hover:bg-white">
       {!isLoading ?
        <div className="flex  gap-6">
        <div className="flex gap-5">
      <div className="relative ">
        <div className="py-[12px] px-2 bg-blue-800 w-fit rounded-full absolute left-[170px] text-white ">
          New
        </div>
        <img src={productImage} alt="" className="w-[200px] h-[200px]"/>
      </div>
      <div>
        <div>
        <div className="flex justify-between items-center gap-5 py-3 border-b border-gray-300">
            <div className="text-[#888888] text-[16px]">Graphic user</div>
        <div className="text-[13px] font-medium text-gray-500 ">
          {productRating}
        </div>
        <div className="flex ">
          <span className="text-yellow-300">
            <IoMdStarOutline />
          </span>
          <span className="text-yellow-300">
            <IoMdStarOutline />
          </span>
          <span className="text-yellow-300">
            <IoMdStarOutline />
          </span>
          <span className="text-gray-400">
            <IoMdStarOutline />
          </span>
          <span className="text-gray-400">
            <IoMdStarOutline />
          </span>
        </div>
      </div>
        </div>
     <div className="text-[13px] text-[#0363CD] font-bold hover:underline py-2">
        {productName}
      </div>
      <span className="text-[13px] text-[#E81616] font-bold">
        {" "}
        {productPrice}
      </span>
      <div className="text-[#888888] text-[16px]">
      Beach Camera Exclusive Bundle - Includes Two Samsung Radiant 360 R3 Wi-Fi Bluetooth Speakers. Fill The Entire Room With Exquisite Sound via Ring Radiator Technology. Stream And Control R3 Speakers Wirelessly With Your Smartphone. Sophisticated, Modern Desig
      </div>
     </div>
     <div className="w-[450px] h-full bg-[#F7F7F7] p-10 flex flex-col gap-5">
        <div>
            <button className="bg-gray-200 text-[#898989] border hover:bg-yellow-500 hover:text-white border-gray-400">Add to Cart</button>
        </div>
        <div>
            <button className=" text-[#898989] hover:text-black">Add to Wishlist</button>
        </div>
        <div>
            <button className=" text-[#898989] hover:text-black">Quick View</button>
        </div>
     </div>
     </div>
      
       </div>:
       <div className="animate-pulse shadow rounded-md p-4 w-full h-full ">
  <div className="animate-pulse flex flex-col gap-3">
    <div className=" bg-slate-200 h-[140px] w-[140px] flex justify-center"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-200 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-200 rounded col-span-2"></div>
          <div className="h-2 bg-slate-200 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-200 rounded"></div>
      </div>
    </div>
  </div>
</div>}
    </div>
   
  );
};

export default CategoryProductListCard;

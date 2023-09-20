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

const ProductsCard = ({
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
       {!isLoading ? <div>
        <div>
      <div className="relative ">
        <div className="py-[12px] px-2 bg-blue-800 w-fit rounded-full absolute right-0 text-white ">
          New
        </div>
        <img src={productImage} alt="" className="w-[170px] h-[170px] "/>
      </div>
      <div className="flex justify-between">
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
      
      <div className="text-[13px] text-[#0363CD] font-bold hover:underline py-2">
        {productName}
      </div>
      <span className="text-[13px] text-[#E81616] font-bold">
        {" "}
        {productPrice}
      </span>
     </div>
      <div className=" flex pb-5 bg-white w-full gap-2 transition transform invisible translate-y-0 ease-out  group-hover:visible group-hover:translate-y-5">
        <button className="bg-[#F7F7F7] font-bold border hover:bg-yellow-500 py-[6px] flex items-center rounded-sm px-5 border-gray-300  text-[12px] rounded"
        onClick={buttonOnClick}
        >
        {buttontitle}
        </button>
        <div className="bg-[#F7F7F7] border hover:bg-yellow-500 border-gray-300 rounded-sm  text-gray-600 px-3 flex items-center">
         <span> <AiOutlineHeart /></span>
        </div>
        <div className="bg-[#F7F7F7] border hover:bg-yellow-500 border-gray-300 rounded-sm text-gray-600 px-3 flex items-center">
          <span><AiOutlineEye /></span>
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

export default ProductsCard;

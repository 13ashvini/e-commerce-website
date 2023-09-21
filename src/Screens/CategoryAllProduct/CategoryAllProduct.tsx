import React,{useState} from "react";
import Header from "../../Components/UI/Header";
import CategoryBanner from "../../assests/Images/categoryPageBanner.jpg";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdTableRows } from "react-icons/md";
import { ProductListResponse } from "../../model/Product.model";
import ProductsCard from "../../Components/mlolecules/ProductsCard";
import ATMTransactionPagination from "../../Components/atoms/ATMPagination/ATMPagination";
import CategoryProductCards from "../../Components/mlolecules/CategoryProductcard";
import CategoryProductListCard from "../../Components/mlolecules/CategoryProductListCard";
type Props = {
  productsData: ProductListResponse[] | [];
  pagination: {
    page: number;
    count: number;
    onChange: (value: any) => void;
  };
};

const CategoryAllProduct = ({
  productsData,
  pagination: { page, count, onChange },
}: Props) => {
    const [isShowGrid,setisShowGrid]=useState(true)
   
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="bg-[#F6F6F6]">
        {" "}
        <h1 className="py-4 px-10 ">
          Home<span className="text-gray-400 "> /category/All Product</span>
        </h1>
      </div>
      <div className="flex flex-col gap-5 px-10 py-3">
        <div>
          <img src={CategoryBanner} alt="" className="w-full h-full" />
        </div>
        <div className="flex justify-between p-5 border border-gray-300 items-ceter">
          <div className="flex gap-3 text-[25px] items-center">
            <div>
              <BsFillGrid3X3GapFill
              onClick={()=>{setisShowGrid(true)}} 
               />
            </div>
            <div onClick={()=>{setisShowGrid(false)}}>
              <MdTableRows />
            </div>
          </div>
          <div className="text-[15px] text-[#888888]">Sort By:</div>
        </div>
       {isShowGrid?  <div className="grid grid-cols-4">
          {productsData?.map((product: any) => {
            return (
              <div key={product?.id}>
                <CategoryProductCards
                  buttonOnClick={() => {}}
                  buttontitle="Add to Cart"
                  productImage={product?.images[0] || ""}
                  productName={product?.title || ""}
                  productPrice={product?.price || ""}
                />
              </div>
            );
          })}
        </div>:
       <div className="">
       {productsData?.map((product: any) => {
         return (
           <div key={product?.id}>
             <CategoryProductListCard
               buttonOnClick={() => {}}
               buttontitle="Add to Cart"
               productImage={product?.images[0] || ""}
               productName={product?.title || ""}
               productPrice={product?.price || ""}
             />
           </div>
         );
       })}
     </div>
        }
        <div>
          <ATMTransactionPagination
            page={page}
            count={count}
            onPageChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryAllProduct;

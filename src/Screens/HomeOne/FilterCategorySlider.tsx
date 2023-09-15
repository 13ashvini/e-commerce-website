// import React from 'react'

// const FilterCategorySlider = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default FilterCategorySlider
import React, { useEffect, useState } from "react";
import ProductsCard from "../../Components/mlolecules/ProductsCard";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setIsLoading, setItems } from "../../redux/Slice/CategorySlice";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useFilterCategoryQuery } from "../../Service/CategoryService";
import { useNavigate } from "react-router-dom";

type Props = {
  categoryId: any;
};

const FilterCategorySlider = ({ categoryId }: Props) => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [isLoading, setIsLoading] = useState(true);
  const [productCategory, setProductsCategory] = useState<any>([]);
    // const {items,isLoading,isError}=useSelector((state:RootState)=>(state.category))
    const {data:category,isLoading:isCategoryLoading,isFetching:isCategoryFetching}=useFilterCategoryQuery(categoryId) 
  console.log(category, "productsData");
  console.log("itmesssss",productCategory)
  //PRODUCT BY CATEGORY
  useEffect(() => {
    if (!isCategoryLoading || !isCategoryFetching) {
       setProductsCategory(category || [])
       setIsLoading(false)
    } else {
       setIsLoading(isLoading)
     }
  }, [
    isCategoryLoading,
    isCategoryFetching,
    category,
  ]);
  const settings = {

    arrow:true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    prevArrow: <MdKeyboardArrowLeft />, // Optionally customize previous arrow
    nextArrow: <MdKeyboardArrowRight />, // Optionally customize next arrow
  
  };
  return (
    <div>
       <div className="flex px-5 ">
           <Slider {...settings} className="w-full h-[300px]">
             {productCategory.map((product:any) => {
               return (
                    <div className="flex"
                   key={product?.id} onClick={()=>{navigate(`/singleProduct/${product.id}`)}}
                   >
                     <ProductsCard
                       productImage={product?.images[0]}
                       productPrice={product?.price}
                       productName={product?.title}
                       productRating={product?.productRating}
                     />
                   </div>
                 
               );
             })}
              </Slider>
           </div>
    </div>
  );
};

export default FilterCategorySlider;

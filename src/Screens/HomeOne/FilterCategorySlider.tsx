import React, { useEffect, useState } from "react";
import ProductsCard from "../../Components/mlolecules/ProductsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useFilterCategoryQuery } from "../../Service/CategoryService";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/Slice/CartSlice";

type Props = {
  categoryId: any;
};

const FilterCategorySlider = ({ categoryId }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [productCategory, setProductsCategory] = useState<any>([]);
  const { cart } = useSelector((state: RootState) => state.cart);
  const {
    data: category,
    isLoading: isCategoryLoading,
    isFetching: isCategoryFetching,
  } = useFilterCategoryQuery(categoryId);
  const handleAddToCart = (product: any) => {
    const isProductInCart = cart.some((item: any) => item?.id === product?.id);
    if (product) {
      if (!isProductInCart) {
        dispatch(addToCart(product));
      }
      navigate("/cart");
    }
  };
  //PRODUCT BY CATEGORY
  useEffect(() => {
    if (!isCategoryLoading || !isCategoryFetching) {
      setProductsCategory(category || []);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [isCategoryLoading, isCategoryFetching, category]);

  const settings = {
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    prevArrow: <MdKeyboardArrowLeft />, 
    nextArrow: <MdKeyboardArrowRight />, 
  };
  return (
    <div>
     {isLoading? 
     <div className="grid grid-cols-4 gap-3">{
      Array(4).fill(0).map((index=>{
        return<div className="">
          <div className="animate-pulse shadow rounded-md p-4 w-full h-[250px] ">
        <div className="animate-pulse flex  gap-3">
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
        </div>
        </div>
       }))
      }</div>
     :
      <div className="flex px-5 ">
        <Slider {...settings} className="w-full h-[300px]">
          {productCategory.map((product: any) => {
            return (
              <div
                className="flex"
                key={product?.id}
                onClick={() => {
                  navigate(`/singleProduct/${product.id}`);
                }}
              >
                <ProductsCard
                  productImage={product?.images[0]}
                  productPrice={product?.price}
                  productName={product?.title}
                  productRating={product?.productRating}
                  buttonOnClick={(e: any) => {
                    handleAddToCart(product);
                    e.stopPropagation();
                  }}
                  buttontitle={"Add to Cart"}
                  isLoading={isLoading}
                />
              </div>
            );
          })}
        </Slider>
      </div>}
    </div>
  );
};

export default FilterCategorySlider;

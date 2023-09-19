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
      </div>
    </div>
  );
};

export default FilterCategorySlider;

import React, { useState } from "react";
import Header from "../../Components/UI/Header";
import CarouselSlider from "../../Components/UI/CarouselSlider";
import Footer from "../../Components/UI/Footer";
import ProductsCard from "../../Components/mlolecules/ProductsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import homeMobileBanner from "../../assests/Images/homeMobileBanner.jpg";
import homeElectroicsBanner from "../../assests/Images/homeElectronicBanner.jpg";
import homeBanner from "../../assests/Images/home-banner.jpg";
import FilterCategorySlider from "./FilterCategorySlider";
type ProductsProps = {
  images: string[];
  productRating: string;
  title: string;
  price: string;
};
type ElectronicProductsProps = {
  images: string[];
  productRating: string;
  title: string;
  price: string;
};
type Props = {
  productsData: ProductsProps[];
  categoryData: any[];
  electronicData?: ElectronicProductsProps[];
  isLoading?: boolean;
};

const HomeOne = ({
  productsData,
  isLoading,
  electronicData,
  categoryData,
}: Props) => {
  const [activeTab, setActiveTab] = useState("newArrival");
  console.log("data", categoryData);
  console.log("data1", categoryData[0]);
  console.log("data2", categoryData[1]);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
  const settings = {
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    prevArrow: <MdKeyboardArrowLeft />, // Optionally customize previous arrow
    nextArrow: <MdKeyboardArrowRight />, // Optionally customize next arrow
  };

  return (
    <div>
      <Header />
      <CarouselSlider />
      <div className="flex gap-5 px-10 text-[#8F918F] text-[25px] font-medium border-b border-gray-300 py-4">
        <div
          className="border-r border-divider px-5 hover:text-black"
          onClick={() => handleTabClick("newArrival")}
        >
          New Arrival
        </div>
        <div
          className={`border-r border-divider px-5 hover:text-black ${
            activeTab === "bestSeller" && "border-b border-yellow-500"
          }`}
          onClick={() => handleTabClick("bestSeller")}
        >
          Bestseller
        </div>
        <div
          className="hover:text-black"
          onClick={() => handleTabClick("featured")}
        >
          Featured Products
        </div>
      </div>
      {activeTab === "newArrival" && (
        <div>
          {categoryData.map((el, index) => {
            return (
              <div className="px-10 py-4">
                <div className="hover:text-black text-[25px] font-medium text-[#888888]">
                  {el.name}
                </div>

                <div>
                  <FilterCategorySlider categoryId={el?.id} />
                </div>
                {index === 0 && (
                  <div className="grid lg:grid-cols-3 sm:grid-cols-1  gap-3  px-[60px] py-3">
                    <div>
                      <img src={homeMobileBanner} alt="" />
                    </div>
                    <div>
                      <img src={homeElectroicsBanner} alt="" />
                    </div>
                    <div>
                      <img src={homeMobileBanner} alt="" />
                    </div>
                  </div>
                )}
                {index===2 && <div className="px-10 py-5 border-border-gray-200 ">
<div className="home-banner-bg w-full h-full flex flex-col gap-8 p-10 items-start">
  <div>
<div>Sale Offer<span className="text-red-500 ">-20% Off</span>This Week</div>
<div className="text-[40px] font-normal flex flex-col gap-0" ><div>Featured Product<br/>
Meito Accessories 2018</div></div>
<div>Starting at <span className="text-red-500 text-[30px] font-medium">$1209.00</span></div>
</div>
<div>
<button className="bg-[#363F4D] hover:text-white bg-yellow-500 p-5 py-2 w-fit  hover:bg-gray-700 rounded-sm">
            SHOPPING NOW
          </button>
</div>
</div>
</div>}
              </div>
            );
          })}
        </div>
      )}
      {activeTab === "bestSeller" && (
        <div>
          {/* {categories.map((el:any) => {
          return (
            <div>
              <div>{el.name}</div>
              <div>
                {" "}
                <FilterCategorySlider categoryId={el.id} />
              </div>
            </div>
          );
        })} */}
          {/* <div className="flex px-10 ">
           <Slider {...settings} className="w-full h-[300px]">
             {productsData?.map((product) => {
               return (
               
                   <div className="flex" 
                   style={{
                     
                   }}
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
           </div> */}
        </div>
      )}
      {activeTab === "featured" && (
        <div>
          <div className="flex px-10 ">
            <Slider {...settings} className="w-full h-[300px]">
              {productsData?.map((product) => {
                return (
                  <div className="flex" style={{}}>
                    <ProductsCard
                    buttonOnClick={()=>{}}
                    buttontitle="Add to Cart"
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
      )}
<Footer />
    </div>
  );
};

export default HomeOne;

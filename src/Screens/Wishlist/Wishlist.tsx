
import React from "react";
import Header from "../../Components/UI/Header";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decQnty, incQnty, removeFromCart } from "../../redux/Slice/CartSlice";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import emptyCart from "../../assests/Images/emptycart.png";
import { useNavigate } from "react-router-dom";
import { removeFromWishlist } from "../../redux/Slice/WishlistSlice";
import Footer from "../../Components/UI/Footer";
type Props = {};
const Wishlist = (props: Props) => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const {items:wishlist}=useSelector((state:RootState)=>(state.wishlist))
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
 const handleAddToCart = (product:any) => {
    const isProductInCart = cart.some((item: any) => item?.id === product?.id);
    if (product) {
      if (!isProductInCart) {
        dispatch(addToCart(product));
      }
      navigate("/cart");
      console.log("prod",product)
    }
  };

  return (
    <div>
      <div>
       <Header/>
      </div>
      <h1 className="py-4 px-2 ">
        Home<span className="text-gray-400 "> /single Product</span>
      </h1>
      {wishlist?.length > 0 ? (
        <div className="flex flex-col px-10">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="flex flex-col gap-5 min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full border border-gray-300 text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500 bg-[#F6F6F6]">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Remove
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Images
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Unit Price
                      </th>
                      <th scope="col" className="px-6 py-4">
                       Add to Cart
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {wishlist?.map((item:any, index:any) => {
                      return (
                        <tr className="border border-gray-300" key={item.id}>
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            <button
                              onClick={() => dispatch(removeFromWishlist(item.id))}
                              className="flex items-center text-[20px] font-bold"
                            >
                              <RxCross2 />
                            </button>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-bold "  
                          onClick={()=>{navigate(`/singleProduct/${item?.id}`)}}
                          >
                            {item.images && item?.images.length > 0 ? (
                              <img
                                src={item?.images[0]}
                                alt={`Item ${index + 1} `}
                                className="w-[100px]"
                              />
                            ) : (
                              "No Images Available"
                            )}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-gray-400 font-medium text-[16px]">
                            {item?.title || ""}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-bold">
                            ${item?.price || ""}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-bold">
                          <div>
                  <button className="hover:bg-[#363F4D] hover:text-white bg-yellow-500 px-7 py-3 w-fit  text-white rounded"
                  onClick={()=>{handleAddToCart(item);console.log("aaaaaaaaaa")} }
                  >
                   Add to Cart
                  </button>
                </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              
            </div>
          </div>
        </div>
      ) : (
        <div className="text-[24px] flex items-center flex-col gap-5">
          <img src={emptyCart} alt="" className="flex" />
          <div className="font-bold text-[25px]">There is no item in your Wishlist !</div>
          <div>
            <button
              className="bg-[#363F4D] text-white hover:bg-yellow-500 px-7 py-1 w-fit   hover:text-white rounded"
              onClick={() => {
                navigate("/");
              }}
            >
              Shop Now
            </button>
          </div>
        </div>
      )}
      <div><Footer/></div>
    </div>
  );
};

export default Wishlist;

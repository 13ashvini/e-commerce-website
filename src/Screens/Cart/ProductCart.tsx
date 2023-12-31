import React from "react";
import Header from "../../Components/UI/Header";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { decQnty, incQnty, removeFromCart } from "../../redux/Slice/CartSlice";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import emptyCart from "../../assests/Images/emptycart.png";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/UI/Footer";
type Props = {};
const ProductCart = (props: Props) => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getCartSummary = ()=>{
    return cart.reduce((acc, el)=>{
      return acc + (el.price*el.qnty)
    }, 0)
    
  }

  return (
    <div>
      <div>
        {" "}
        <Header />
      </div>
      <h1 className="py-4 px-2 ">
        Home<span className="text-gray-400 "> /single Product</span>
      </h1>
      {cart?.length > 0 ? (
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
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Total
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {cart?.map((item, index) => {
                      return (
                        <tr className="border border-gray-300" key={item.id}>
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            <button
                              onClick={() => dispatch(removeFromCart(item.id))}
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

                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="flex">
                              <span className="border border-gray-300 px-3 py-2 flex items-center">
                                {item?.qnty || ""}
                              </span>
                              <span className="flex-col flex">
                                <span
                                  className="border border-gray-300  flex p-[3px] items-center"
                                  onClick={() => {
                                    dispatch(incQnty(item?.id));
                                  }}
                                >
                                  <MdKeyboardArrowUp />
                                </span>
                                <span
                                  className="border border-gray-300 p-[3px] flex items-center"
                                  onClick={() => {
                                    dispatch(decQnty(item?.id));
                                  }}
                                >
                                  <MdKeyboardArrowDown />
                                </span>
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-bold">
                            ${item?.price * item?.qnty || ""}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col gap-5 justify-center">
                <div className="text-[30px] font-bold"> Cart Totals</div>
                <div className="border border-gray-300 font-medium md:w-[400px] lg:w-[400px] sm:w-full">
                  <div className="flex justify-between p-3 border-b border-divider">
                    <span>Subtotal</span>
                    <span>${getCartSummary()}</span>
                  </div>
                  <div className="flex justify-between p-3">
                    <span>Total</span>
                    <span>${getCartSummary()}</span>
                  </div>
                </div>
                <div>
                  <button
                    className="bg-[#363F4D] text-white hover:bg-yellow-500 px-7 py-2 w-fit   hover:text-white rounded"
                    >
                   Checkout Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-[24px] flex items-center flex-col gap-5">
          <img src={emptyCart} alt="" className="flex" />
          <div className="font-bold text-[25px]">Your Cart is Empty!</div>
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

export default ProductCart;

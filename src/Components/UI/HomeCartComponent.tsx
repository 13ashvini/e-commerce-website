// import React from 'react'

// const HomeCartComponent = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default HomeCartComponent
import React, { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import {TfiShoppingCartFull} from 'react-icons/tfi'
import {RxCross2} from 'react-icons/rx'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
type Props ={
    images:string[];
    title:string;
    price:string;
}
type AddcardType={
    cardProductData:Props[];
}

const HomeCartComponent= ({cardProductData}:AddcardType) => {
  const [isOpen, setIsOpen] = useState(false);
  const {cart}=useSelector((state:RootState)=>(state.cart))
 const navigate=useNavigate()
  const toggleCard = () => {
    setIsOpen(!isOpen);
  };
  const getCartSummary = ()=>{
    return cart.reduce((acc, el)=>{
      return acc + (el.price*el.qnty)
    }, 0)
    
  }
  return (
    <div className="">
      <button onClick={toggleCard}  className='bg-[#e6070e] flex gap-1 p-[8px] text-white font-medium rounded items-end '>
      <div className='border-r-[1px] p-1'><TfiShoppingCartFull/></div>
    <div className=''>£{getCartSummary()}</div>
 <div className='pt-1'>   {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</div>
      </button>
      {isOpen && (
        <div  className={` absolute bg-white shadow-md border border-gray-200 rounded-lg w-[300px] p-3 `}
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            zIndex: 10,
            transition: 'opacity 0.3s ease-in-out',
          }}
          >
            
            <div>
                {cardProductData?.map((items)=>{
                    return(
                        <>
                        <div className='flex items-center gap-3 bg-white p-4  border-b-[1px]'>
                <div className='border-[1px] w-fit flex hover:border-[#FED700]'><img src={items.images[0]} alt='#' className='w-[50px] h-[50px]' /></div>
             <div>
             <div className='text-[14px] hover:text-[#FED700] '>{items.title}</div>
                <div> {items.price}</div>
             </div>
             <div  className='text-[14px] font-medium pl-4 hover:text-[#FED700] '> <RxCross2/></div>
            </div>
                        </>
                    )
                })}
            </div>
           
      <div className='p-2'>
      <div className='font-medium text-gray-600 flex justify-between py-2'>
                <div className='text-[15px] '>SUBTOTAL:</div>
                <div className='text-[17px] '>£{getCartSummary()}</div>
            </div>
            
                <div className='pb-2'>
                <button className='bg-[#1b241e] text-[14px] font-medium hover:bg-[#FED700] text-white w-full py-3'
                onClick={()=>{navigate("/cart")}}
                > VIEW FULL CARD</button>
                </div>
                <button className='hover:bg-[#1b241e] text-[14px] font-medium bg-[#FED700] text-white w-full py-3' onClick={()=>{navigate("/checkout")}}>Checkout</button>
           
        </div>
      </div>
      
      )}
    </div>
  );
};

export default HomeCartComponent;
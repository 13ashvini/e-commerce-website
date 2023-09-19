import React from 'react'
import ATMOnClickAccordian from '../../Components/atoms/ATMOnClickAccordian/ATMOnClickAccordian'
import ATMCollapse from '../../Components/atoms/ATMCollapse/ATMCollapse'

type Props = {}

const OrderSummary = (props: Props) => {
    
  return (
    <div className='bg-[#F2F2F2]  p-4 flex flex-col gap-5'>
     <div className="border-b border-gray-300 py-3 text-[25px] font-bold">YOUR ORDER</div>
    <div>
        <div className="p-3 flex justify-between border-b border-gray-300 bg-[#F6F6F6] text-gray-500">
            <div>PRODUCT</div>
            <div>TOTAL</div>
        </div>
        <div className="p-3 flex justify-between border-b border-gray-300  text-gray-500">
            <div>Vestibulum suscipit × 1</div>
            <div>£165.00</div>
        </div>
        <div className="p-3 flex justify-between border-b border-gray-300  text-gray-500">
            <div>Vestibulum</div>
            <div>£165.00</div>
        </div>
        <div className="p-3 flex justify-between border-b border-gray-300  text-gray-500">
            <div>CART SUBTOTAL</div>
            <div>£215.00</div>
        </div>
        <div className="p-3 flex justify-between border-b border-gray-300  text-gray-500">
            <div>ORDER TOTAL</div>
            <div>£215.00</div>
        </div>
    </div>
    <div className='flex flex-col gap-2'>
        <div><ATMCollapse
        title='Direct Bank Transfer .'
        titleExtraClass='text-[#363F4D]py-1 text-[20px] font-bold   hover:text-yellow-500'
        
        >
            <p className='text-[14px] text-[#363F4D]'>
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
            </ATMCollapse></div>
  
   
        <div><ATMCollapse
        title='Cheque Payment'
        titleExtraClass='text-[#363F4D]py-1 text-[20px] font-bold   hover:text-yellow-500'
        >
            <p className='text-[14px] text-[#363F4D]'>
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
            </ATMCollapse></div>
   
    
        <div><ATMCollapse
        title='PayPal'
        titleExtraClass='text-[#363F4D]py-1 text-[20px] font-bold   hover:text-yellow-500'
        >
            <p className='text-[14px] text-[#363F4D]'>
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
            </ATMCollapse></div>
            </div>
    <div>
    <button className="bg-[#363F4D]  text-white hover:bg-yellow-500 px-3 py-[6px] w-full rounded-none   hover:text-white rounded">
              PLACE ORDER
            </button>
    </div>
  </div>
  )
}

export default OrderSummary
import React from 'react'
import ATMTable from '../../Components/atoms/ATMTable/ATMTable';
import Header from '../../Components/UI/Header';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

type Props = {}
const columns = [
   
    {
      label: 'Remove',
      key: 'Actions',
      render: () => {
        return (
          <div className='flex gap-3'>
           Remove
          </div>
        );
      },
    },
    {
        label: 'Images',
        key: 'Actions',
        render: ( row: any) => {
          return (
            <div className='flex gap-3'>
             <img src={row?.images[0]}  alt=""></img> 
            </div>
          );
        },
      },
      {
        label: 'Product',
        key: 'Actions',
        render: ( rows: any) => {
          return (
            <div className='flex gap-3'>
             {rows?.title}
            </div>
          );
        },
      },
      {
        label: 'Price',
        key: 'Actions',
        render: ( row: any) => {
          return (
            <div className='flex gap-3'>
            {row?.qnty}
            </div>
          );
        },
      },

  ];
  
  const rows = [
    {
      Date: '2023-09-15',
      Description: 'Withdrawal',
      Mail: 'john@example.com',
    },
    {
      Date: '2023-09-16',
      Description: 'Deposit',
      Mail: 'jane@example.com',
    },
    // Add more rows as needed
  ];
const ProductCart = (props: Props) => {
    const {cart}=useSelector((state:RootState)=>(state.cart)) 
//   const {items,isLoading,isError}=useSelector((state:RootState)=>(state.categories))

  return (
    <div><div>ProductCart</div>
        <div>  <ATMTable columns={columns} rows={cart} /></div>
        <div>
      <Header/>
<div>
        {cart.map((item:any)=>{
          return(<div key={item.id} className='d-flex justify-between'>
           <img src={item?.images[0]} width="150px" alt=""></img>
           <h3>{item.title}</h3>
           <div>
            <button>-</button>
            <label>{item.qnty}</label>
            <button >+</button>
            </div>
           <p>{item.price*item.qnty}</p>
          </div>)
        })}
      </div>
      <div>
        <h1>Cart Total </h1>
        <table>
            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
        </table>
        <div>

        </div>
      </div>
    </div>

    </div>
    
  )
}

export default ProductCart
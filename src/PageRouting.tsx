import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import HomeOneWrapper from './Screens/HomeOne/HomeOneWrapper'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import MyAccount from './Screens/MyAccount/MyAccount'
import ProductWrapper from './Screens/Product/ProductWrapper'
import ProductCart from './Screens/Cart/ProductCart'
import Wishlist from './Screens/Wishlist/Wishlist'
import CheckoutWrapper from './Screens/Checkout/CheckoutWrapper'
import ContactUsWrapper from './Screens/ContactUs/ContactUsWrapper'
import CategoryAllProduct from './Screens/CategoryAllProduct/CategoryAllProduct'
import CategoryAllProductWrapper from './Screens/CategoryAllProduct/CategoryAllProductWrapper'

const PageRouting = () => {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<HomeOneWrapper/>}></Route>
         <Route path="/login" element={<MyAccount/>}/>
         <Route path="/singleProduct/:productId" element={<ProductWrapper/>}/>
         <Route path="/cart" element={<ProductCart/>}/>
         <Route path="/wishlist" element={<Wishlist/>}/>
         <Route path="/checkout" element={<CheckoutWrapper/>}/>
         <Route path="/contact-us" element={<ContactUsWrapper/>}/>
         <Route path="/category/:products" element={<CategoryAllProductWrapper/>}/>

 </Routes>
      </BrowserRouter>
       
      </Provider>
    </div>
  )
}

export default PageRouting

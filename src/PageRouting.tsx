import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import HomeOneWrapper from './Screens/HomeOne/HomeOneWrapper'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import LoginWrapper from './Screens/Login/LoginWrapper'
import RegisterWrapper from './Screens/Register/RegisterWrapper'
import MyAccount from './Screens/MyAccount/MyAccount'
import Product from './Screens/Product/Product'
import ProductWrapper from './Screens/Product/ProductWrapper'
import ProductCart from './Screens/Cart/ProductCart'

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
        </Routes>
      </BrowserRouter>
       
      </Provider>
    </div>
  )
}

export default PageRouting

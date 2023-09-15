import React from 'react'
import Footer from '../../Components/UI/Footer'
import Header from '../../Components/UI/Header'
import LoginWrapper from '../Login/LoginWrapper'
import RegisterWrapper from '../Register/RegisterWrapper'

const MyAccount = () => {
  return (
    <div>
        <Header/>
        <div className='grid  lg:grid-cols-2 gap-7 p-8 z-0'>
           <LoginWrapper/>
           <RegisterWrapper/> 
        </div>
      <Footer/>
      
    </div>
  )
}

export default MyAccount

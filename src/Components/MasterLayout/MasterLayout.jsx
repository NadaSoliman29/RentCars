import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'

export default function MasterLayout() {

    const location =useLocation();
  const hideLayoutFor = ['/details' ,"/showallcars"]; // pages without navbar/footer

  const shouldHideLayout = hideLayoutFor.includes(location.pathname);
  return (
    <>
     <div className=' container-fluid px-0'>
   
     
  {!shouldHideLayout && <Home/>}
      <Outlet />
      {!shouldHideLayout && <Footer />}
    </div>
    
    </>
  )
}

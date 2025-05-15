import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import ContactsUs from './Components/ContactsUs/ContactsUs'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MasterLayout from './Components/MasterLayout/MasterLayout'
import NotFound from './Components/NotFound/NotFound'
import RentDeatils from './Components/RentDeatils/RentDeatils'
import Work from './Components/Work/Work'
import CarDetails from './Components/CarDetails/CarDetails'
import ShowAll from './Components/ShowAllCars/ShowAll'
import Chooseus from './Components/ChooseUs/Chooseus'
import Testimonials from './Components/Testimonials/Testimonials'


function App() {
  const routes = createBrowserRouter ([
    {
      path: "/" ,element: <MasterLayout/> ,
           errorElement: <NotFound/> ,
     children : [ 
     {index : true  , element:(<>
     <RentDeatils/>,
            <Work />,
            <Chooseus/>,
            <Testimonials/>,
            <ContactsUs />,
            
            
     </>
    )
     },
  {path: "/details" , element:<CarDetails/>},
  {path: "/showallcars" , element:<ShowAll/>},

     ]
     
     }
     
     
  ]);

  return (
    <>
  <RouterProvider router={routes}></RouterProvider> 

  
    </>
  )
}

export default App

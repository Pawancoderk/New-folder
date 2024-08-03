import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
// Step 4
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
    {/* Header and Footer content are same but with the help of Outlet we can load data dynamically */}
    <Header/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default Layout
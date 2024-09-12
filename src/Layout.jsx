import React from 'react'
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from './components/Navbar'




function Layout() {
  return (
    <>

    <ResponsiveAppBar/>
    <Outlet/>


    </>
    
  )
}

export default Layout
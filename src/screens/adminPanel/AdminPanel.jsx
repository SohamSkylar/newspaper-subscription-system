import React from 'react'
import Sidebar from './components/Sidebar'
import ManagePartners from './components/ManagePartners'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import Comp3 from './components/Comp3'
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const AdminPanel = () => {
  return (
    <div>
    <div className='flex'>
      <Sidebar/>
    </div>
      <div name="first">
        <Comp1/>
      </div>
      <div name="second">
        <Comp2/>
      </div>
      <div name="third">
        <Comp3/>
      </div>
      {/* <ManagePartners/> */}
      </div>
      
    

  )

}

export default AdminPanel
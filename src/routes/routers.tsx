import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/HomePage/Homepage'
import NewLink from '../pages/newLink'
function Routers() {
  return (
    <Routes>
         
        <Route path="/" element={<Homepage/>} />
        
        <Route path='newLink' element={<NewLink/>} />
        
        
     </Routes>
    
  )
}

export default Routers
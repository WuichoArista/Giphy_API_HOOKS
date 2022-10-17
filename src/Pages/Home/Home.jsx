import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = ( {input} ) => {

    
  return (

    
    <div>
      <h1>Giphy</h1>
       <Outlet />
    </div>
    
    
  )
}

export default Home
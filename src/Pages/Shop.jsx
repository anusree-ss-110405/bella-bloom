import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
const Shop = () => {
  return (
    <div style={{ backgroundColor:'#f0f5f5' }}>
      <Hero/> 
      <Popular/>
      <Offers/>
    </div>
  )
}

export default Shop

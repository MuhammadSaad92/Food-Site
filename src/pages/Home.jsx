import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'
const home = () => {
  return (
    <>
    <Navbar />
    <CategoryMenu />
    <FoodItems />
    <Cart />
    </>
  )
}

export default home
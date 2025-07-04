import React from 'react'
import { images } from '../assets/images'

export const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 z-50 md:p-9 p-3'>
        <img src={images.NavLogo} alt="" className='md:w-24 w-20'/>
    </nav>
  )
}

import { Heart, Search, ShoppingCart, User } from 'lucide-react'
import React from 'react'
import logo from "../assets/Logo.png"

function Navbar() {
  return (
    <div className='border-b-2 h-[88px] px-40'>
        <div className='h-full py-2 flex justify-between items-center'>
            <div><img src={logo} alt="" /></div>
            <div className='w-[372px] h-[56px] flex'>
                <div className='border-2 w-full h-full flex gap-2 items-center p-4 rounded-lg'>
                    <div>
                        <Search />    
                    </div>search
                </div>
            </div>
            <div className=''>
                <ul className='flex gap-6'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div>
                <ul className='flex gap-6'>
                    <li><Heart /></li>
                    <li><ShoppingCart /></li>
                    <li><User /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
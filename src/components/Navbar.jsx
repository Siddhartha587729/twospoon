import { Heart, Search, ShoppingCart, User } from 'lucide-react'
import React from 'react'
import logo from "../assets/Logo.png"

function Navbar() {
  return (
    <div className='border-b-2 h-[88px] px-40'>
        <div className='h-full py-2 flex justify-between items-center'>
            <div><img src={logo} alt="" /></div>
            <div className='w-[372px] h-[56px] flex'>
                <div className='w-full h-full flex gap-2 bg-[#F5F5F5] items-center p-4 rounded-lg text-gray-400'>
                    <div>
                        <Search />    
                    </div>search
                </div>
            </div>
            <div className='w-[370px] text-gray-400 text-base font-semibold'>
                <ul className=' w-full flex gap-6 justify-around'>
                    <li className='text-black font-bold '>Home</li>
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
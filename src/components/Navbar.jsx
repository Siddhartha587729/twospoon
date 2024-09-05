import { Heart, MenuIcon, Search, ShoppingCart, User } from 'lucide-react';
import { Menu } from '@headlessui/react'; 
import React from 'react';
import logo from '../assets/Logo.png';

function Navbar() {
  return (
    <div className='border-b-2 h-[88px] px-6 md:px-10 lg:px-40'>
      <div className='h-full py-2 flex justify-between items-center'>
        <div>
            <a href="/">
                <img src={logo} alt='Logo' className='h-8 md:h-10 hover:cursor-pointer' />
            </a>
        </div>

        <div className='hidden lg:flex w-[372px] h-[56px]'>
            <div className='w-full h-full flex gap-2 bg-[#F5F5F5] items-center p-4 rounded-lg'>
                <div>
                <Search color='rgb(156 163 175)'/>
                </div>
                <input
                type='text'
                placeholder='Search'
                className='w-full bg-transparent text-gray-400 focus:outline-none'
                />
            </div>
        </div>


        <div className='hidden lg:flex w-[370px] text-gray-400 text-base font-semibold'>
          <ul className='w-full flex md:gap-4 lg:gap-4 xl:gap-6 justify-around'>
            <li className='text-black font-bold'>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className='flex items-center lg:hidden'>
          <Menu as='div' className='relative inline-block text-left'>
            <Menu.Button className='inline-flex justify-center w-full text-sm font-medium text-gray-700'>
              <span className='material-icons'><MenuIcon /></span>
            </Menu.Button>

            <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none'>
              <div className='p-2'>
                <Menu.Item>
                  {({ active }) => (
                    <button className={`${active ? 'bg-gray-100' : ''} group flex rounded-md items-center w-full px-2 py-2 text-sm text-gray-900 hover:cursor-pointer`}>
                      <div>
                        <Search color='rgb(156 163 175)'/>
                      </div>
                      <input
                      type='text'
                      placeholder='Search'
                      className='w-full bg-transparent text-gray-400 focus:outline-none'
                      />
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button className={`${active ? 'bg-gray-100' : ''} group flex rounded-md items-center w-full px-2 py-2 text-sm text-gray-900 hover:cursor-pointer`}>
                      Home
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button className={`${active ? 'bg-gray-100' : ''} group flex rounded-md items-center w-full px-2 py-2 text-sm text-gray-900 hover:cursor-pointer`}>
                      About
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button className={`${active ? 'bg-gray-100' : ''} group flex rounded-md items-center w-full px-2 py-2 text-sm text-gray-900 hover:cursor-pointer`}>
                      Contact Us
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button className={`${active ? 'bg-gray-100' : ''} group flex rounded-md items-center w-full px-2 py-2 text-sm text-gray-900 hover:cursor-pointer`}>
                      Blog
                    </button>
                  )}
                </Menu.Item>
                <div className='flex justify-around mt-2'>
                  <Heart />
                  <ShoppingCart />
                  <User />
                </div>
              </div>
            </Menu.Items>
          </Menu>
        </div>

        <div className='hidden lg:flex'>
          <ul className='flex gap-6'>
            <li className='hover:cursor-pointer hover:scale-110'>
              <Heart />
            </li>
            <li className='hover:cursor-pointer hover:scale-110'>
              <ShoppingCart />
            </li>
            <li className='hover:cursor-pointer hover:scale-110'>
              <User />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

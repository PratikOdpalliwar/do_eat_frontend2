// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css';
import logo from '../../assets/2.jpeg';

const Header = () => {
  return (
    <div className='relative header h-full'>
      <div className='h-screen w-full'>
        <img src={logo} alt="" className='h-full w-full object-cover' />
      </div>
      <div className="header-contents absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-[20px]">Order your favourite food here</h2>
        <button className="mt-10 bg-white text-black px-4 py-2 rounded-lg "><a href="#explore-menu">View Menu</a></button>
      </div>
    </div>
  );
}

export default Header;
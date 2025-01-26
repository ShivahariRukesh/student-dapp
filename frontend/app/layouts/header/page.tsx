import React from 'react'

const Header = () => {
  return (
    <div className='w-[100%] border-red-200 rounded-b-xl  h-[10vh] bg-red-600 p-5'>
         <div className="text-2xl font-semibold">
        MyWebsite
      </div>

      <div className="hidden md:flex space-x-8">
        <a href="#home" className="hover:text-gray-200 transition-colors">
          Home
        </a>
        <a href="#about" className="hover:text-gray-200 transition-colors">
          About
        </a>
        <a href="#services" className="hover:text-gray-200 transition-colors">
          Services
        </a>
        <a href="#contact" className="hover:text-gray-200 transition-colors">
          Contact
        </a>
      </div>

      <div className="md:hidden">
        <button className="text-2xl">
          &#9776;
        </button>
      </div>
    </div>
  )
}

export default Header;
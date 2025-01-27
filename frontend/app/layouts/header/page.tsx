import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <div className='w-[100%] border-red-200 rounded-b-xl  h-[10vh] bg-red-600 p-5'>
         <div className="text-2xl font-semibold text-white">
        Student DApp
      </div>

      <div className="hidden md:flex space-x-8">
        <Link href={"/"} className="text-xl mt-2  border-black rounded-t-xl  hover:text-gray-200 hover:bg-black p-4 transition-colors">Home</Link>

       

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
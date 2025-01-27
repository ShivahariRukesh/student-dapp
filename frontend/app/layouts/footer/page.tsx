import React from 'react'

const Footer = () => {
  return (
    <div className='bottom-0 w-[100%] border-red-200 rounded-t-xl h-[10vh] bg-gray-400'>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">

        <div className="text-center text-black md:text-left">
          <p>&copy; 2025 StudentDAPP. All rights reserved.</p>
        </div>

        <div className="flex space-x-6 mt-4 md:mt-[10px]">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-white transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-white transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-white transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
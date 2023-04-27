import React from 'react'
import freehitlogo from '../images/freehitLogo.png'

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <nav className="shadow bg-gradient-to-tr from-indigo-900 to-indigo-900">
        <div className="flex justify-between items-center py-6 px-10 container mx-auto">
          <div className="flex">
            <div className="h-12 w-12 mx-2">
              <img src={freehitlogo} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-tr from-indigo-500 to-green-400 bg-clip-text text-transparent hover:cursor-pointer">
              Free-Hit
            </h1>
          </div>
          <input
            type="text"
            className=" bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-64 mr-2 p-2"
            placeholder="Search for a tool or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div>
            <div className="hover:cursor-pointer sm:hidden">
              <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
              <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
              <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
            </div>
            <div className="flex items-center">
              <ul className="sm:flex space-x-4 hidden items-center">
                <li>
                  <a
                    href="/"
                    className="text-gray-200  hover:text-indigo-200 text-md"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-200  hover:text-indigo-200 text-md"
                  >
                    About
                  </a>
                </li>
              </ul>

              {/* <div className="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
                <h1 className="text-text-gray-600  py-2 hover:cursor-pointer hover:text-indigo-600">
                  LOGIN
                </h1>
                <h1 className="text-text-gray-600  py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600 hover:shadow-lg">
                  SIGNUP
                </h1>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header

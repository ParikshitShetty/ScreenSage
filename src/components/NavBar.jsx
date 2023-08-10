import React from 'react'
import Search from '../utilities/Search'


const NavBar = () => {
  return (
    <>

    <nav className="bg-white border-gray-200 dark:bg-gray-900 md:w-full w-auto h-20">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <Search></Search>
        </div>
    </div>
    </nav>

    </>
  )
}

export default NavBar
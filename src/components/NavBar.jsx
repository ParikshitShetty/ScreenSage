import React, { useState } from 'react'
import Search from '../utilities/Search'
import { useNavigate } from 'react-router-dom'


const NavBar = () => {
  const [link,setLink] = useState([
    {name : 'Home', link : '/'},
    {name : 'Movies', link: '/movies' },
    {name : 'TV Shows',link : '/series'},
    {name : 'Anime',link : '/anime'}
    ]);

    const  navigator = useNavigate();

  return (
    <>
    <nav className="bg-white border-gray-200 bg-gradient-to-b dark:bg-neutral-950 h-20 opacity-70">
      <div className=" flex flex-row items-center justify-around ">
          {/* <div className="hidden md:block mx-4 my-4" id="navbar-default">
              <Search/>
          </div> */}
          <div className='flex justify-evenly items-center mx-4 my-4 '>
              {link.map((element,index)=>(
                <li className='inline-flex text-lg cursor-pointer dark:text-gray-50 hover:text-blue-600 mx-4' key={index} onClick={()=>navigator(element.link)}>{element.name}</li>
              ))}
          </div>
          <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

          </div>
      </div>
    </nav>
    </>
  )
}
export default NavBar
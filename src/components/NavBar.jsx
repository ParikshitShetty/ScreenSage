import React, { useState } from 'react'
import Search from '../utilities/Search'
import { useNavigate } from 'react-router-dom'


const NavBar = () => {
  const [link,setLink] = useState([
    {name : 'Home', link : '/'},
    {name : 'Movies', link: '/movies' },
    {name : 'TV Shows',link : '/series'},
    {name : 'Anime',link : '/anime'}
    ])

    const  navigator = useNavigate();

  return (
    <>
    <nav className="bg-white border-gray-200 bg-gradient-to-b dark:from-neutral-700 dark:to-neutral-900 md:w-[96rem] h-20 opacity-70">
    <div className=" flex flex-row items-center">
        <div className="hidden w-full md:block mx-4 my-4" id="navbar-default">
            <Search/>
        </div>
        <div className='flex flex-row justify-evenly w-[48rem]'>
            {link.map((element,index)=>(
              <li className='inline-flex text-lg cursor-pointer dark:text-gray-50 hover:text-blue-600' key={index} onClick={()=>navigator(element.link)}>{element.name}</li>
            ))}
        </div>
    </div>
    </nav>
    </>
  )
}

export default NavBar
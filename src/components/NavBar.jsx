import React, { useState } from 'react'
import Search from '../utilities/Search'
import { useNavigate } from 'react-router-dom'


const NavBar = () => {
  const [link,setLink] = useState([
    {name : 'Home', link : '/'},
    {name : 'Movies', link: '/movies' },
    {name : 'Series',link : '/series'},
    ])

    const  navigator = useNavigate();

  return (
    <>
    <nav className="bg-white border-gray-200 dark:bg-gray-900 md:w-[96rem] h-20">
    <div className=" flex flex-row items-center w-[48rem">
        <div className="hidden w-full md:block mx-4 my-4" id="navbar-default">
            <Search></Search>
        </div>
        <div className='flex flex-row justify-evenly w-[48rem]'>
            {link.map((element)=>(
              <li className='inline-flex text-lg' onClick={()=>navigator(element.link)}>{element.name}</li>
            ))}
        </div>
    </div>
    </nav>
    </>
  )
}

export default NavBar
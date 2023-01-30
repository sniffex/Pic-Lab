import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from'react-icons/ai'
import Search from './Search';
// import Search from './Search';
const NavLog = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center h-24 w-full mx-auto px-4 text-gray-900'>
        <h1 className='w-full text-3xl font-bold text-blue-700'><a href='/' className='no-underline'>PicLab.</a></h1>
        <div className='md:w-full hidden lg:block '><Search/></div>
        <ul className='hidden md:flex items-center mt-2'>
            <a className='no-underline text-gray-900' href='/'><li className='p-4 hover:text-blue-600'>Home</li></a>
            <li className='p-4 hover:text-blue-600'>Service</li>
            <a className='no-underline text-gray-900' href='/aboutus'><li className='p-4 hover:text-blue-600'>About</li></a>
            <a className='no-underline text-gray-900' href='/cart'><li className='p-4 hover:text-blue-600'>Cart</li></a>
        </ul>
        <div onClick={handleNav} className='md:hidden block'>
            {!nav ?<AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        <div className={!nav ?'md:hidden fixed left-0 top-0 w-[80%] h-full border-b border-b-gray-400 border-r border-r-gray-400 bg-white ease-in-out duration-500 ' : 'fixed left-{-100%} hidden'}>
        <h1 className='w-full text-3xl  font-bold text-blue-600 ml-5s'>PicLab.</h1>
        <Search/>
            <ul className='p-4 uppercase'>
                <a className='no-underline text-gray-900' href='/'><li className='p-4 hover:text-blue-600'>Home</li></a>
                <li className='p-4 hover:text-blue-600'>Service</li>
                <a className='no-underline text-gray-900' href='/aboutus'><li className='p-4 hover:text-blue-600'>About</li></a>
                <a className='no-underline text-gray-900' href='/cart'><li className='p-4 hover:text-blue-600'>Cart</li></a>
            </ul>
        </div>  
        </div>
    </div>
  )
};

export default NavLog

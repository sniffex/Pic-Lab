import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from'react-icons/ai'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1280px] mx-auto px-4 text-gray-900'>
        <h1 className='w-full text-3xl font-bold text-blue-700'><a href='/' className='no-underline'>PicLab.</a></h1>
        <ul className='hidden md:flex w-full'>
            <li className='p-4 hover:text-blue-600'>Home</li>
            <li className='p-4 hover:text-blue-600'>Service</li>
            <li className='p-4 hover:text-blue-600'>About</li>
            <li className='p-4 hover:text-blue-600'>Cart</li>
            <a className='no-underline text-white hover:text-gray-200 hover:bg-blue-800 bg-blue-600 rounded px-2' href='/login'><li className='p-4'>Log In</li></a>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ?<AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        <div className={!nav ?'md:hidden fixed left-0 top-0 w-[80%] h-[70%] border-b border-b-gray-400 border-r border-r-gray-400 bg-white ease-in-out duration-500 ' : 'fixed left-{-100%} hidden'}>
        <h1 className='w-full text-3xl font-bold text-blue-600 m-5'>PicLab.</h1>
            <ul className='p-4 uppercase'>
                <li className='p-4 hover:text-blue-600'>Home</li>
                <li className='p-4 hover:text-blue-600'>Service</li>
                <li className='p-4 hover:text-blue-600'>About</li>
                <li className='p-4 hover:text-blue-600'>Cart</li>
                <a className='no-underline text-blue' href='/login'><li className='p-4'>Log In</li></a>
            </ul>
        </div>  
        </div>
    </div>
  )
};

export default Navbar

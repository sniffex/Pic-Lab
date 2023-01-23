import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from'react-icons/ai'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-gray-900'>
        <h1 className='w-full text-3xl font-bold text-blue-700'>PicLab.</h1>
        <ul className='hidden md:flex '>
            <li className='p-4'>Home</li>
            <li className='p-4'>Service</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Cart</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ?<AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        <div className={!nav ? 'md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'fixed left-{-100%} hidden'}>
        <h1 className='w-full text-3xl font-bold text-blue-700 m-4'>PicLab.</h1>
            <ul className='p-4 uppercase'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Service</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Cart</li>
            </ul>
        </div>
        </div>
    </div>
  )
};

export default Navbar

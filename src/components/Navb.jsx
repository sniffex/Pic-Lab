// import React, { useState } from 'react'
// import Button from './Button';
// import { DiAtom } from "react-icons/di";
// import { BsList } from "react-icons/bs";
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     let Links =[
//       {name:"HOME",link:"/"},
//       {name:"SERVICE",link:"/"},
//       {name:"ABOUT",link:"/"},
//       {name:"CONTACT",link:"/"},
//     ];
//     let [open,setOpen]=useState(false);
//   return (
//     <nav className='shadow-md w-full fixed top-0 left-0'>
//             <div className='md:flex items-center justify-between bg-white py-2 md:px-10 px-7'>
//             <div href="/" className='font-bold text-2xl cursor-pointer flex items-center  text-gray-800 '>
            
//                 <span className='text-3xl text-indigo-600 mr-1 pt-1'>
//                     <DiAtom size="2rem" />
//                 </span>
//                 PICLAB
//             </div>
            
//             <div onClick={()=>setOpen(!open)}  className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden'>
//                 <BsList name={open? 'close':''} className='hover:text-cyan-600 rounded-md' size="2rem"/></div>
//             <ul className={`md:flex md:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 2xl:pr-28 xl:pr-0 lg:pr-0 md:pr-0
//                             w-full lg:w-auto lg:pl-1 pl-9 transition-all duration-500 ease-in
//                             ${open ? 'top-10':'top-[-490px]'} `}>
//                 <div className='lg:mt-5 mt-10'>
//                 <div className="flex justify-start">
//                 <div className="xl:w-96">
//                 <div class="input-group relative w-full flex flex-row items-stretch">
//                     <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search.." required/>
//                     <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                         <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
//                             <span class="sr-only">Search</span>
//                     </button>
//                 </div>
//                 </div>
//                 </div>
//                 </div>            
//                 {
//                     Links.map((link)=>(
//                         <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
//                             <a href={link.link} className='no-underline text-gray-800 text-lg  border-0 rounded-xl px-1 hover:bg-gray-200 duration-500'>{link.name}</a>
//                         </li>
//                     ))
//                 }
//                 <div className="flex flex-row gap-1">
//                 <Link to="/login"><Button>Log In</Button></Link>
//                 <Link to="/signup"><Button>Sign Up</Button></Link>
//                 </div>
//             </ul>
         

//             </div>
//         </nav>
//   )
// }

// export default Navbar;
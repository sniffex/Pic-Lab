// import React, { useState } from 'react';
// import logo from '../Assets/logo.jpg';

// const Carousel = () => {
//     return (
//         <>
//         <section class="bg-gray-200 py-4">
//             <div class="grid max-w-screen-xl h-full mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
//                 <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
//                     <img className="w-full h-80 object-cover" src={logo} alt="mockup"/>
//                 </div> 
//                 <div class="ml-auto place-self-center lg:col-span-7">
//                     <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900">Work hard for picture quailty</h1>
//                     <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From unkown to become global famous photograhper, photograhper around the world use their camera to shoot for their payment stack.</p>
//                     <a href="/" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
//                         Check
//                     </a> 
//                 </div>              
//             </div>
//         </section>
//         </>
//     );
// };
                   
// export default Carousel;
import React from 'react';
import Typed from 'react-typed';

const Carousel = () => {
  return (
    <div className='text-black'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Work Hard for Quality Picture.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, quality picture for
          </p>
          <Typed
          className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2'
            strings={['Designer', 'PhotoGrapher', 'Geek']}
            typeSpeed={140}
            backSpeed={160}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>From unknoqn to become gloabl famous photograhper, using their camera to shoot for payment stack.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Carousel;
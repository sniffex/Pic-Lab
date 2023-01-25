import React from 'react';
// import Typed from 'react-typed';

const Carousel = () => {
  return (
    <div className='text-black bg-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Work Hard for Quality Picture.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, quality picture for
          </p>
          {/* <Typed
          className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2'
            strings={['Designer', 'PhotoGrapher', 'Geek']}
            typeSpeed={140}
            backSpeed={160}
            loop
          /> */}
        </div>
        <p className='md:text-2xl text-base font-bold text-gray-500'>From unknown to become globally famous photograhper, using their camera to shoot for payment stack.</p>
        <button className='bg-blue-600 hover:bg-blue-800 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
      </div>
    </div>
  );
};

export default Carousel;
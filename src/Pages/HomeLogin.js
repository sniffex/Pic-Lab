import React from 'react';
import NavLog from '../components/NavLog';
import PicList from '../components/PicList';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

const Home = () => {
    return (
        <>
        <NavLog/>
        <main>
            <div>
            <Carousel />
            </div>

           <div className='w-md pt-20 2xl:px-40 xl:px-0 lg:px-0 md:px-0 sm:px-0'>
           <h2 className="text-2xl font-bold tracking-tight text-gray-900 px-4">Product</h2>
           <PicList /> 
           </div>

           {/* <div className='w-md pt-16 2xl:px-40 xl:px-0 lg:px-0 md:px-0 sm:px-0'>
           <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
           <PicList /> 
           </div> */}
       </main>
       <Footer/>
        </>
    );
};

export default Home;
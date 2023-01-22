import React, { useState } from 'react';
import logo from '../Assets/logo.jpg';

const Carousel = ({ products }) => {
    return (
        <>
        <section class="bg-cyan-100 dark:bg-gray-900">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img className="w-full h-80 object-cover" src={logo} alt="mockup"/>
                </div> 
                <div class="ml-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Work hard for picture quailty</h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From unkown to become global famous photograhper, photograhper around the world use their camera to shoot for their payment stack.</p>
                    <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Check
                    </a> 
                </div>              
            </div>
        </section>
        </>
    );
};
                   
export default Carousel;

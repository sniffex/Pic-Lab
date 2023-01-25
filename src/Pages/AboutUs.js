import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <>
        <Navbar/>
        <main>
            <About/>
       </main>
       <div className='mt-36'>
       <Footer/>
       </div>
        </>
    );
};

export default Home;
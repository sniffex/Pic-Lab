import React from 'react';

const Button = (props) => {
    return (
        <button className=' bg-blue-700 px-4 text-white font-[Arial] py-2 rounded md:ml-8 hover:ml-8 hover:bg-blue-800 duration-500'>
            {props.children}
        </button>
    );
};

export default Button;
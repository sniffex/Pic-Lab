import React from 'react';

const Button = (props) => {
    return (
        <button className=' bg-blue-700 w-[90px] text-sm text-white rounded hover:bg-blue-800 duration-500'>
            {props.children}
        </button>
    );
};

export default Button;
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='bg-white flex justify-between items-center h-20 w-[100vw] px-10'>
            {/* Logo */}
            <div className='w-[200px] relative'>
                {/* <img src="./src/assets/logo2.jpg" alt="MainLogo1" className='relative' /> */}
                <img src="./src/assets/MainLogoP1.png" alt="MainLogo1" className='relative' />
                <img src="./src/assets/MainLogoP2.png" alt="MainLogo2" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[35%] w-10' />
            </div>

            {/* Navigation */}
            <div className='flex gap-10 justify-center items-center'>
                <Link to="/" className='text-black hover:underline'>Prediction</Link>
                <Link to="/compatiblity" className='text-black hover:underline'>Compatiblity</Link>
                <Link to="/contact" className='text-black hover:underline'>Contact Us</Link>
            </div>

            {/* Buttons */}
            <div className='flex gap-5 justify-center items-center'>
                <Link to="/login" className='text-white bg-black py-2 px-5 rounded-full hover:bg-gray-800'>Login</Link>
                <Link to="/signup" className='text-white bg-black py-2 px-5 rounded-full hover:bg-gray-800'>SignUp</Link>
            </div>
        </div>
    );
}

export default Header;

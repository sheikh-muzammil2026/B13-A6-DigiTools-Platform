import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = ({cartCard}) => {
    return (
        <nav className='shadow-md px-6 flex justify-between py-4'>
                <h1 className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h1>
               
                 <ul className='flex justify-between gap-2.5'>
                    <li><a href='#'> Products</a></li>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>Pricing</a></li>
                    <li><a href='#'>Testimonials</a></li>
                    <li><a href='#'>FAQ</a></li>
                </ul>
               
            
            <div className='flex justify-between gap-4 items-center'> 
                <div className='relative'>
                <CiShoppingCart></CiShoppingCart>
                {
                    cartCard.length > 0 && <span className='absolute -top-2 -right-3 text-white text-[10px] w-4 h-4 flex justify-center items-center bg-red-400 rounded-full '>{cartCard.length}</span>
                }
                </div>
                <button className='btn btn-primary rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Get Started</button>
            </div>
        </nav>
    );
};

export default Navbar;
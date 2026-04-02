import React, { useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { IoMenu } from 'react-icons/io5';

const Navbar = ({ cartCard }) => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className={`shadow-lg px-6 flex justify-between py-4 ${showMenu ? 'mb-36' : 'mb-8'}`}>
            {/* Logo */}

            <IoMenu className='relative md:hidden'
                onClick={() => { setShowMenu(!showMenu) }}></IoMenu>
            <h1 className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h1>

            {/* Desktop Menu */}
            <ul className='hidden md:flex justify-between gap-2.5'>
                <li><a href='#'> Products</a></li>
                <li><a href='#'>Features</a></li>
                <li><a href='#'>Pricing</a></li>
                <li><a href='#'>Testimonials</a></li>
                <li><a href='#'>FAQ</a></li>
            </ul>

            {/* Mobile Menu */}
            {showMenu && (
                <ul className={`absolute duration-2000 top-10 left-0  bg-amber-200  text-black shadow-md flex flex-col gap-2 p-4 md:hidden`}>
                    <li><a href='#'>Products</a></li>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>Pricing</a></li>
                    <li><a href='#'>Testimonials</a></li>
                    <li><a href='#'>FAQ</a></li>
                </ul>
            )}

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
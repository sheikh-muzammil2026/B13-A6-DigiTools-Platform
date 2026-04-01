import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
        <section className='bg-[#101727] text-white p-8 pb-3'>
            <div className="section-container flex flex-col">
                <div className="section-content-container flex flex-col justify-center text-center md:justify-between md:flex-row" >
                    <div className="company-name-description flex flex-col ">
                        <h2 className="font-bold text-3xl">DigiTools</h2>
                        <p className="opacity-50 mt-2">Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                    </div>

                    <div className="Product flex flex-col justify-center items-center  gap-2 mt-8">
                        <h2 className="font-bold">Product</h2>
                        <ul className="flex flex-col gap-2 opacity-50 mt-2">
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Templates</a></li>
                            <li><a href="#">Integrations</a></li>
                        </ul>
                    </div>

                    <div className="Company flex flex-col justify-center items-center  gap-2 mt-8">
                        <h2 className="font-bold">Company</h2>
                        <ul className="flex flex-col gap-2 opacity-50 mt-2">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </div>

                    <div className="Resources flex flex-col justify-center items-center  gap-2 mt-8">
                        <h2 className="font-bold">Resources</h2>
                        <ul className="flex flex-col gap-2 opacity-50 mt-2">
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="Social_Links flex flex-col gap-4 mt-8">
                        <h2>Social Links</h2>
                        <div className='flex gap-2'>
                            <FaInstagram></FaInstagram>
                            <FaFacebook></FaFacebook>
                            <FaXTwitter></FaXTwitter>
                        </div>
                    </div>
                </div>
                {/* <hr className='mt-8 opacity-10'></hr> */}
                <div className="flex border-t border-gray-500 justify-center flex-col-reverse items-center text-center md:flex-row md:justify-between opacity-40 gap-4  mt-9 pt-3">
                    <small>© 2026 Digitools. All rights reserved.</small>
                    <ul className="flex flex-col md:flex-row gap-2 mt-2">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Cookies</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;
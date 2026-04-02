import React from 'react';
import badge from '../assets/products/badge.png';
import play from '../assets/products/Play.png';
import banner from '../assets/products/banner.png';
const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row mx-auto justify-center items-center my-4 md:my-15'>
            <div className="hero-content  flex flex-col items-start gap-5">
                <span className='bg-[#E1E7FF] rounded-full flex justify-center items-center py-1 px-2'><img src={badge} alt="" /><p className="badge bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border-none">New: AI-Powered Tools Available</p></span>
                <p className="hero-heading text-2xl md:text-5xl">Supercharge Your <br></br><p className='gradient-text'>Digital Workflow</p></p>
                <p className="hero-description">Access premium AI tools, design assets, templates, and productivity <br></br>
                    software—all in one place. Start creating faster today.</p>
                <span className="btn-container flex gap-2.5">
                    <button className="btn btn-primary rounded-full">Explore Products</button>
                    <button className="btn btn-outline  btn-primary rounded-full flex justify-between items-center"> <span><img src={play} alt="" /></span>Watch Demo</button>
                </span>
            </div>
            <img className='max-w-sm' src={banner} alt="banner right image" />
        </div>
    );
};

export default Hero;
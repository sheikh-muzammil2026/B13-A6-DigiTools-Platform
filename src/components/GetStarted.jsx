import React from 'react';
import user from '../assets/products/user.png';
import rocket from '../assets/products/rocket.png';
import pack from '../assets/products/package.png';

const GetStarted = () => {
    return (
        <div className='flex flex-col bg-base-300 justify-center items-center p-12'>
            <div className="section-content flex flex-col justify-center items-center gap-3">
                <h3 className="section-heading font-bold text-3xl">Get Started in 3 Steps</h3>
                <p className="section-description">Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className="cards-container grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 ">
                <div className="card-1 relative rounded-md flex flex-col items-center  shadow-md p-8">
                    <p className='absolute top-4 right-4 className="card-badge  flex justify-center items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-5 h-5 text-white text-xs'>01</p>
                    <div className="card-content flex justify-center items-center flex-col p-5 text-center gap-3">
                        <div className="card-image-container bg-purple-100 rounded-full p-4"><img src={user} alt="user image" className="card-image max-w-12" /></div>
                        <p className="card-heading font-bold">Create Account</p>
                        <p className="card-description">Sign up for free in seconds. No credit card  required to get started.</p>
                    </div>

                </div>

                <div className="card-2 relative rounded-md flex flex-col items-center  shadow-md p-8">
                    <p className='absolute top-4 right-4 className="card-badge  flex justify-center items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-5 h-5 text-white text-xs'>01</p>
                    <div className="card-content flex justify-center items-center flex-col p-5 text-center gap-3">
                        <div className="card-image-container bg-purple-100 rounded-full p-4"><img src={rocket} alt="user image" className="card-image max-w-12" /></div>
                        <p className="card-heading font-bold">Choose Products</p>
                        <p className="card-description">Browse our catalog and select the toolsthat fit your needs.</p>
                    </div>

                </div>

                <div className="card-3 relative rounded-md flex flex-col items-center  shadow-md p-8">
                    <p className='absolute top-4 right-4 className="card-badge  flex justify-center items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-5 h-5 text-white text-xs'>01</p>
                    <div className="card-content flex justify-center items-center flex-col p-5 text-center gap-3">
                        <div className="card-image-container bg-purple-100 rounded-full p-4"><img src={pack} alt="user image" className="card-image max-w-12" /></div>
                        <p className="card-heading font-bold">Start Creating</p>
                        <p className="card-description">Download and start using your premium tools immediately.</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default GetStarted;
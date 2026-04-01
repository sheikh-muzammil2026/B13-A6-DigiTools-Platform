import React from 'react';

const ReadySec = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex flex-col items-center justify-center gap-4 mt-8 p-24 text-center'>
            <h2 className='ready-section-heading font-extrabold text-4xl'> Ready to Transform Your Workflow?</h2>
            <p className="ready-section-description opacity-60">Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
            <div className="ready-section-btn-container flex justify-center items-center gap-2.5">
                <button className="btn rounded-full bg-white"><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Explore Products</span></button>
                <button className="btn  btn-neutral btn-outline rounded-full text-white border-white"> View Pricing</button>
            </div>

            <p className="end-line opacity-60">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default ReadySec;
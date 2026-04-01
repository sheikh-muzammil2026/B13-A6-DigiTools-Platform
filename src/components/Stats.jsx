import React from 'react';

const Stats = () => {
    return (
        <div className='flex flex-col md:flex-row mx-auto justify-center items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-4 md:py-12.5'>
            <div className=' text-white px-4 md:px-20'>
                <p className='text-4xl font-bold'>50K+</p>
                <p className='opacity-80'>Active Users</p>
            </div>
            <div className="flex md:hidden divider"></div>
            <div className="divider divider-horizontal divider-primary"></div>

            <div className=' text-white px-4 md:px-20'>
                <p className='text-4xl font-bold'>200K+</p>
                <p className='opacity-80'>Premium Tools</p>
            </div>

            <div className="flex md:hidden divider"></div>
            <div className="divider divider-horizontal divider-primary"></div>

            <div className=' text-white px-4 md:px-20'>
                <p className='text-4xl font-bold'>4.9</p>
                <p className='opacity-80'>Rating</p>
            </div>
        </div>
    );
};

export default Stats;
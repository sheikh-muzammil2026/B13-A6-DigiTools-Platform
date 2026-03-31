import React from 'react';

const Stats = () => {
    return (
        <div className='flex mx-auto justify-center items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-[50px]'>
            <div className=' text-white px-[80px]'>
                <p className='text-4xl font-bold'>50K+</p>
                <p className='opacity-[80%]'>Active Users</p>
            </div>

             <div className="divider divider-horizontal divider-primary"></div>

            <div className=' text-white px-[80px]'>
            <p className='text-4xl font-bold'>200K+</p>
            <p className='opacity-[80%]'>Premium Tools</p>
            </div>

            <div className="divider divider-horizontal divider-primary"></div>

           <div className=' text-white px-[80px]'>
             <p className='text-4xl font-bold'>4.9</p>
            <p className='opacity-[80%]'>Rating</p>
           </div>
        </div>
    );
};

export default Stats;
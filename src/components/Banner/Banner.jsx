import React from 'react';
import heroBg from '../../assets/bg-shadow.png'
import bannerImg from '../../assets/banner-main.png';

const Banner = () => {
    return (
        <div className="my-10 bg-no-repeat bg-black text-white flex flex-col gap-6 items-center py-10 rounded-2xl"
        style={{backgroundImage: `url(${heroBg})`}}>
           <img src={bannerImg} alt="" />
           <h1 className='font-bold text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
           <p className='text-gray-500 text-2xl font-medium'>Beyond Boundaries Beyond Limits</p>
           <button className='bg-[#E7FE29] text-black p-2 btn'>Claim Free Credit</button>
        </div>
    );
};

export default Banner;
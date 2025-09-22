import React from 'react';
import navImg from '../../assets/logo.png'
import dollarIcon from '../../assets/dollar-1.png'

const Navbar = () => {
    return (
        <div><div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto">
            <div className="flex-1">
                <a className="w-14 h-14">
                    <img src={navImg} alt="" />
                </a>
            </div>
            <div className="flex items-center gap-2">
                
                <div className='flex items-center gap-2 rounded-lg shadow p-4'>
                    <span className='font-semibold'>60000000 Coin</span>
                    <img src={dollarIcon} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Navbar;
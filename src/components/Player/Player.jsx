import React from 'react';
import nameTag from '../../assets/user-1.png'
import flagTag from '../../assets/report-1.png';

const Player = ({ player }) => {
    const { name, img, country, playing_role, rating, batting_style, bowling_style, price } = player
    return (
        <div>
            <div className="card bg-base-100 drop-shadow-lg drop-shadow-gray-400 p-4">
                <div>
                    <img className='w-[375px] h-[300px] object-cover object-top mb-4 rounded-lg'
                        src={img}
                        alt="Shoes" />
                </div>
                <div className="">
                    <div className='flex items-center mb-4'>
                        <img className='w-5 h-5 mr-4' src={nameTag} alt="" />
                        <h2 className="card-title">{name}</h2>
                    </div>
                    <div className='flex justify-between items-center border-b-2 border-gray-200'>
                        <div className='flex items-center gap-3 text-gray-500 mb-4'>
                            <img src={flagTag} alt="" />
                            <p>{country}</p>
                        </div>
                        <div>
                            <p className='badge badge-ghost'>{playing_role}</p>
                        </div>
                    </div>
                    <div className='font-bold flex items-center gap-3 my-3'>
                        <p>Rating : </p>
                        <span>{rating}</span>
                    </div>
                    <div className='flex items-center justify-between my-3'>
                        <p>{batting_style}</p>
                        <p>{bowling_style}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>Price : {price}</p>
                        <button className='badge badge-ghost p-4 border-2 hover:border-2 hover:border-black hover:drop-shadow-lg focus:border-2 focus:border-gray-700 hover:cursor-pointer'>Choose Player</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Player;
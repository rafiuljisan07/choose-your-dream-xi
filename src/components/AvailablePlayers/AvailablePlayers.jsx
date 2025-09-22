import React, { use } from 'react';

const AvailablePlayers = ({promisePlayers}) => {
    const playersData = use(promisePlayers);
    console.log(playersData)
    return (
        <div className='max-w-7xl mx-auto'>
            AvailablePlayers : {playersData.length}
        </div>
    );
};

export default AvailablePlayers;
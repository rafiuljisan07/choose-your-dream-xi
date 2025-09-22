import React, { use } from 'react';
import Player from '../Player/Player';

const AvailablePlayers = ({promisePlayers}) => {
    const playersData = use(promisePlayers);
    // console.log(playersData)


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                playersData.map(player => <Player key={player.id} player={player}></Player>)
            }
        </div>
    );
};

export default AvailablePlayers;
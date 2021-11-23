import Player from './Player';
import './Players.css';
import { useState, useContext } from 'react';
import PlayerAdd from './PlayerAdd';

import IPlayer from './IPlayer';
import PlayersContext from './PlayersContext';

function Players() {
    const { players, addPlayer, handleDelete } = useContext(PlayersContext);

    return (
        <div className={'players'}>
            {players.map((player, i) => {
                return <Player
                    name={player.name}
                    position={player.position}
                    starting={player.starting}
                    onDelete={() => handleDelete(i)}
                />
            })}


            <PlayerAdd onAdd={addPlayer} />
        </div>
    )
}

export default Players;
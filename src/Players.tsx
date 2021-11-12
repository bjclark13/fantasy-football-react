import Player from './Player';
import './Players.css';
import { useState } from 'react';
import PlayerAdd from './PlayerAdd';

import IPlayer from './IPlayer';

function Players() {
    const players: IPlayer[] = [
        {
            name: 'Tom Brady',
            position: 'Quarterback',
            starting: true
        },
        {
            name: 'Adrian Peterson',
            position: 'Running Back',
            starting: false
        },
        {
            name: 'Cooper Kupp',
            position: 'Wide Receiver',
            starting: true
        },
        {
            name: 'Lions',
            position: 'Defense / Laughingstock',
            starting: true
        }
    ];

    const [playerList, setPlayerList] = useState(players);

    const handleDelete = (i: number) => {
        setPlayerList((prevPlayerList) => {
            return [...prevPlayerList.slice(0, i), ...prevPlayerList.slice(i + 1)];
        })
    }

    const addPlayer = (player: IPlayer) => {
        setPlayerList((prevPlayerList) => {
            return [...prevPlayerList, player];
        })
    }

    return (
        <div className={'players'}>
            {playerList.map((player, i) => {
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
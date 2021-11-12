import Player from './Player';
import './Players.css';

function Players() {
    const players = [
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


    return (
        <div className={'players'}>
            {players.map((player) => {
                return <Player name={player.name} position={player.position} starting={player.starting} />
            })}
        </div>
    )
}

export default Players;
import { useState } from 'react';
import './Player.css';

function Player({ name, starting, position }: { name: string, starting: boolean, position: string }) {

    const [startingState, setStarting] = useState(starting);

    const toggleStarting = () => {
        setStarting(!startingState);
    };

    return (
        <div className='player'>
            <h2>{name}</h2>
            <h3>{position}</h3>
            <h3>{startingState ? '' : 'Not'} Starting </h3>

            <button onClick={toggleStarting}> {startingState ? 'Bench' : 'Start'} Player </button>
        </div>
    )
}

export default Player;
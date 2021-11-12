import { useState } from 'react';
import './Player.css';

interface PlayerProps {
    name: string,
    starting: boolean,
    position: string,
    onDelete: () => void
}

function Player({ name, starting, position, onDelete }: PlayerProps) {

    const [startingState, setStarting] = useState(starting);

    const toggleStarting = () => {
        setStarting(!startingState);
    };

    return (
        <div className='player'>
            <h2>{name}</h2>
            <h3>{position}</h3>
            <h3>{startingState ? '' : 'Not'} Starting </h3>

            <p>
                <button onClick={toggleStarting}> {startingState ? 'Bench' : 'Start'} Player </button>
            </p>
            <button onClick={onDelete}> Drop Player </button>
        </div>
    )
}

export default Player;
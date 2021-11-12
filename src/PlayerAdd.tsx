import IPlayer from "./IPlayer";
import { useState } from 'react';

function PlayerAdd({ onAdd }: { onAdd: (player: IPlayer) => void }) {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [starting, setStarting] = useState(false);

    return (
        <form className="player" onSubmit={(e) => {
            e.preventDefault();
            onAdd({ name, starting, position })
        }}>
            <p>
                <label>
                    <strong> Name </strong>
                    <input value={name} onChange={e => setName(e.target.value)} name="name" />
                </label>
            </p>

            <p>
                <label>
                    <strong> Position </strong>
                    <input
                        value={position}
                        onChange={e => setPosition(e.target.value)}
                        name="position"
                    />
                </label>
            </p>

            <p>
                <label>
                    <strong> Start Player Upon Adding? </strong>
                    <input
                        name="starting"
                        type="checkbox"
                        checked={starting}
                        onChange={e => setStarting(e.target.checked)}
                    />
                </label>
            </p>

            <p>
                <button> Submit </button>
            </p>
        </form>
    )
};

export default PlayerAdd;
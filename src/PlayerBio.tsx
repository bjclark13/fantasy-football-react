import { useParams } from "react-router";
import { useContext } from 'react';
import PlayersContext from "./PlayersContext";
import { Link } from 'react-router-dom';

function PlayerBio() {
    const playerName = useParams().name;

    const { players } = useContext(PlayersContext);

    // find the player where the name matches player name
    const player = players.find((player) => {
        return player.name === playerName
    })


    return (
        <div>
            <h1>{playerName}</h1>

            <h2>{player?.position}</h2>
            <Link to="/">Go Back Home</Link>
        </div>
    )
}

export default PlayerBio;
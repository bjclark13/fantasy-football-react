import IPlayer from './IPlayer'
import { createContext } from 'react';

interface PlayersContextModel {
    players: IPlayer[];
    addPlayer: (player: IPlayer) => void;
    handleDelete: (i: number) => void;
}

const defaultValue: PlayersContextModel = {
    players: [],
    addPlayer: () => { },
    handleDelete: (i: number) => {}
}

const PlayersContext = createContext(defaultValue);
export default PlayersContext;


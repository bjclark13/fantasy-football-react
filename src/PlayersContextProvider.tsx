import { ReactNode, useState } from 'react';
import PlayersContext from './PlayersContext';
import IPlayer from './IPlayer';

function PlayersContextProvider({ children }: { children: ReactNode }) {
    // set the state 
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

    const addPlayer = (player: IPlayer) => {
        setPlayerList((prevPlayerList) => {
            return [...prevPlayerList, player];
        })
    }

    const handleDelete = (i: number) => {
        setPlayerList((prevPlayerList) => {
            return [...prevPlayerList.slice(0, i), ...prevPlayerList.slice(i + 1)];
        })
    }

    // wrapping the children in our provider
    return (
        <PlayersContext.Provider value={{
            players: playerList,
            addPlayer,
            handleDelete
        }}>
            {children}
        </PlayersContext.Provider>
    )

}

export default PlayersContextProvider;
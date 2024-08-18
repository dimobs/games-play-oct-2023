import { useEffect, useState } from 'react';

// import * as gameService from '../../services/gameService';
import * as gameService from '../services/gameService'
// import GameListItem from './game-list-item/GameListItem';


export function useGetAllGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
         gameService.getAll()
            .then(result => setGames(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return [games, setGames];
}
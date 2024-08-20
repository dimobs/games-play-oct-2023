import { useEffect, useState } from 'react';
import * as gameService from '../services/gameService'

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

export function useGetOneGames (gameId) {
    const [game, setGame] = useState({});
    useEffect(() => {
     (async() => {
        try {
        const result = await gameService.getOne(gameId)
        setGame(result)
        console.log(result, 'rrrrr');
        }catch(err){
            console.log(err);
        }
        
    })();
    }, [gameId]);

    return [game, setGame];
}
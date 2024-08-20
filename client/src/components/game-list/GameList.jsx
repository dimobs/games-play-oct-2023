import { useGetAllGames } from "../../hooks/useGames";
import GameListItem from "./game-list-item/GameListItem";

export default function GameList() {
   const [games] = useGetAllGames();

   return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.length === 0 
            ? <h3 className="no-articles">No articles yet</h3>
            : games.map(g => (
                <GameListItem key={g[1]._id} {...g[1]} />))
            }
        </section>
    );
}

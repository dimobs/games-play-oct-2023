import { useEffect, useState } from "react";
import withAuth from "../../HOC/withAuth";
import * as gameService from '../../services/gameService';
import LatestGame from "./latest-game/LatestGame";

function Home({
    _id,
    accessToken,
    email,
}) {
    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {
        gameService.getLatest()
            .then(result => setLatestGames(result));
    }, [])
    latestGames.map(x => console.log(x[1]))
    
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">

                {latestGames.map(game => <LatestGame key={game[1]._id} {...game[1]} />)}

                {!latestGames.length && <p className="no-articles">No games yet</p>}

                <p>{email}</p>
            </div>
        </section>
    );
}

const EnhancedHome = withAuth(Home);

export default EnhancedHome;

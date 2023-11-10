// GameDetails.jsx

import { useParams } from "react-router-dom";

function GameDetails({ games }) {
  const { id } = useParams();
  const game = games.find((game) => game.id.toString() === id);

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className="game-details">
      <h2>{game.title}</h2>
      <img src={game.thumbnail} alt={game.title} />
      <p>Genre: {game.genre}</p>
      <p>Platform: {game.platform}</p>
      <p>Release Date: {game.release_date}</p>

    </div>
  );
}

export default GameDetails;

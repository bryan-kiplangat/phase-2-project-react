// GameDetails.jsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function GameDetails() {
  const { id: gameId } = useParams();
  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch(
          `https://mmo-games.p.rapidapi.com/game?id=${gameId}`,
          {
            method: "get",
            headers: {
              "X-RapidAPI-Key":
                "21ba5a23b4mshdf759f8afb8fc4cp15212ejsncb700ddc8940",
              "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
            },
          }
        );

        const data = await response.json();
        setGame(data);
        setLoading(false);
      } catch (error) {
        console.error("There was a problem fetching games data:", error);
        setLoading(false);
      }
    }
    fetchGames();
  }, [gameId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="game-details container mx-auto my-8 lg:pl-8">
      <h2 className="text-3xl font-bold mb-4">{game.title}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={game.thumbnail}
            alt={game.title}
            className="w-full h-auto rounded-lg"
          />
          {game.genre && (
            <p className="mt-4 text-lg">
              Genre: <span className="font-semibold">{game.genre}</span>
            </p>
          )}
          {game.platform && (
            <p className="text-lg">
              Platform: <span className="font-semibold">{game.platform}</span>
            </p>
          )}
          {game.release_date && (
            <p className="text-lg">
              Release Date:{" "}
              <span className="font-semibold">{game.release_date}</span>
            </p>
          )}
          <p className="mt-4">{game.short_description}</p>
        </div>

        <div>
          {game.minimum_system_requirements && (
            <>
              <h3 className="text-xl font-semibold mb-2">
                Minimum System Requirements
              </h3>
              <ul className="list-disc pl-4">
                {game.minimum_system_requirements.os && (
                  <li>OS: {game.minimum_system_requirements.os}</li>
                )}
                {game.minimum_system_requirements.processor && (
                  <li>
                    Processor: {game.minimum_system_requirements.processor}
                  </li>
                )}
                {game.minimum_system_requirements.memory && (
                  <li>Memory: {game.minimum_system_requirements.memory}</li>
                )}
                {game.minimum_system_requirements.graphics && (
                  <li>Graphics: {game.minimum_system_requirements.graphics}</li>
                )}
                {game.minimum_system_requirements.storage && (
                  <li>Storage: {game.minimum_system_requirements.storage}</li>
                )}
              </ul>
            </>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Screenshots</h3>
        {game.screenshots && game.screenshots.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {game.screenshots.map((screenshot) => (
              <img
                key={screenshot.id}
                src={screenshot.image}
                alt={`Screenshot ${screenshot.id}`}
                className="w-full h-auto rounded-lg"
              />
            ))}
          </div>
        ) : (
          <p>No screenshots available.</p>
        )}
      </div>
    </div>

    // Screams in "I have re-written this block sooo many times, I think i'm going crazy."
    // current maddening situation. Stuff appears when it should not and rerender for some weird reason
  );
}

export default GameDetails;

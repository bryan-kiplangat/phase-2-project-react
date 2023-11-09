import { useState, useEffect } from "react";

function Games() {
  const [games, setGames] = useState([]);

  // fetch bot data
  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch(
          "https://www.mmobomb.com/api1/games"
        );
        const games = await response.json();
        console.log(games);
        setGames(games);
      } catch (error) {
        console.error("There was a problem fetching bots data:", error);
      }
    }
    fetchGames();
  }, []);
  return(
    <>
      <div className="flex flex-col items-center mt-8">
        <div className="army-container w-3/4 p-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">List</h2>
          <div className="selected-bots-container flex flex-wrap gap-4">
            {games.map((bot, index) => (
              <div
                key={index}
                className="army-bot bg-white p-4 rounded shadow-md"
              >
                <img
                  src={bot.avatar_url}
                  alt={`Bot ${index}`}
                  className="mb-2 w-32 h-32 object-cover rounded"
                />
                <p className="text-lg font-semibold">Name: {bot.name}</p>
                <p>Health: {bot.health}</p>
                <p>Damage: {bot.damage}</p>
                <p>Armor: {bot.armor}</p>
              </div>
            ))}
            {/* once you have enough bots to join the army, you can go to war: derict to war page/component where users bots battle */}
            
          </div>
        </div>

        <div className="bot-list-container w-3/4 p-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">MMO Games</h2>
          <div className="selected-bots-container flex flex-wrap gap-4">
            {games.map((bot, index) => (
              <div
                key={index}
                className="bot-item bg-white p-4 rounded shadow-md"
              >
                <img
                  src={bot.thumbnail}
                  alt={`Bot ${index}`}
                  className="mb-2 w-32 h-32 object-cover rounded"
                />
                <p className="text-lg font-semibold">title: {bot.title}</p>
                <p>genre: {bot.genre}</p>
                <p>platform: {bot.platform}</p>
                <p>release_date: {bot.release_date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
    )
}

export default Games;

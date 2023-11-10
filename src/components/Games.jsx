import { Link } from "react-router-dom";

function Games({ games, giveaways }) {
  //   still loading screen because the map function runs before the data is retrieved causing errors

  function onCardClick(g) {
    console.log(g);
  }

  return (
    <>
      <div className="flex flex-col items-center mt-8">
        <div className="army-container w-3/4 p-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">Giveaways</h2>
          <div className="selected-bots-container flex flex-wrap gap-4">
            {giveaways.map((giveaway, index) => (
              <Link
                to={`/game/${giveaway.id}`}
                key={index}
                className="bot-item"
              >
                <div
                  key={index}
                  className="army-bot bg-white p-4 rounded shadow-md"
                >
                  <img
                    src={giveaway.thumbnail}
                    alt={`Givaway ${index}`}
                    className="mb-2 w-32 h-32 object-cover rounded"
                  />
                  <p className="text-lg font-semibold">{giveaway.title}</p>
                  <a href={giveaway.giveaway_url}>Giveaway steps</a>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bot-list-container w-3/4 p-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">MMO Games List</h2>
          <div className="selected-bots-container flex flex-wrap gap-4">
            {games.map((game, index) => (
              <Link to={`/game/${game.id}`} key={index} className="bot-item">
                <div
                  key={index}
                  className="bot-item bg-white p-4 rounded shadow-md"
                  onClick={() => onCardClick(game)}
                >
                  <img
                    src={game.thumbnail}
                    alt={`Game ${index}`}
                    className="mb-2 w-32 h-32 object-cover rounded"
                  />
                  <p className="text-lg font-semibold">title: {game.title}</p>
                  <p>genre: {game.genre}</p>
                  <p>platform: {game.platform}</p>
                  <p>release_date: {game.release_date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Games;

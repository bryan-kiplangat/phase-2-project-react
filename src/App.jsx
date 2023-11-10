import Games from "./components/Games";
import SideBar from "./components/SideBar";
import NavBar from "./components/Navbar";
import GameDetails from "./components/GameDetail";

import GameDetail from "./components/GameDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [games, setGames] = useState([]);
  const [giveaways, setGiveaways] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // fetch bot data
  useEffect(() => {
    async function fetchGames() {
      try {
        // https://www.mmobomb.com/api1/games?category=
        const response = await fetch("https://mmo-games.p.rapidapi.com/games", {
          method: "get",
          headers: {
            "X-RapidAPI-Key":
              "21ba5a23b4mshdf759f8afb8fc4cp15212ejsncb700ddc8940",
            "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
          },
        });
        const response2 = await fetch(
          "https://mmo-games.p.rapidapi.com/giveaways",
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
        const data2 = await response2.json();
        // console.log(data);
        setGames(data);
        setGiveaways(data2);
        setLoading(false);
      } catch (error) {
        console.error("There was a problem fetching bots data:", error);
        setLoading(false);
      }
    }
    fetchGames();
  }, []);

  return (
    <Router>
      <div>
        <NavBar query={query} handleInputChange={handleInputChange} />

        <div className="flex">
          <SideBar />
          <Switch>
            <Route exact path="/">
              <div className="flex-1 p-4">
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <Games games={games} giveaways={giveaways} />
                )}
              </div>
            </Route>
            <Route path="/game/:id" component={GameDetails} />
          </Switch>
        </div>
        <GameDetail />
      </div>
    </Router>
  );
}

export default App;

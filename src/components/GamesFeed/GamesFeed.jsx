import { useState, useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import "./GamesFeed.scss";

export default function GamesFeed() {
  const { theme, toggleTheme } = useTheme();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "0c8fb146dcmsh50085d8c7ab8b8ap193cbbjsn0f7c8595c708",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json()) /* fetch responde objeto // que trae el reponse (valor, tipo de datos) // que mas hay ademas de .json */
      .then((data) => {  /* por que otro then // promise */
        setGames(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the games:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={`hero__button ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {loading ? (
        <p>Loading games...</p>
      ) : (
        <ul>
          {games.slice(0, 5).map((game) => (
            <li key={game.id}>
              <h2>{game.title}</h2>
              <p>{game.genre}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

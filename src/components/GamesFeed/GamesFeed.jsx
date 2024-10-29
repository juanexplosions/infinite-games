import { useState, useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import { useData } from "../../contexts/DataContext.jsx";
import GameCard from "../GameCard/GameCard";
import Categories from "../Categories/Categories";
import ActionBar from "../ActionBar/ActionBar";
import "./GamesFeed.scss";
import { fetchData } from "../../api/fetch.js";

export default function GamesFeed() {
  const { theme, toggleTheme } = useTheme();
  const { data: games, loading, fetchGames } = useData();


  // usestate + 9 games button load more

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <section className={`feed ${theme}`}>
      <Categories />
      <div className="feed__container">
        <ActionBar />
        {loading ? (
          <p>Loading games...</p>
        ) : (
          <div className="feed__games">
            {games.length === 0 ? (
              <p>No games found</p>
            ) : (
              games
                .slice(0, 9)
                .map((game) => (
                  <GameCard
                    key={game.id}
                    image={game.thumbnail}
                    title={game.title}
                    genre={game.genre}
                    description={game.short_description}
                  />
                ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}

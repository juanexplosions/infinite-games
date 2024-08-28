import { useState, useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import { useData } from "../../contexts/DataContext.jsx";
import { Icon } from "@iconify/react";
import "./Hero.scss";
import logo from "../../assets/infinite-games-logo.svg";

export default function Hero() {
  const { theme, toggleTheme } = useTheme();
  const { data, loading, error, fetchGames } = useData();

  useEffect(() => {
    const url =
      "https://free-to-play-games-database.p.rapidapi.com/api/game?id=540";
    fetchGames(url);
  }, []);

  return (
    <header className={`hero ${theme}`}>
      <div className="hero__background-container">
        {data && data.screenshots && (
          <img
            src={data.screenshots[0].image}
            className="hero__background"
            alt=""
          />
        )}{" "}
      </div>
      <div className="hero__gradient"></div>
      <div className="hero__container">
        <section className="hero__navbar">
          <a href="#" className="hero__logo-link">
            <img src={logo} className="hero__logo" alt="" />
          </a>
          <div className="hero__buttons">
            <div className="hero__theme-switch">
              <button className="hero__theme-icon sun" onClick={toggleTheme}>
                <Icon icon="ion:md-sunny" />
              </button>
              <button className="hero__theme-icon moon" onClick={toggleTheme}>
                <Icon icon="ion:moon-sharp" />
              </button>
            </div>
            <button className="hero__about">About</button>
          </div>
        </section>
        <h1 className="hero__title">
          INFINITE <br /> GAMES
        </h1>
        <button className="hero__explore">
          <p>Start Exploring</p>
          <Icon icon="rivet-icons:chevrons-right" />
        </button>
        <h2 className="hero__subtitle">FREE TO PLAY</h2>
      </div>
    </header>
  );
}

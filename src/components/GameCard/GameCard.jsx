import { useState, useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import { Icon } from "@iconify/react";

import "./GameCard.scss";
import logo from "../../assets/infinite-games-logo.svg";

export default function GameCard({ image, title, genre, description }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="card">
      <img src={image} alt="" className="card__image" />
      <div className="card__info-container">
        <div className="card__title-container">
          <h3 className="card__title">{title}</h3>
          <Icon className="card__star" icon="dashicons:star-empty" /> {/* star-filled */}  
        </div>
        <p className="card__genre">{genre}</p>
        <p className="card__description">{description}</p>
        <div className="card__buttons-container">
          <button className="card__start">Start playing</button>
          <button className="card__more">More info</button>
        </div>
      </div>
    </div>
  );
}

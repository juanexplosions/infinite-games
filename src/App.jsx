import { useState, useEffect } from "react";
import { useTheme } from "./contexts/ThemeContext";

import Hero from "./components/Hero/Hero";
import GamesFeed from "./components/GamesFeed/GamesFeed";
import Footer from "./components/Footer/Footer";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Hero />
      <GamesFeed />
      <Footer />
    </>
  );
}

export default App;

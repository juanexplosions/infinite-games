import { createContext, useState, useContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchGames = async (url) => {
    setLoading(true);
    setError(null);

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "0c8fb146dcmsh50085d8c7ab8b8ap193cbbjsn0f7c8595c708",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error("Error fetching the games:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DataContext.Provider value={{ data, loading, error, fetchGames }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

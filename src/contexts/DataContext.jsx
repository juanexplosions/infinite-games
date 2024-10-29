import { createContext, useState, useContext } from "react";
import { fetchData } from "../api/fetch";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchGames = async () => {
    setLoading(true);
    setError("");

    try {
      const result = await fetchData(`/api/games`);
      setData(result);
    } catch (err) {
      console.error("Error fetching the games:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }

    // if data.lenth is 0, then set error to "No games found"
    // if no hay busqueda, motrar "No games found with that"
    // if null
  };

  return (
    <DataContext.Provider value={{ data, loading, error, fetchGames }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

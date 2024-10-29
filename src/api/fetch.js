export const fetchData = async (url) => {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_GAMES_API_KEY,
      "x-rapidapi-host": import.meta.env.VITE_GAMES_API_HOST,
    },
  };

  const response = await fetch(`https://${import.meta.env.VITE_GAMES_API_HOST}${url}`, options);
  const result = await response.json();
  return result;
};
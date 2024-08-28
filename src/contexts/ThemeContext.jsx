import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light-mode");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light-mode" ? "dark-mode" : "light-mode"));
  }
  // abreviacion de theme: theme == theme en el objeto al pasarlo como valor, ecmascript
  // children, todo lo que esta dentro de las etiquetas
  return(
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
// useTheme = theme, toggleTheme
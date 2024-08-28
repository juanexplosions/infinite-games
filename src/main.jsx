import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./contexts/ThemeContext";
import { DataProvider } from "./contexts/DataContext";

import App from "./App.jsx";
import "/src/styles/global.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </DataProvider>
  </StrictMode>
);

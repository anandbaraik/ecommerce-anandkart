import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import AppContextProvider, { useAppContext } from "./Context/AppContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { useAppContext };

root.render(
  <StrictMode>
    <Router>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Router>
  </StrictMode>
);

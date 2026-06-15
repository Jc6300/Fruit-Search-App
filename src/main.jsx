import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FruitsSearch from "./index.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FruitsSearch />
  </StrictMode>,
);

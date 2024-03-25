import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./component/ContactApp";
import "../src/Style/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ContactApp />
  </StrictMode>
);

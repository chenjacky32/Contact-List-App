import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./component/ContactApp";
import { BrowserRouter } from "react-router-dom";
import "../src/Style/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <ContactApp />
    </BrowserRouter>
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import Cart from "./components/Cart";
import "./_index.sass";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Cart />
  </React.StrictMode>
);

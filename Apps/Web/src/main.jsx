import React from "react";
import ReactDOM from "react-dom/client";
import App from "../web/App.jsx";
import "../hooks/index.css";
import { CartProvider } from "../hooks/useCart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <App />
  </CartProvider>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//contextos
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </SidebarProvider>
);

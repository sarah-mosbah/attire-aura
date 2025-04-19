import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./contexts/users.context";
import ProductProvider from "./contexts/product.context";
import { CartDropDownProvider } from "./contexts/cart-dropdown.context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UsersProvider>
        <ProductProvider>
          <CartDropDownProvider>
            <App />
          </CartDropDownProvider>
        </ProductProvider>
      </UsersProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

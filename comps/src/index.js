import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./context/navigation";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(
  //Here, we have App component in between NavigationProvider Component. The App component can be accessed with the children({children}) variable in the NavigationProvider.
  <NavigationProvider>
    <App />
  </NavigationProvider>
);

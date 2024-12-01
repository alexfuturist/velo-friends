import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { store } from "./app/redux/redux-store";
import App from "./app/App";
import React from "react";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);

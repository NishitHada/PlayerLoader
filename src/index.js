import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ErrorBoundary from "./ErrorBoundary";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App playerOption="1" />
    </ErrorBoundary>
  </React.StrictMode>,
  rootElement
);

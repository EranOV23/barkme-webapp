import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import { LocaleProvider } from "antd";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <LocaleProvider>
    <App />
  </LocaleProvider>,
  document.getElementById("root")
);
registerServiceWorker();

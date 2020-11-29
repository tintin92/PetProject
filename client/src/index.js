import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reigsterServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
reigsterServiceWorker();

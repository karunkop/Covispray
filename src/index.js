import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "tailwindcss/dist/base.min.css";
import { init } from "emailjs-com";

init(process.env.REACT_APP_USER_ID);

ReactDOM.render(<App />, document.getElementById("root"));

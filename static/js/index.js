import React from "react";
import { createRoot } from "react-dom/client";
import App from "{{url_for('static', filename='js/App.js')}}";
import reportWebVitals from "{{url_for('static', filename='js/reportWebVitals.js')}}";
import { BrowserRouter } from "react-router-dom";
import "{{url_for('static', filename='css/global.css')}}";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

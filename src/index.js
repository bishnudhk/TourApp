import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import "./indexTour.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Apps from "./Apps";
import TourApp from "./TourApp";
import FlashProj from "./FlashProj";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Apps /> */}
    <TourApp />
    {/* <FlashProj /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

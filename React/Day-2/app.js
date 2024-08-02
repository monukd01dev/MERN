import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const message = React.createElement("h1",{},"React Is working");

root.render(message);

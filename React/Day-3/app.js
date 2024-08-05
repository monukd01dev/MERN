import react from "react"; // no work of react core cause jsx doing it
import reactDOM from "react-dom/client";

const root = reactDOM.createRoot(document.getElementById("root"));

// const heading = react.createElement(
//   "h1",
//   { id: "heading" },
//   "This is the basic and working fine"
// );
const heading = <h1 className="heading">This is from JSX 🚀 </h1>;

root.render(heading);

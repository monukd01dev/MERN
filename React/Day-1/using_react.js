// create the root
const root = ReactDOM.createRoot(document.getElementById("root"));

//creating the element
// parameter -> element_name , attribute, children
const heading = React.createElement(
  "h1",
  {
    className: "heading-1",
    style: {
      color: "white",
      textAlign: "center",
      backgroundColor: "black",
      fontFamily : "arial"
    },
  },
  "Hello from the core React"
);

//rendring the heading or attaching it to Dom
root.render(heading);

console.log(heading)
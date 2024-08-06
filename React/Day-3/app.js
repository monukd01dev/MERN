import react from "react"; // no work of react core cause jsx doing it
import reactDOM from "react-dom/client";

const root = reactDOM.createRoot(document.getElementById("root"));

// const heading = react.createElement(
//   "h1",
//   { id: "heading" },
//   "This is the basic and working fine"
// );

// jsx is converted to core-react by bable and the core-react code return an object and that object is rendered into the root using the render() method of react-dom

//element
const heading = <h1 className="heading">This is from JSX 🚀 Cool</h1>;
const robbrey = (
  <section>
    <h2>Why robbers?</h2>
    <p>
      There could be something but the lorem not working so i have to write
      something that that's why i am writing rubbish hr athe there wourld we no
      i ama jsut out of workd what can i sya
    </p>
  </section>
);

//functional component
// styled component
const Card = function () {
  const cardStyle = {
    border: "1px solid black",
    width: "200px",
    borderRadius: "10px",
    overflow: "hidden",
    padding: "10px",
  };
  return (
    <div className="card" style={cardStyle}>
      <img
        src={`https://picsum.photos/id/${Math.floor(
          Math.random() * 100
        )}/200/200`}
      />
      <h2>Learning is important</h2>
      <p>
        In US most of the clg students do drugs why and how I knew that even I
        don't know cause lorem isn't working here.
      </p>
      {robbrey}
    </div>
  );
};

// styled component

const CardContainer = () => {
  const CardContainerStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    gap: " 20px",
    flexWrap: "wrap",
    alignItems: "center",
  };

  return (
    <div className="card-container" style={CardContainerStyle}>
      <Card />
      <Card></Card>
      {Card()}
      {[<Card />, <Card />, <Card />, <Card />, <Card />, <Card />]}
    </div>
  );
};

root.render(<CardContainer />);

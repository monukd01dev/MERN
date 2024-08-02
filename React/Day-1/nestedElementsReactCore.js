/* 
    <div id="parent">
        <div id="child">
            <div class="siblings">Sibling-1</div>
            <div class="siblings">Sibling-2</div>
            <div class="siblings">
                <div class="sib-child">sib-child-1</div>
                <div class="sib-child">sib-child-2</div>
            </div>
        </div>
    </div> 
*/

const Parent = React.createElement("div", { id: "parent" }, [
  "Parent",
  React.createElement("div", { className: "child" }, [
    "Child",
    React.createElement("div", { className: "siblings" }, "Sibling-1"),
    React.createElement("div", { className: "siblings" }, "Sibling-2"),
    React.createElement("div", { className: "siblings" }, [
      React.createElement("div", { className: "sib-child" }, "sib-child-1"),
      React.createElement("div", { className: "sib-child" }, "sib-child-1"),
    ]),
  ]),
]);

//this code become unredable cause we know the frontend the no of div's we have to create to create design

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Parent);

console.log(Parent);

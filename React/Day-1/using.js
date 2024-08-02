//select the div.root
const root = document.getElementById("root");

//creating the heading(h1) tag
const heading = document.createElement("h1")

//optimised way to add text to any element
// 1. select the element and then append the textNode
heading.append(document.createTextNode("Hello, From Vanilla JavaScript DOM API"))

// adding the create heading with the root
root.append(heading);
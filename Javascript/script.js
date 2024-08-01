// 1. add a child-5

const child_5 = document.createElement("div");
child_5.classList.add("child","child-5","neu-out");
console.log(child_5.className);
addText(child_5,"child-5");

const parent = document.querySelector(".parent");
parent.append(child_5);

function addText(element,text) {
    element.append(document.createTextNode(text || "Default"));
}

console.log(child_5);

for(content of parent.children)
    console.log(content.textContent)

// parent.querySelectorAll("*").forEach(e => {
//    e.style.backgroundColor = "#abc4ff"
// });

// child traversel
// property--> firstChild (textNode) -> firstElementChild (ElementNode)
// parent.firstElementChild.style.backgroundColor = "#abc4ff"

// lastElementChild
// parent.lastElementChild.style.backgroundColor = "#ff85a1"

// nextElementSibling and previousElementSibling

// parent.lastElementChild.previousElementSibling.style.backgroundColor = "#4ad66d"

// parent.firstElementChild.nextElementSibling.style.backgroundColor = "#edc531"

//now selecting the middle one
// parent.children[2].style.backgroundColor = "#ff2c55"


// delete the element
// parent.lastElementChild.remove()
// parent.lastElementChild.remove()
// parent.lastElementChild.remove()
// parent.lastElementChild.remove()
// parent.lastElementChild.remove()

// adding positions
// append prepend before and after
// parent.append(child_5)
// parent.prepend(child_5.cloneNode(true))
// console.log(parent)
// parent.before(child_5.cloneNode(true))
// parent.after(child_5.cloneNode(true))





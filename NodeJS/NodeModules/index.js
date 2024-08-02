// import func from "http";

// console.log(func)

// "./moduleName" -> this will search for module in our project root
// "moduleName" -> this will search in nodemodules

// const value = require("./math.js");
// console.log(value.multiply(2,3))




// and you know what you are importing so you can use destructuring of Array and Objects
// Object destructuring
    // const {multiply:one} = require("./math.js");
    // console.log(one(2,3))

// Array Destructuring
    // const [...math] = require("./math") // when you use rest parameter destructuring you endup getting an array
    // // const [...{...math}] = require("./math") // and if you need object do this
    // console.log(math)


// second way export.property

// const value = require('./math');

// console.log(value.two(2,5))
// what you get and the end
// console.log(typeof value)




// can we destructure it
const {one:sum} = require('./math');

// console.log(value.two(2,5))
console.log(sum(2,5))


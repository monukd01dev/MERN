// export default () => console.log("hello bhai")
// so es6 modules also work in node with .mjs extentions
// but when you use .mjs extention module goes into the es6 module scope  and require will not work there
// nodeModules know as CommonJS modules
// and ES6 modules you already know

const sum = (a,b) => a+b;
const sub = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;


// Way-1 -> single export or default export remember in default exports only one thing is getting exported 
// module.exports = ;

// module.exports = "sending a string" ;// it will be overwrite by the second module.exports so i don't have comment it
// module.exports = [sum,sub,multiply,divide];// but array not good for function cause it don't have dot and bracket notation 
// module.exports = {sum,sub,multiply,divide};


// Way-2 -> multiple exports
// module.exports have the higher priority when they both used at  the same time
exports.one = sum;
exports.two = sub;
exports.three = multiply;
exports.four = divide;



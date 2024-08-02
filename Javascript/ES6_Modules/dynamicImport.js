console.log("--------- Dynamci Imports --------");

// const promise = await import('./calc.js');
// console.log(promise)

// console.log(promise.multBy11(6))


// another way

import('./calc.js').then(module => {
    console.log(module.multBy11(4))
})





// handling multiple dyanmic imports

// way-1
const promise =  Promise.all([
    await import("./calc.js"),
    await import('./defaultExport.js')
])

promise.then(moduleArr => {
    console.log(moduleArr[0].multBy11(7))
})



// way-2
// const promise = await Promise.all([
//     await import("./calc.js"),
//     await import('./defaultExport.js')
// ])

// console.log(promise[0].multBy11(6))





//import() this function returns a promise that resolves with the module and if the is multiple modules it will return the array of moudles

// so we know that there are two ways to consume a promise 
// using handler method -> then()
// using await 
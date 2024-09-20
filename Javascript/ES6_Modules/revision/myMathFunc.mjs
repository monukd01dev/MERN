// export const annoy =()=>{
//     console.log("I am annonymous");
// }

// export const myEnv = "myApiKey"
 const annoy =()=>{
    console.log("I am annonymous");
}

 const myEnv = "myApiKey";

 const area ={
   circle(r){
      return (3.14*(r**2))
   },
   square: (side)=> side**2,

   triangle: (base, height) => 0.5 * base * height
 }

 export {
    myEnv,
    annoy,
    area,
 }


//  Exactly! The export block itself isn't like an object where you can add properties directly. However, you can export an object that contains functions as properties. Here’s a summary

// wrong code
   // export {
   //    function dash(params) {
   //       console.log("hello");
         
   //    },
   //    anotherOne : () => "anotherOne",
   // }
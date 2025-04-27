// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20); //F
Object.is(0, -0); //F
Object.is(NaN, 100); //F
Object.is("one", "two"); //F
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }); //F
Object.is(null, undefined); //F

10 === 20; //F
10 === "10" //F
3.14 !== 3.14; //F
"TechUp" !== "TechUp"; //F
NaN === NaN; //F
0 !== -0; //F

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB; //F

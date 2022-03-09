Object.is(10, 20);
Object.is(0, -0);
Object.is(NaN, 100);
Object.is("one", "two");
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 });
Object.is(null, undefined);

10 === 20;
3.14 !== 3.14;
"TechUp" !== "TechUp";
NaN === NaN;
0 !== -0;

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB;

console.log("Rokket Labs Test");
console.log("Ejercicio 2");

/*
    2. Longest string
*/

const list = ["best", "company", "ever"];

const rokket = (list) => list.reduce((a, b) => (a.length > b.length ? a : b));

console.log(rokket(list));

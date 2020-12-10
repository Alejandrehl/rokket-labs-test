console.log("Rokket Labs Test");
console.log("Ejercicio 5");

/*
    5. Unique numbers
*/

const contacts = [
  { firstName: "Juanito", lastName: "Rokket" },
  { firstName: "James", lastName: "Bond" },
  { firstName: "Harry", lastName: "Potter" },
];

const rokket = (array1, array2) =>
  [...array1, ...array2].filter(
    (number, index, array) => array.indexOf(number) === index
  );

console.log(rokket([1, 2, 5], [2, 1, 6]));
console.log(rokket([1, 2, 3], [4, 5, 6]));

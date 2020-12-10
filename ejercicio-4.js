console.log("Rokket Labs Test");
console.log("Ejercicio 4");

/*
    4. Only last names
*/

const contacts = [
  { firstName: "Juanito", lastName: "Rokket" },
  { firstName: "James", lastName: "Bond" },
  { firstName: "Harry", lastName: "Potter" },
];

const rokket = (contacts) => contacts.map((contact) => contact.lastName);

console.log(rokket(contacts));

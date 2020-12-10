console.log("Rokket Labs Test");
console.log("Ejercicio 3");

/*
    3. String repetition
*/

const rokket = (word, times) => {
  let result = "";

  for (i = 0; i < times; i++) {
    result += word;
  }

  return result;
};

console.log(rokket("node", 5));
console.log(rokket("abc", 2));

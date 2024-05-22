let numeros = [1, 2, 3, 4, 5];
let evellin = numeros.filter(function(number) {
  return number % 2 === 0;
});

console.log(evellin);
const sumarNumeros = (numeros) =>
  numeros.reduce((acumulado, numero) => acumulado + numero, 0);

const numeros = [1, 2, 3, 4, 5];
console.log(`La suma es: ${sumarNumeros(numeros)}`);

const numeros2 = [7, 8, 9, 0, 5];

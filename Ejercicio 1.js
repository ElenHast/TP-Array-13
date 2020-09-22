/* 1 Considerando que se tiene un array de números (Por ej: [5,9,0,-5,9,7,63,...]).
Usted debe:
● Realizar una función que imprima la posición de aquellos números que
son iguales a 0 */
let items = [0,2,3,4,5,6,7,8,65,45,45,3,6745,45,345,0,34,0,34,0];
for (var i = 0; i < items.length; i++) {
  if (items[i]==0) {
    console.log("En la posicion", i + " hay un 0");
  }
}

/* Realizar una función que imprima los números almacenados en las
componentes de índice impar */
let items = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for (var i = 0; i < items.length; i++) {
  if (items[i]%2==1) {
    console.log("Indice impar = ", i);
  }
}

/* Realizar una función que retorne la posición en que se encuentra el
primer elemento negativo. Si no hay ningún componente negativo
deberá devolver 0. */
let items = [0,1,2,-3,4,5,6,-7,8,9,10,-11,12,13,14,15];
for (var i = 0; i < items.length; i++) {
  if (Math.sign(items[i]) == -1) { // Me falta que devuelva 0 si no hay ningno negativo
    console.log("La posicion del indice negativo es ", i);
  }
}

/* Realizar una función que reciba un valor N como parámetro y retorne
la cantidad de veces que aparece ese valor en el vector */
function cuantasvecesapareceN(numero) {
  let items = [0,1,2,2,2,3,4,5,6,7,4,3,2,3,4,7,78,9,9,10,0,11,11];
  numero = prompt("Que numero se repite");
  let numerRepetidos = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i] == numero) {
      numerRepetidos++;
    }
  } return console.log("El numero "+ numero +" se repite "+ numerRepetidos +" veces");
}
cuantasvecesapareceN()

/* Nota: cada función recibe un vector cargado con 15 números (además de los
parámetros que se indican en cada caso). */

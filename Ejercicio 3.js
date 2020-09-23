/* 3 Escribir una función que reciba un vector y un número “n” y lo retorne
cargado con los primeros 20 múltiplos del número n.
 */
 function multiplosEnArray(numeroN) {
   let items = [];
   let i = 1;
   let limite = 0;
   let multiplo = numeroN
   while (limite < 21) {
     items.push(multiplo)
     i++;
     multiplo = numeroN * i;
     limite++;
   } return console.log("Los multiplos de "+numeroN+" son ",items);
 }

multiplosEnArray(2);

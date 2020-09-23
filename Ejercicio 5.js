/* 5 Realizar una función que permita cargar un array de 20 posiciones con
números enteros. Se debe retornar aquellas posiciones en las que el valor
contenido sea múltiplo de 3.
 */

//TODAVIA NO FUNCIONA 
 function multiplo3(items) {
   items = []
   let x;
   let limite = 0;
   let multiplos3 = [];
   let i = 1;
   let multiplo;
   //Se insertan los valores en items para su comparacion
   while (x != 0) {
     x = parseInt(prompt("Inserte valores - Para parar inserte 0 "));
     items.push(x);
   }
   //Se consiguen los multiplos
   while (limite < 21) {
      multiplos3.push(multiplo)
      i++;
      multiplo = 3 * i;
      limite++;
    }
    //Comienza la comparacion
    limite = 0;
    let index = 0;
    let coincidencias = [];
    while (limite < 21) {
      if (items[index] == multiplos3) {
        coincidencias.push(items[index])
      }
      limite++;
    } return console.log("Coincidencias "+ coincidencias);
 }

 multiplo3();

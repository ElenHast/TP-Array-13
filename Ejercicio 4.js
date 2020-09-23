/* 4 Debe modificarse el desarrollo del punto anterior para permitir:
● Cargar un array con x múltiplos del número n, siendo que x y n son
valores que ingresa el usuario por teclado. Se deben imprimir los
valores calculados.
● Repetir el proceso hasta que el usuario ingrese 0 para la cantidad de
múltiplos a generar, es decir, cuando x = 0.
 */
function multiplosEnArray(numeroN,limiteMultiplos) {
  let items = [];
  let i = 1;
  let limite = 0;
  let multiplo = numeroN
  while (limite < limiteMultiplos) {
    items.push(multiplo)
    i++;
    multiplo = numeroN * i;
    limite++;
  } return console.log("Numero de multiples pedidos = "+limiteMultiplos+ " Los multiplos de "+numeroN+" son ",items);
}

multiplosEnArray(2,0);

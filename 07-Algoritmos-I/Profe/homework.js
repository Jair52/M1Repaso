"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // <- 9
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  // factorear(9) --> [1, 3, 3]     factorear(12) --> [1, 2, 2, 3]
  // Iteración
  const result = [1];
  let baseDiv = 2;
  while (num > 1) {
    if (num % baseDiv === 0) {
      // 5 % 2 => 0 NO  - 5 % 3 => 0 NO -  5 % 4 => 0 NO - 5 % 5 SI
      result.push(baseDiv);
      num = num / baseDiv;
    } else {
      console.log(baseDiv);
      baseDiv++;
      console.log(baseDiv);
    }
  }
  return result;
}
console.log(factorear(5)); //.toEqual([1,5]);
console.log(factorear(9)); //.toEqual([1,3,3]);
console.log(factorear(180)); // .toEqual([1,2,2,3,3,5]);
console.log(factorear(32)); // .toEqual([1,2,2,2,2,2]);
console.log(factorear(33)); //.toEqual([1,3,11]);

//!SORT
var arr1 = [2, 32, 1, 4];
var ordSort = arr1.sort((a, b) => a - b);
// (4) [1, 2, 4, 32]
console.log(ordSort);

//todo: Algoritmos de Ordenamiento. Todos toman lista desordenada y retornan lista ordenada
//? se necesitan 2 iteradores for{for}

//                                                                  i i+1
//    [5, 1, 4, 2, 8]    [1, 5, 4, 2, 8]  swap = true;    [1, 2, 4, 5, 8]      swap = false;
//         [1, 2, 5, 4, 8] swap = true
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  //                   i
  // Tu código: -> [1, 4, 5]       value in time swap -> false
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        swap = true;
      }
    }
  }
  return array;
}
console.log(bubbleSort([5, 1, 4]));
// console.log(bubbleSort([5, 1, 4, 2, 8]));
//.toEqual([1, 2, 4, 5, 8])

function insertionSort(array) {
  // <- [5, 1, 4]
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j >= 1; j--) {
      if (array[j] < array[j - 1]) {
        let aux = array[j];
        array[j] = array[j - 1];
        array[j - 1] = aux;
      } else {
        j = 0;
      }
    }
  }
  return array;
}
//      j-1 j
//                i
//      [1, 3, 4, 5]
console.log(insertionSort([5, 1, 4, 3]));

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        let aux = array[i];
        array[i] = array[j];
        array[j] = aux;
      }
    }
  }
  return array;
}
//                j
//             i
//      [1, 3, 4, 5]
console.log(selectionSort([5, 1, 4, 3]));
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

function insertionSortCarlos(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j >= 1; j--) {
      if (array[j] < array[j - 1]) {
        let aux = array[j];
        array[j] = array[j - 1];
        array[j - 1] = aux;
      } else {
        j = 0;
      }
    }
  }
  return array;
}

console.log(insertionSortCarlos([5, 1, 4, 2, 8]));

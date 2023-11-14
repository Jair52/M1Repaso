"use strict";
// No cambies los nombres de las funciones.
/*
 *01. extrae pivot y aplicar caso base
 *02. divide y ordena en [ ] left y [ ] right
 *03. aplicar recursion con [].length > 1  <- caso base es [].length <= 1
 *04. concat  y LISTO
 */
function quickSort(array) { // -> [4, 1, 2]
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array; // caso base
  let pivot = Math.floor(array.length / 2); // -> es el index (pos) en centro <- array[pivot]
  let left = [];
  let right = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== pivot) {
      if (array[i] <= array[pivot]) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  }
  return quickSort(left).concat(array[pivot]).concat(quickSort(right));
}

console.log(quickSort([4, 1, 2]));

function mergeSort(list) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (list.length <= 1) return list;
  let lineDiv = Math.floor(list.length / 2);
  console.log(lineDiv);

  let leftArray = list.slice(0, lineDiv);
  let rightArray = list.slice(lineDiv);
  console.log(leftArray);
  console.log(rightArray);

  leftArray = mergeSort(leftArray);
  rightArray = mergeSort(rightArray);

  let arrayResult = []; // [1,2]
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      arrayResult.push(leftArray.shift());
    } else {
      arrayResult.push(rightArray.shift());
    }
  }
  // leftArray []    rightArray [4, 8]
  arrayResult = arrayResult.concat(leftArray, rightArray);

  return arrayResult;
}

console.log(mergeSort([8, 4, 1, 2]));

/*
* 01. divide recursiva hasta que c/elem es un []   y el caso base es [].length <= 1
* 02. Ahora Merge y donde tb compara y ordena
*/

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

//todo: QuickSort

/*

*/
function quickSort(list) {
  // -> [1, 4, 3, 8, 2]
  /*
    * caso base -> 
    pivot -> 3 
    recorrer list -> elemn < o > a pivot

    arrLeft = [ 1, 2 ]
    arrRight = [ 4, 8 ]

     -> return  el concat quickSort(arrLeft)
    

    */
}

function mergeSort(list) {
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
  arrayResult = arrayResult.concat(leftArray, rightArray)

  return arrayResult;
}

console.log(mergeSort([8, 4, 1, 2]));

/*
!    MERGE       vs        QUICK

divide                   extrae pivot
recursiva                divide y ordena en [ ] left y [ ] right con recursion
hasta que                concat  y LISTO
c/elem es un []

Ahora Merge y con tb 
compara y ordena


*   parte parte parte ...      pivot -> parte y ordena
*   merge (une) compara        concat (une)
*   y ordena
*/

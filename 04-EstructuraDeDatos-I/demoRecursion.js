/*
Ejemplo gráfico con teoría de los conjuntos
El conjunto de todas las cosas menos autos
 C.C1
 -----------------------
|   C.C1                |
|     ----------        |
|    |   C.C1   |       |
|    |    ---   |       |
|    |   | c.|  |       |
|    |    ---   |       |
|     ----------        |
 -----------------------
*/

/*
var o1 = {
    a:1,
    z: o1
}

* OBJETOS ANIDADOS - PROFUNDIDAD - MULTI-DIMENSIONAL

f(){f(){f(){}}}
o1 = {{{{{{{{{{{{{{}}}}}}}}}}}}}}
[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]


* OBJETOS ANIDADOS a SI MISMO - PROFUNDIDAD - MULTI-DIMENSIONAL
! RECURSION
f(){f(){f(){}}}
o1 = {{{{{{{{{{{{{{}}}}}}}}}}}}}}
[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]

*/
const objO = {
  a: 1,
  b: 2,
};
objO.queLoco = objO;
console.log(objO);
// <ref *1> { a: 1, b: 2, queLoco: [Circular *1] }
//* 1 debe retornarse a si misma
//* 2 los argumentos que se pasan deben ser diferentes
//* 3 sentencia de cierre CORTE - CASO BASE (debe tener una condición que ayude a que corte)

// function firstFunctionRecursive(a){
//     return firstFunctionRecursive(a)
// }
// console.log(firstFunctionRecursive(1))
// firstFunctionRecursive(firstFunctionRecursive(firstFunctionRecursive(firstFunctionRecursive())))

//* La RECURSIÓN es un BUCLE
function countToZero(num) {
  if (num === 0) {
    return "he finalizado";
  } else {
    console.log(num);
    num--;
    return countToZero(num);
  }
}
console.log(countToZero(3));
/*
countToZero(3) -> return countToZero(2) -> return countToZero(1) -> return countToZero(0) -> "he finalizado"
*/
const testArray = [2, 3, 10, 6];

function sumArray(arr) {
  var result = 0;
  for (let i = 0; i < arr.length; i++) {
    // while  .map
    result += arr[i];
  }
  return result;
}
console.log(sumArray(testArray));

function sumRecursionArray(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let sum = arr.pop();
    console.log(arr)
    return sum + sumRecursionArray(arr);
  }
}
console.log(sumRecursionArray([2, 3, 10, 6]));
/*
sumRecursionArray([2, 3, 10, 6])
arr.length -> 4
sum = 6

return -> 6  + sumRecursionArray([ 2, 3, 10 ])  <- STAND BY - PAUSE
                    arr.length -> 3  
                    sum = 10
                return 10   +   sumRecursionArray([ 2, 3 ])
                                    arr.length -> 2
                                    sum = 3
                                return  3  +   sumRecursionArray([ 2 ])
                                                    arr.length -> 1
                                                    sum = 2
                                                return  2  +  sumRecursionArray([])
                                                                  arr.length -> 0
                                                                  return 0
                                                return 2 + 0
                                                 2
                                return  3   +    2
                                  5
                return  10   +    5
                   15
          6    +   15   
          21          
*/

"use strict";

//!IMPORTANTE 1) definir INPUT 2) definir OUTPUT  3) Usar mucho CONSOLE y lectura de errores + TEST

//! saber ver los test para mejorar interpretar que debemos hacer en base a INPUT y OUPUT
//? function BinarioADecimal(stringAndNotNum) {}
//todo: Recordar primero plantear el problema y la solución por fuera del code

// INPUT  "101"  ->  OUPUTnum 34
/*
          1  0  1
  pos      2  1  0

          1 * (2^2)  +  0 * (2^1)  +  1  * (2^0)  =
             4       +        0    +      1       =  5
*/
// function BinarioADecimal(string) {
//    var numResult = 0
//    let arrayBinary = string.split("").reverse()

//    console.log(arrayBinary)
//    for (let i = 0; i < arrayBinary.length; i++) {
//     console.log(i)
//     console.log(arrayBinary[i])
//     numResult = numResult + (arrayBinary[i] * (2 ** i))
//    }
//      // <- hardcodeo los test mintiendo
//      return numResult
// }

function BinarioADecimal(string) {
  var numResult = 0;
  var pos = string.length - 1;
  console.log(pos);

  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
    console.log("  ", pos);
    numResult = numResult + string[i] * 2 ** pos;
    pos--;
  }

  return numResult;
}

//? ver qué métodos podemos usar?
// console.log("hola".split("")) // + reverse + join
console.log(BinarioADecimal("1010")); // -> 10
// console.log(BinarioADecimal("1001")) // -> 9

/*
7 a binario que es "111":
                    resto es igual a decir "módulo" y en JS se usa % para obtener ello
7 / 2  resto     1                          
3 / 2  resto   1                          
1 / 2  resto 1
*/
function DecimalABinario(num) {
  var binaryString = "";
  while (num !== 0) {
    console.log(num);
    binaryString = (num % 2) + binaryString;
    num = Math.floor(num / 2);
  }
  console.log(num)
  return binaryString;
}
console.log(DecimalABinario(12)); // "1100"
// console.log(DecimalABinario(7)); // "111"

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};

/*
1001 -> 9

pos
 3  2  1  0
 1  0  0  1

 (2^3 * 1)    +   (2^2 * 0)   +   (2^1 * 0)   +  (2^0 * 1) 
    8         +       0       +       0       +      1      =   9

 2^0 = 1
*/

/*
*STEPS

1. leer consigna
2. reforzar idea con lectura de los TEST u otro doc. adicional si lo hay
3. hacer preguntas

!4. IMPORTANTE
  a) definir INPUT
  b) desarrollar un PROCESO
  c) definir OUTPUT

5. Implementar mucho uso de console tanto como sea posible y necesario, sea así para:
  a) definir INPUT
  b) durante desarrollar PROCESO
  c) definir OUTPUT

6. De no entender aún el problema volver a realizar todos los pasos

Consejos:
- Iniciar en code siempre con algo simple
- Dividir el problema en pequeñas tareas
- Usar pseudo code de ser necesario, es decir desarrollar la solución antes en palabras o gráficos
que nos ayuden a entender bien claramente que debemos hacer


{} Diccionario
[] Lista

INPUT [{}{}{}{}], code (num o string)   -> params ()

OUTPUT return {}
*/


/*

7,56

["111", "10101100"]
*/

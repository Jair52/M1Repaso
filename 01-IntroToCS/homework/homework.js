'use strict';

function BinarioADecimal(num) {
   
   let numero = num.toString();
   let constante = 0;

   for(let i = 0; i < numero.length; i++){
      if( numero[i] == '1'){
         constante += Math.pow( 2 , numero.length - 1 - i );
      }
   }
   num = constante;
   return num;

   //return parseInt(num, 2);

////////
/*//!Profesor
   var numResult = 0;
   let arrayBinary = num.split("").reverse();

   console.log(arrayBinary); //['0', '1', '0', '1']
   for(let i = 0; i < arrayBinary.length; i++){
      console.log(i); //0, 1, 2, 3
      console.log(arrayBinary[i]); //0, 1, 0, 1
      numResult= numResult + (arrayBinary[i] * (2**i));
   }
   return numResult
*/

}

function DecimalABinario(num) {
   
   let numero = [];
   
   while(num > 0){
      numero.push(num % 2);
      num = Math.floor(num / 2);
   }
   
   return numero.reverse().join("");

////////
/*//!Profesor
   var binaryString = "";
   while(num !== 0 ){
      console.log(num); //12, 6, 3, 1
      bynariString = (num % 2) + binaryString;
      num = Math.floor(num / 2);
   }
   console.log(num); /0
   return binarySting
*/

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};

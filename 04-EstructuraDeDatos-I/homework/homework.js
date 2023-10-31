'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) 
es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1
*/
/*//Manera iterativa
 function nFactorial(n) {
   var factorial = 1;
   if(n === 0 ){
     return 1;
   } else{     
     if(n >= 1){
       factorial = factorial * (n);
       n = n - 1;
     }
     console.log(factorial);
     console.log(n);  
   }+
  return factorial * nFactorial(n);
 }
*/

//Manera Recursiva
var ver = 1 ;
function nFactorial(n) {
  if (n === 0 || n ===1) {
    return 1
  } else {
    console.log(n);
    return n * nFactorial(n - 1);
    
  }
}
console.log(nFactorial(6));
/*
nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como 
primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el numado 
de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 

*/

//!Manera Recursiva
function nFibonacci(n) {
  if(n === 0){
    return 0;
  }else{ if(n === 1){
    return 1
  }
    return nFibonacci(n - 1) + nFibonacci(n - 2);
  }
}
console.log(nFibonacci(7));

/*
//Manera iterativa
function nFibonacci(n) {
  let num = [0, 1]
  for (let i = 2; i <= n; i++) {
    num.push(num[i - 1] + num[i - 2])
  }
  return num[n]
}
console.log(nFibonacci(5));
*/
/*Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones 
que logren los mismos numados pero de manera iterativa.
*/



/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.
  Extras
  - changeFirstElement: cambia el elemento que se encuentra al inicio de la queue
  - changeLastElement: cambia el elemento que se encuentra al final de la queue
  * practicar pasando el modo Function constructora a Clase Constructora (Class)
*/
/* //!Protoype
function Queue() {
    this.elements = []   
}

Queue.prototype.vacio = function (){
  if(this.elements.length == 0){
    return this.elements.push(undefined);
  }
}

Queue.prototype.enqueue = function (item) {
  this.elements.unshift(item);
}

Queue.prototype.dequeue = function (item) {
    return this.elements.pop();
}

Queue.prototype.size = function () {
  return this.elements.length;
}


//Extra
Queue.prototype.firstElement = function (item) {
  this.elements.shift();
  this.elements.unshift(item);
}

Queue.prototype.lastElement = function (item) {
  this.elements.pop();
  this.elements.push(item);
}



const test = new Queue( )
// test.enqueue("fufu")
// test.enqueue("wow")
// test.enqueue("wuw")
// test.dequeue()
// test.firstElement("fuau")
// test.lastElement("wu")
// test.dequeue()
// test.enqueue("wow")
// test.enqueue("wuw")
// test.dequeue()
console.log(test)
*/
//////! Clase Constructora

class Queue {
  constructor(elements){
    this.elements = []; 
  }
  
  vacio (){
    if(this.elements.length == 0){
      return this.elements.push(undefined);
    }
  }

  enqueue (item) {
    this.elements.unshift(item);
  }

  dequeue (item) {
    return this.elements.pop();
  }

  size () {
    return this.elements.length;
  }

  firstElement (item) {
    this.elements.shift();
    this.elements.unshift(item);
  }
  
  lastElement (item) {
    this.elements.pop();
    this.elements.push(item);
  }

}

const test = new Queue(  )
test.enqueue("fufu")
 test.enqueue("wow")
// test.enqueue("wuw")
 test.dequeue()
// test.firstElement("fuau")
// test.lastElement("wu")
// test.dequeue()
// test.enqueue("wow")
// test.enqueue("wuw")
// test.dequeue()
console.log(test)

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};

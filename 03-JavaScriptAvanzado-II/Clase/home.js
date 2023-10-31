// "use strict";
//* Remarcar
//! Para activar el "use strict" en QUOKKA aveces se debe matar y volver a levantar una vez hecho el cambio a "use strict" o eliminado o comentado este
// nombre = "Manolito";
// console.log(nombre);

//* CONTEXTO - SCOPE
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // 10
   console.log(a); // 8
   var f = function (a, b, c) {
      b = a; // 9 -> 8
      console.log(b); // 8
      b = c; // 8 -> 10
      var x = 5;
   };
   f(a, b, c);
   console.log(b); // 9 ? 10
};
c(8, 9, 10);
console.log(b); // 10
console.log(x); // 1

// console.log(global)

//TODO:       --- BUEN DÍA PARA TODOS!!!! --- en breve inicamos!!!

function pepe(numA,numB){
   var dede=2
   var fufu="hi"
}

pepe(8,9)

//* HOISTING
console.log(bar); // undefined
// console.log(baz); //! not defined
foo();
function foo() {
   console.log('Hola!'); // "Hola"
}
var bar = 1;
baz = 2;


//* BLOQUES - !== entre var let const | VAR trabaja por contexto y No por bloque 
// LET trabaja por BLOQUE
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco'; // este chango quiso escribir instructor = 'Franco'
   console.log(instructor)
}
console.log(instructor); // Franco

const edad = 45
const arr = [] // F34AA
const obj = {} // GT65A
obj.name = "mau"

const KEY_CODE = 1234

//*CONTEXTO
var instructor = 'Tony';
console.log(instructor); // Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony


//* BLOQUE
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // 'The Flash'
   console.log(pm);// 'Reverse Flash'
}
console.log(instructor);// 'The Flash'
console.log(pm);// 'Franco'

//todo: VAR tiene mayor SCOPE en cuanto a bloques y el LET NO

//* Coerción de Datos
/*
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
{}[0]
parseInt("09")
5 && 2
2 && 5
5 || 0
0 || 5
[3]+[3]-[10]
3>2>1
[] == ![]
*/

//* CONTEXTO + HOISTING
function test() {
   console.log(a); // undefined
   console.log(foo()); // 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

//* CONTREXTO + BLOQUE
var snack = 'Meow Mix';

function getFood(food) {
   // var snack
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

console.log(getFood(false)); // undefined


//* THIS
var fullname = 'Juan Perez';

var objQ = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(objQ.prop.getFullname()); // Aurelio

var test = objQ.prop.getFullname; // -> function () {return this.fullname;},

console.log(test()); // undefined null 


//*ASYNC
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();// 1 4 3 2
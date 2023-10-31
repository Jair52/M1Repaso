//* CLOSURE - PLANTILLAS -> ejemplo -> memoCache

function myFirstMemoB() {
  return function () {};
}
function myFirstMemoC() {
  const exprFuncClosure = function () {};
  return exprFuncClosure;
}
//
function myFirstMemo() {
  var data = [];
  function myInternFunction(user) {
    // console.log(data);
    data.push(user);
    return data;
  }
  return myInternFunction;
}

const instanciaFuncClosure = myFirstMemo(); // Ejecuto y lo que retorna lo tengo -> function myInternFunction(){console.log("queeeee")}
console.log(instanciaFuncClosure("mau"));
console.log(instanciaFuncClosure("didi"));

const instanciaFuncClosure2 = myFirstMemo();
console.log(instanciaFuncClosure2("pepe"));

function mySecondClosureMemo(obj = {}) {
  return function (nombreProp, valueProp) {
    obj[nombreProp] = valueProp;
    return obj;
  };
}
const instanceMySecondClosureObjMemo = mySecondClosureMemo();
console.log(instanceMySecondClosureObjMemo("nombre", "pepe"));
console.log(instanceMySecondClosureObjMemo("edad", "32"));
console.log(instanceMySecondClosureObjMemo("altura", "2 m"));

const instanceMySecondClosureObjMemo2 = mySecondClosureMemo();
console.log(instanceMySecondClosureObjMemo2("nombre", "manolito"));

function book() {
  let str = "";
  const closureBook = function (texto) {
    str = str + " " + texto;
    return str;
  };
  return closureBook;
}

const instanceBook = book();
console.log(instanceBook("Por estar 10 días a la deriva sin"));
console.log(instanceBook("comer ni beber, "));

const instanceBook2 = book();
console.log(instanceBook2("En un lugar de la mancha "));

// CLOSURE ULTRA SUPER
function myHyperCache() {
  let info = [];
  return {
    add: function (data) {
      info.push(data);
      return info;
    },
    delete: function () {
      info.pop();
      return info;
    },
  };
}

const instanceUltraClosure = myHyperCache(); // -> { add: [λ: add], delete: [λ: delete] }  ∞ info = [];
console.log(instanceUltraClosure);
console.log(instanceUltraClosure.add(8));
console.log(instanceUltraClosure.add(43));
console.log(instanceUltraClosure.delete());
/*
TODO: CLOSURES
* Pasos Clave
- Paso 1: Definir una Función Dentro de Otra Función
Las closures se crean cuando una función define otra función dentro de sí misma. 
Esta función interna es lo que se conoce como la closure. 
La función interna tiene acceso a las variables y parámetros de la función externa.

- Paso 2: Acceder al Contexto de la Función Padre
La closure puede acceder a variables y parámetros que se encuentran en la función externa, 
incluso después de que la función externa haya finalizado su ejecución. 
Esto permite encapsular datos y comportamientos dentro de la función interna.

* Ejemplos de Utilidad de las Closures:
- Memoria (Caché):
Se utilizan para implementar una memoria caché (memo caché) que almacena resultados de cálculos 
anteriores.
- Privacidad y Encapsulación:
Permiten encapsular datos y functions dentro de un contexto privado, ocultando detalles de implementación.
- Constructor de Objetos:
Las closures son útiles para crear objetos personalizados con propiedades y métodos privados.
- Manejo de Datos Asincrónicos:
Las closures son esenciales para el manejo de datos asíncronos, como en solicitudes AJAX o llamadas 
a bases de datos.

* Las closures en JavaScript son como plantillas flexibles que encapsulan datos y lógica, 
permitiendo un mejor manejo de variables y la reutilización de funciones especializadas. 
*/

// CLOSURE en BLOQUE y con var o let
var creaFuncion = function () {
  var arreglo = []; // [f{}, f{}, f{}]
  // var i = undefined
  for (var i = 0; i < 3; i++) {
    // var i el dato enlace   // i = 0
    arreglo.push(function () {
      console.log(i);
      return i;
    });
  }
  //* LET nace y muere en su propio BLOQUE
  return arreglo; // [function(){return i},function(){return i},function(){return i}]
};

var arr = creaFuncion(); // arr -> arreglo [f(){log(i)},f(){log(i)},f(){log(i)}]

console.log(arr[0]()); // 3 sale un 3, qué esperaban ustedes??
console.log(arr[1]()); // 3
console.log(arr[2]()); // 3

//TODO: BIND CALL APPLY

// Bindeamos de manera casera
const user1 = {
  name: "mau",
  edad: 32,
};
const user2 = {
  name: "pepe",
  edad: 12,
};

function searchPrintName(saludo) {
  return this.name + " " + saludo;
}

user1.searchPrintName = searchPrintName;
console.log(user1);
console.log(user1.searchPrintName("hi"));

//* BIND
const user3 = {
  name: "jimy",
  edad: 122,
};
//                    function.bind(objetoAbindear)
const searchNameInstanceBIND = searchPrintName.bind(user3);
console.log(searchNameInstanceBIND); // al instanciar guarda la function bindeada
console.log(searchNameInstanceBIND("hi soy bind"));

//* CALL
//                                    function.call(objetoAbindear, params1, params2...)
const searchNameInstanceCALL = searchPrintName.call(user3, "hola soy CALL"); // el Call, va bindea y ejecuta
console.log(searchNameInstanceCALL);

//* APPLY
//                                    function.call(objetoAbindear, [params1, params2...])
const searchNameInstanceAPPLY = searchPrintName.apply(user3, [
  "hola soy APPLY",
]); // el Call, va bindea y ejecuta
console.log(searchNameInstanceAPPLY);

//* extra BIND -> especie de closure y sin la verdadera utilidad del bind
function mult(a, b) {
  return a * b;
}
// NO enlaso la function a un objeto
// pero uso el BIND para pasar params en partes (etapas)
const multDos = mult.bind(null, 2)
console.log(multDos(3))
console.log(multDos(4))


const miArrayLoco = []
miArrayLoco.data={}
miArrayLoco.push = function(){
    miArrayLoco[3]= "hola soy re loco"
}
miArrayLoco.push()
console.log(miArrayLoco)



//* QUIERO HACER UN MÉTODO
// function que interactua con datos dentro de un obj determinado
// Siempre necesitamos el THIS
'use strict';

// Closures
/* Ejercicio 1
La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2 */

function counter() {
  let constante = 1;
   function count() {
    return constante ++;
  }
  return count;
}
const nuevoContador = counter();
console.log(nuevoContador(counter));    
console.log(nuevoContador(counter));    

const otroContador = counter()
console.log(otroContador(counter));     
console.log(otroContador(counter));     

/* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; 
hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, 
y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, 
no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) */

function cacheFunction(cb) {
  const obj = {};
  return function square(arg){
    if(obj.hasOwnProperty(arg)){
       return "Esa key de value " + obj[arg] + " ya existe";
    }
    obj[arg] = cb(arg);
    return arg + ":" + obj[arg];
  }
}

////
/* //!Profesor
const cbDemo = function(x){
  return x*2;
}

function cacheFunction(cb) {
  //{key->arg : value->arg*2}
  const cache = {};
  return function (num){
    if(cache.hasOwnProperty(num)){
       return "Esa key de value " + cache[num] + " ya existe";
    }
    cache[num] = cb(num);
    return num + ":" + cache[num];
  }
}

const instClosureCacheSimple = cacheFunction(cbDemo); -> function (arg) {cache[arg] = arg *2; return cache;}
console.log(instClosureCacheSimple(2)); //2:4
console.log(instClosureCacheSimple(3)); //3:6
console.log(instClosureCacheSimple(5)); //5:10
console.log(instClosureCacheSimple(3)); //Esa key de value ya existe
*/


// const squareCache = cacheFunction()
// console.log(squareCache(5));
//----------------------------------------

// Bind

var instructor = {
   nombre: 'Franco',
   edad: 25,
};

var alumno = {
   nombre: 'Juan',
   curso: 'FullStack',
};

function getNombre() {
  return this.nombre;
};

/*
  Ejercicio 3
  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero 
  retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);
console.log(getNombreInstructor());
console.log(getNombreAlumno());


/*
  Ejercicio 4
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, 
  tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). 
  Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorDerecha, delimitadorIzquierda, cadena) {
    return  delimitadorIzquierda + cadena + delimitadorDerecha;
}

//                       function.bind(obj, params1, params2, etc)
let textoAsteriscos = crearCadena.bind(null, '*', '*');
let textoGuiones = crearCadena.bind(null, '-', '-');
let textoUnderscore = crearCadena.bind(null, '_', '_');

console.log(textoAsteriscos("hola"));
console.log(textoGuiones("chao"));
console.log(textoUnderscore("holi"));

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   counter,
   cacheFunction,
   getNombreInstructor,
   getNombreAlumno,
   textoAsteriscos,
   textoGuiones,
   textoUnderscore,
};

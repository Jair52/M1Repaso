'use strict';
/*
/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular 
    de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro 
  puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; 
  en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, 
  busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList(id) {
  this.head = null,
  this._length = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
} // --> const nodito = new Node(3); --> {value:3, next:null}

LinkedList.prototype.add = function(value) {
  const newNode = new Node(value);
  //if(this.head === null){ // (this.head)    (null) <-- false    ({}) <-- true
  if(!this.head){
    this.head = newNode;
  }else{
    let current = this.head;
    while(current.next){ // (null) <- false   ({}) <-- true
      current = current.next;
    }
    current.next = newNode;
  }
  this._length++
  return newNode;
}

LinkedList.prototype.remove = function(value) {
  if(!this.head) return null;
  var current = this.head;
  if(!this.head.next){ // el next que sigue al head es null
    this.head = null;
    this._length--;
    return current.value;
  }else{
    while(current.next.next){//({}) <- true   (null) <- false
      current = current.next;
    } // aqui va a avanzar hasta no el ultimo next, sino uno anterior
    const valueCopy = current.next.value
    current.next = null;
    this._length--;
    return valueCopy;
  }
}
//function(nodeValue) {return nodeValue === 'two'} ---> true OR false
/*//!Busqueda normal
LinkedList.prototype.search = function (value){
  if(!this.head) return null;
  var current = this.head;
  while (current) {
    if(current.value === value){
      return current.value;
    }
    current = current.next;
  }
  return null;
}
*/

LinkedList.prototype.search = function (valueOrcb){
  if(!this.head) return null;
  var current = this.head;
  if(typeof valueOrcb === "function"){
    while (current) {
      if(valueOrcb(current.value)){
        return current.value;
      }
      current = current.next;
    }
  }
  while (current) {
    if(current.value === valueOrcb){
      return current.value;
    }
    current = current.next;
  }
  return null;
}

const listTest = new LinkedList() // <== {head:null, _length :0}
listTest.add(8);
listTest.add(12);
listTest.add(4);
// listTest.remove();
console.log(listTest.search(12));
console.log(listTest)

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; 
es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor 
(por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, 
a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por 
parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, 
  suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula 
  el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en 
  la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash,
   y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya 
hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par 
clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.buckets = [];
  this.numBuckets = 35;
}

HashTable.prototype.hash = function(str){
  var result = 0;
  for(let i = 0; i < str.length; i++){
    result += str[i].charCodeAt();
  }
  return result % this.numBuckets;
}

HashTable.prototype.set = function(key, value){
  if(typeof key !== "string") throw TypeError('Keys must be strings')
  let numBox = this.hash(key);

  if(this.buckets[numBox] === undefined){
    this.buckets[numBox] = {}
  }
  this.buckets[numBox][key] = value;
  return this.buckets;
}


HashTable.prototype.get = function(key){
  let numBox = this.hash(key);
  if(this.buckets[numBox] && this.buckets[numBox][key]){
    return this.buckets[numBox][key]
  }
  return null;
}

HashTable.prototype.hasKey = function(key){
  const result = this.get(key);
  if(result) return true;
  else return false;
}

const hashTest = new HashTable();
console.log(hashTest);
console.log(hashTest.hash('pepe'));


var resultArr = [];
resultArr[34] = null;
resultArr[5] = {};
resultArr[5].edad = 87;
console.log(resultArr)

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};

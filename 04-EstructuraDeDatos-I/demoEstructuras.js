//* MODELO A ARMAR
//? diferenciar del Tipo de Datos a USAR

// LIFO
// array es el mejor Tipo de Dato para crear una Estructura STACK

const stack1 = [];

function add(element) {
  stack1.push(element);
}
function deleteQ(element) {
  stack1.pop();
}
add(8);
add(2);
add(5);
deleteQ();
console.log(stack1);

// Otra manera para cumplir esta lógica de STACK
const stack2 = [];
function add2(element) {
  stack2.unshift(element);
}
function deleteQ2(element) {
  stack2.shift();
}

add2(8);
add2(2);
add2(5);
deleteQ2();
console.log(stack2);

//! IMPORTANTE
// * Para las ESTRUCTURAS de DATOS vamos a utilizar CLASES CONSTRUCTORAS
// CLASES -> Herencia <- orientado a objetos
// STACK usando THIS

const products = {
  data: [],
  sum: function (val) {
    this.data;
  },
};
function addProduct(product) {
  this.data.push(product);
  return this.data;
}
function deleteProduct() {
  this.data.pop();
  return this.data;
}
const addProductInData = addProduct.bind(products);
const deleteProductInData = deleteProduct.bind(products);

console.log(addProductInData("mate"));
console.log(addProductInData("cafe"));
console.log(addProductInData("silla"));
console.log(deleteProductInData());

console.log(products);

//* CLASS constructor de JS -> { props y métodos}
class Construir {
  constructor(id) {
    (this.id = id), (this.casa = []);
  }
  // add(cosa){
  //     this.casa.push(cosa)
  // }
}

// Anexamos y creamos los Métodos con PROTOTYPE
Construir.prototype.add = function (element) {
  this.casa.push(element);
};
Construir.prototype.remove = function () {
  this.casa.pop();
};

// Una CLASE inicialmente es una Plantilla con propiedades y métodos dentro ({})
console.log(Construir);

// Al instanciar, al querer usar esta plantilla obtenemos el objeto y sus métodos ocultos
const initCasa = new Construir(23);
console.log(initCasa);
initCasa.add("mesa");
initCasa.add("cuadro");
initCasa.remove();
console.log(initCasa);

//* FUNCTION CONSTRUCTORA
function ConstruirB(id) {
  this.id = id;
  this.casa = [];
  // this.add = function(){}
}
ConstruirB.prototype.add = function (element) {
  this.casa.push(element);
};
ConstruirB.prototype.remove = function () {
  this.casa.pop();
};

console.log(ConstruirB);
const instConstruirB = new ConstruirB(8);
console.log(instConstruirB);

//!-------------------------------------
//* CLASE -> init -> OBJETO con PROPS 
//!-------------------------------------

function InitNewClassReceta(id, title, nombre) {
  this.user = {
    nombre: nombre,
    id: id,
  };
  this.receta = [];
  this.title = title;
}
InitNewClassReceta.prototype.agregarIngredientes = function (a) {
  this.receta.push(a);
};
InitNewClassReceta.prototype.viewName = function () {
  return this.user.nombre;
};
const vamosConLaReceta = new InitNewClassReceta(23, "mondongo", "juan");
console.log(vamosConLaReceta);
vamosConLaReceta.agregarIngredientes("sal");
vamosConLaReceta.agregarIngredientes("pimienta");

console.log(vamosConLaReceta);
console.log(vamosConLaReceta.user.nombre);
console.log(vamosConLaReceta.viewName());

//* QUEUE -> FIFO
function ConstruirCCC(id) { // por buena práctica usamos mayúscula para el name de la class
    // Lo que define que esto sea una CLASE C. es el uso interno del this
  this.id = id;
  this.casa = [];
  // this.add = function(){}
}
ConstruirCCC.prototype.enqueue = function (element) {
  this.casa.push(element);
};
ConstruirCCC.prototype.dequeue = function () {
  this.casa.shift();
};

ConstruirCCC.prototype.size = function () {
    return this.casa.length;
  };
const test = new ConstruirCCC(43)
test.enqueue("fufu")
test.enqueue("wewe")
test.dequeue()
console.log(test)
console.log(test.size())
/*
ConstruirCCC.prototype.add = function (element) {
  this.casa.unshift(element);
};
ConstruirCCC.prototype.remove = function () {
  this.casa.pop();
};
*/
